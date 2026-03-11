import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Switch, Text, TouchableOpacity, View } from 'react-native';
import { ScreenView } from '../../../components/screenView';
import { dacks } from '../../../db/dakcs';

export default function GameScreen() {
    const { id, players, withDrinks } = useLocalSearchParams<{ id: string, players: string, withDrinks: string }>();
    const isDrinkMode = withDrinks === 'true';
    const router = useRouter();

    const [gamePlayers, setGamePlayers] = useState(() => {
        return players ? JSON.parse(players).map((p: any) => ({ ...p, score: 0 })) : [];
    });

    const originalDeck = dacks.find(d => d.id === id);

    const [deckCards] = useState(() => {
        return originalDeck ? shuffleArray(originalDeck.cards) : [];
    });
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const [challengeDone, setChallengeDone] = useState(false);
    const [doseDone, setDoseDone] = useState(false);

    const currentCard = deckCards[currentCardIndex];
    const currentPlayer = gamePlayers[currentPlayerIndex];

    function shuffleArray<T>(array: T[]): T[] {
        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    const handleNextTurn = () => {
        let earnedPoints = 0;
        if (isDrinkMode) {
            if (challengeDone && doseDone) earnedPoints = (currentCard?.points || 0) * 2;
            else if (challengeDone || doseDone) earnedPoints = 1;
        } else {
            if (challengeDone) earnedPoints = currentCard?.points || 1;
        }

        const updatedPlayers = [...gamePlayers];
        updatedPlayers[currentPlayerIndex].score += earnedPoints;
        setGamePlayers(updatedPlayers);

        setChallengeDone(false);
        setDoseDone(false);

        if (currentCardIndex < deckCards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setCurrentPlayerIndex((currentPlayerIndex + 1) % gamePlayers.length);
        } else {
            setGameOver(true);
        }
    };

    if (gameOver) {
        const winners = [...gamePlayers].sort((a, b) => b.score - a.score);
        return (
            <ScreenView style={{ backgroundColor: "#0a0a0c" }}>
                <View className="flex-1 justify-center items-center p-8">
                    <Text className="text-6xl mb-4">🏆</Text>
                    <View className="flex-row items-center mb-8">
                        <Text className="text-white text-4xl font-black uppercase italic">RANKING</Text>
                        <View className="ml-2 h-2 w-2 rounded-full bg-[#E33379]" />
                    </View>

                    {winners.map((p, i) => (
                        <View
                            key={p.id}
                            style={{
                                backgroundColor: '#161618',
                                borderLeftWidth: 6,
                                borderLeftColor: p.color,
                                shadowColor: p.color,
                                shadowOpacity: 0.1,
                                shadowRadius: 10
                            }}
                            className="w-full flex-row items-center mb-4 p-6 rounded-2xl border border-white/5"
                        >
                            <Text className="text-gray-500 font-black text-xl mr-4 italic">#{i + 1}</Text>
                            <Text className="text-white font-black text-lg flex-1 uppercase tracking-tighter">{p.name}</Text>
                            <View className="bg-white/5 px-3 py-1 rounded-lg">
                                <Text className="text-white font-black text-xl">{p.score} <Text className="text-[10px] text-gray-500">PTS</Text></Text>
                            </View>
                        </View>
                    ))}

                    <TouchableOpacity
                        onPress={() => router.replace('/')}
                        className="mt-10 bg-[#E33379] w-full py-5 rounded-[25px] items-center shadow-2xl shadow-[#E33379]/40"
                    >
                        <Text className="text-white font-black text-lg uppercase italic tracking-widest">NOVO JOGO</Text>
                    </TouchableOpacity>
                </View>
            </ScreenView>
        );
    }

    return (
        <ScreenView style={{ backgroundColor: "#0a0a0c" }}>
            <StatusBar barStyle="light-content" />

            {/* Header Abas de Navegador */}
            <View className="flex-row px-2 pt-4 bg-[#0a0a0c]">
                {gamePlayers.map((player: any, index: number) => {
                    const isActive = index === currentPlayerIndex;
                    return (
                        <View key={player.id} className="flex-1 mr-1"
                            style={{
                                borderTopLeftRadius: 15, borderTopRightRadius: 15,
                                backgroundColor: isActive ? player.color : '#161618',
                                height: isActive ? 58 : 48,
                                marginTop: isActive ? 0 : 10,
                                justifyContent: 'center', alignItems: 'center',
                                opacity: isActive ? 1 : 0.6,
                                borderBottomWidth: isActive ? 0 : 1,
                                borderBottomColor: '#0a0a0c'
                            }}>
                            <Text className="font-black text-[9px] uppercase" style={{ color: isActive ? '#000' : '#666' }}>{player.name}</Text>
                            <Text className="font-black text-[14px]" style={{ color: isActive ? '#000' : '#fff' }}>{player.score}</Text>
                        </View>
                    );
                })}
            </View>

            <ScrollView contentContainerStyle={{ padding: 24 }}>
                <View className="flex-row justify-between items-end mb-8 px-1">
                    <View>
                        <Text className="text-gray-600 font-black uppercase text-[10px] tracking-[2px]">JOGO {originalDeck?.name}</Text>
                        <Text className="text-white font-black text-2xl uppercase italic">Rodada {currentCardIndex + 1}/{originalDeck?.cards.length}</Text>
                    </View>
                    <View style={{ backgroundColor: currentPlayer.color }} className="px-4 py-1.5 rounded-full shadow-lg shadow-black">
                        <Text className="text-black font-black text-[10px] uppercase italic">Ativo</Text>
                    </View>
                </View>

                {/* Card de Desafio Estilizado */}
                <View
                    style={{
                        backgroundColor: '#161618',
                        borderWidth: 2,
                        borderColor: currentPlayer.color,
                        shadowColor: currentPlayer.color,
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.3,
                        shadowRadius: 20,
                        elevation: 10
                    }}
                    className="rounded-[45px] p-10 min-h-[300px] items-center justify-between overflow-hidden"
                >
                    <Text className="text-gray-400 font-black uppercase tracking-[4px] text-[10px]">{currentCard?.name}</Text>

                    <Text className="text-white text-[18px] font-black text-center leading-[32px] uppercase italic tracking-tighter">
                        {currentCard?.desafio}
                    </Text>

                    <View className="w-full gap-4 flex-row justify-center items-center space-x-4">
                        <View className=" rounded-[20px] items-center">
                            <Text className="text-gray-400 text-[9px] font-black uppercase mb-1">Valor</Text>
                            <Text className="text-white font-black text-xl">⭐ {currentCard?.points}</Text>
                        </View>
                    </View>
                </View>

                {/* Switches de Controle */}
                <View className="mt-10 gap-2 space-y-4">
                    <View className="bg-[#161618] p-4 rounded-[30px] flex-row justify-between items-center border border-white/5">
                        <View>
                            <Text className="text-white text-lg font-black uppercase italic">Desafio Feito</Text>
                            <Text className="text-gray-500 text-xs font-medium">O jogador completou a tarefa?</Text>
                        </View>
                        <Switch
                            value={challengeDone} onValueChange={setChallengeDone}
                            trackColor={{ false: "#333", true: "#4ade80" }} thumbColor="#fff"
                        />
                    </View>

                    {isDrinkMode && (
                        <View className="bg-[#161618] p-4 rounded-[30px] flex-row justify-between items-center border border-white/5">
                            <View>
                                <Text className="text-white text-lg font-black uppercase italic">Tomar {currentCard?.dose} doses 🥃</Text>
                                <Text className="text-[#E33379] text-xs font-black uppercase tracking-widest">Voce tambem pode beber</Text>
                            </View>
                            <Switch
                                value={doseDone} onValueChange={setDoseDone}
                                trackColor={{ false: "#333", true: "#E33379" }} thumbColor="#fff"
                            />
                        </View>
                    )}
                </View>

                {/* Botão Confirmar */}
                <TouchableOpacity
                    onPress={handleNextTurn}
                    activeOpacity={0.9}
                    style={{
                        backgroundColor: currentPlayer.color,
                        shadowColor: currentPlayer.color,
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.4,
                        shadowRadius: 15,
                        elevation: 12
                    }}
                    className="mt-10 h-20 rounded-[30px] items-center justify-center"
                >
                    <Text className="text-black font-black text-xl uppercase italic tracking-[3px]">
                        {currentCardIndex === (originalDeck?.cards.length || 0) - 1 ? 'Finalizar Jogo' : 'Próximo Desafio'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.back()} className="mt-8 mb-10 self-center">
                    <Text className="text-gray-700 font-black uppercase text-[10px] tracking-[3px]">Finalizar sessão</Text>
                </TouchableOpacity>
            </ScrollView>
        </ScreenView>
    );
}