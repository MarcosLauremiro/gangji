import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from "react";
import {
    Alert,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { ScreenView } from "../../components/screenView";
import { dacks } from "../../db/dakcs";

interface Player {
    id: string;
    name: string;
    color: string;
}

const COLOR_POOL: string[] = [
    "#E33379", "#4ade80", "#60a5fa", "#fbbf24",
    "#a78bfa", "#f472b6", "#2dd4bf", "#fb7185",
    "#818cf8", "#c084fc", "#facc15", "#4ade80"
];

export default function Players() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const dack = dacks.find(d => d.id === id);

    const [players, setPlayers] = useState<Player[]>([]);
    const [playerName, setPlayerName] = useState<string>("");

    const getRandomColor = (): string => {
        const usedColors = players.map(p => p.color);
        const availableColors = COLOR_POOL.filter(color => !usedColors.includes(color));
        const targetPool = availableColors.length > 0 ? availableColors : COLOR_POOL;
        return targetPool[Math.floor(Math.random() * targetPool.length)];
    };

    const addPlayer = (): void => {
        if (playerName.trim() === "") return;
        if (players.length >= 10) {
            Alert.alert("Limite atingido", "O máximo é de 10 jogadores.");
            return;
        }

        const newPlayer: Player = {
            id: Date.now().toString(),
            name: playerName.trim(),
            color: getRandomColor(),
        };

        setPlayers((prev) => [...prev, newPlayer]);
        setPlayerName("");
    };

    const removePlayer = (playerId: string): void => {
        setPlayers((prev) => prev.filter(p => p.id !== playerId));
    };

    const handleStartGame = () => {
        if (players.length < 2) {
            Alert.alert("Epa!", "Adicione pelo menos 2 jogadores para o caos começar.");
            return;
        }
        router.push({
            pathname: "/cheap/[id]",
            params: { id, players: JSON.stringify(players) }
        });
    };

    return (
        <ScreenView style={{ backgroundColor: "#0a0a0c" }}>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View className="flex-1 px-6 pt-12">
                    
                    {/* Header */}
                    <View className="mb-8">
                        <View className="flex-row items-centerv justify-center">
                            <Text className="text-4xl font-black text-white italic">JOGADORES</Text>
                            <View className="ml-2 h-2 w-2 rounded-full bg-[#E33379]" />
                        </View>
                        <Text className="text-gray-500 font-medium mt-1 text-center">
                            Jogo selecionado: <Text style={{ color: dack?.color }}>{dack?.name}</Text>
                        </Text>
                    </View>
                    {/* Input Area Estilizada */}
                    <View className="flex-row mb-8 items-center bg-[#1c1c1e] rounded-[20px] p-2 border border-white/5">
                        <TextInput
                            className="flex-1 h-14 px-4 text-white text-lg font-bold"
                            placeholder="Nome do parceiro..."
                            placeholderTextColor="#555"
                            value={playerName}
                            onChangeText={setPlayerName}
                            onSubmitEditing={addPlayer}
                        />
                        <TouchableOpacity
                            style={{ backgroundColor: dack?.color || "#E33379" }}
                            className="w-12 h-12 rounded-[15px] justify-center items-center shadow-lg"
                            onPress={addPlayer}
                        >
                            <Text className="text-white text-2xl font-black">+</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Lista de Jogadores */}
                    <FlatList
                        data={players}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View
                                style={{ 
                                    backgroundColor: '#161618',
                                    borderLeftWidth: 6,
                                    borderLeftColor: item.color,
                                    shadowColor: item.color,
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 8
                                }}
                                className="flex-row justify-between items-center p-5 rounded-2xl mb-4 border border-white/5"
                            >
                                <View className="flex-row items-center">
                                    <View style={{ backgroundColor: item.color }} className="w-3 h-3 rounded-full mr-4" />
                                    <Text className="text-white text-xl font-black italic uppercase tracking-tighter">
                                        {item.name}
                                    </Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={() => removePlayer(item.id)}
                                    className="bg-red-500/10 p-2 rounded-lg"
                                >
                                    <Text className="text-red-500 font-bold text-xs uppercase tracking-widest">Sair</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        contentContainerStyle={{ paddingBottom: 150 }}
                        ListEmptyComponent={
                            <View className="mt-20 items-center opacity-30">
                                <Text className="text-white text-center font-bold text-lg italic">
                                    Aguardando os jogadores...
                                </Text>
                            </View>
                        }
                    />

                    {/* Botão Fixo Footer */}
                    <View className="absolute bottom-10 left-6 right-6">
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={{ 
                                backgroundColor: players.length < 2 ? '#1c1c1e' : '#E33379',
                                shadowColor: '#E33379',
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: players.length < 2 ? 0 : 0.4,
                                shadowRadius: 20,
                                elevation: 10
                            }}
                            className="w-full h-20 rounded-[30px] items-center justify-center"
                            onPress={handleStartGame}
                            disabled={players.length < 2}
                        >
                            <View className="flex-row items-center">
                                <Text className={`text-xl font-black tracking-[4px] italic mr-2 
                                    ${players.length < 2 ? 'text-gray-600' : 'text-white'}`}>
                                    PRONTO
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {players.length < 2 && (
                            <Text className="text-gray-600 text-center mt-3 font-bold text-[10px] uppercase tracking-widest">
                                Adicione mais {2 - players.length} para liberar
                            </Text>
                        )}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScreenView>
    );
}