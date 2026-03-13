import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Linking, StatusBar, Text, TouchableOpacity, View } from 'react-native';
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
            else if (challengeDone || doseDone) earnedPoints = currentCard?.points;
        } else {
            if (challengeDone) earnedPoints = currentCard?.points;
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
                    <TouchableOpacity
                        onPress={() => Linking.openURL("https://tally.so/r/obBZlM")}
                        className="mt-4 bg-[#fff] w-full py-5 rounded-[25px] items-center shadow-2xl shadow-[#E33379]/40"
                    >
                        <Text className="text-black font-black text-md uppercase italic tracking-widest">Dar feedback</Text>
                    </TouchableOpacity>
                </View>
            </ScreenView>
        );
    }

    return (
        <ScreenView style={{ backgroundColor: "#0a0a0c", flex: 1 }}>
            <StatusBar barStyle="light-content" />

            {/* Header Abas - Mantido */}
            <View className="flex-row px-2 pt-4 bg-[#0a0a0c]">
                {gamePlayers.map((player: any, index: number) => {
                    const isActive = index === currentPlayerIndex;
                    return (
                        <View key={player.id} className="flex-1 mr-1"
                            style={{
                                borderTopLeftRadius: 15, borderTopRightRadius: 15,
                                backgroundColor: isActive ? player.color : '#161618',
                                height: isActive ? 52 : 44,
                                marginTop: isActive ? 0 : 8,
                                justifyContent: 'center', alignItems: 'center',
                                opacity: isActive ? 1 : 0.6,
                            }}>
                            <Text className="font-black text-[8px] uppercase" style={{ color: isActive ? '#000' : '#666' }}>{player.name}</Text>
                            <Text className="font-black text-[12px]" style={{ color: isActive ? '#000' : '#fff' }}>{player.score}</Text>
                        </View>
                    );
                })}
            </View>

            {/* Container Principal Sem Rolagem */}
            <View className="flex-1 px-6 py-4 justify-between">

                {/* Info da Rodada */}
                <View className="flex-row justify-between items-center mb-2">
                    <View>
                        <Text className="text-gray-600 font-black uppercase text-[9px] tracking-[2px]">{originalDeck?.name}</Text>
                        <Text className="text-white font-black text-xl uppercase italic">Rodada {currentCardIndex + 1}/{originalDeck?.cards.length}</Text>
                    </View>
                    <View style={{ backgroundColor: currentPlayer.color }} className="px-3 py-1 rounded-full">
                        <Text className="text-black font-black text-[9px] uppercase italic">Sua Vez</Text>
                    </View>
                </View>

                {/* --- CARD DE JOGO (OCUPA O ESPAÇO DISPONÍVEL) --- */}
                <View
                    style={{
                        backgroundColor: '#1c1c1e',
                        borderWidth: 3,
                        borderColor: currentPlayer.color,
                        borderRadius: 32,
                        padding: 10,
                        shadowColor: currentPlayer.color,
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.3,
                        shadowRadius: 20,
                        elevation: 10,
                        flex: 1, // Faz o card crescer
                        marginVertical: 15
                    }}
                >
                    <View
                        style={{ borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1 }}
                        className="flex-1 rounded-[24px] p-6 items-center justify-between border-dashed"
                    >
                        <View className="items-center">
                            <View style={{ backgroundColor: currentPlayer.color }} className="px-3 py-1 rounded-sm mb-2">
                                <Text className="text-black font-black uppercase tracking-[2px] text-[10px]">
                                    {currentCard?.name || 'DESAFIO'}
                                </Text>
                            </View>
                        </View>

                        <View className="w-full">
                            <Text className="text-white text-[20px] font-black text-center leading-[30px] uppercase italic tracking-tight">
                                "{currentCard?.desafio}"
                            </Text>
                        </View>

                        <View className="w-full flex-row justify-between items-center">
                            <View className="items-center justify-center h-12 w-12 rounded-full border-2 border-white/20 bg-[#0a0a0c]">
                                <Text className="text-gray-400 text-[7px] font-black uppercase">PTS</Text>
                                <Text className="text-white font-black text-lg">{currentCard?.points}</Text>
                            </View>

                            {isDrinkMode && (
                                <View className="items-center justify-center px-4 h-10 rounded-xl border-2 border-[#E33379]/30 bg-[#0a0a0c]">
                                    <Text className="text-[#E33379] font-black text-xs italic uppercase">+{currentCard?.dose} Doses</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>

                {/* --- RODAPÉ (SWITCHES E BOTÃO) --- */}
                <View>
                    <View className="flex-row gap-2 mb-4">
                        <TouchableOpacity
                            onPress={() => setChallengeDone(!challengeDone)}
                            style={{ backgroundColor: challengeDone ? '#4ade8020' : '#161618', borderColor: challengeDone ? '#4ade80' : 'transparent' }}
                            className="flex-1 p-3 rounded-2xl border items-center justify-center h-16"
                        >
                            <Text className="text-white text-[10px] font-black uppercase opacity-60">Fez o desafio?</Text>
                            <Text className={`font-black uppercase italic ${challengeDone ? 'text-[#4ade80]' : 'text-white'}`}>
                                {challengeDone ? 'SIM' : 'NÃO'}
                            </Text>
                        </TouchableOpacity>

                        {isDrinkMode && (
                            <TouchableOpacity
                                onPress={() => setDoseDone(!doseDone)}
                                style={{ backgroundColor: doseDone ? '#E3337920' : '#161618', borderColor: doseDone ? '#E33379' : 'transparent' }}
                                className="flex-1 p-3 rounded-2xl border items-center justify-center h-16"
                            >
                                <Text className="text-white text-[10px] font-black uppercase opacity-60">Bebeu?</Text>
                                <Text className={`font-black uppercase italic ${doseDone ? 'text-[#E33379]' : 'text-white'}`}>
                                    {doseDone ? 'SIM' : 'NÃO'}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <TouchableOpacity
                        onPress={handleNextTurn}
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: currentPlayer.color,
                            opacity: !(challengeDone || doseDone) ? 0.4 : 1
                        }}
                        className="h-16 rounded-2xl items-center justify-center"
                        disabled={!(challengeDone || doseDone)}
                    >
                        <Text className="text-black font-black text-lg uppercase italic tracking-[1px]">
                            {currentCardIndex === (originalDeck?.cards.length || 0) - 1 ? 'Finalizar Jogo' : 'Próxima Carta'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.back()} className="py-4 self-center">
                        <Text className="text-gray-700 font-black uppercase text-[9px] tracking-[2px]">Encerrar Sessão</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScreenView>
    );
}