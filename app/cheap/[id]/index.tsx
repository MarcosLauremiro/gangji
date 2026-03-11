import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Switch, Text, TouchableOpacity, View } from "react-native";
import { ScreenView } from "../../components/screenView";
import { dacks } from '../../db/dakcs';

export default function CheapDeck() {
    const { id, players } = useLocalSearchParams<{ id: string, players: string }>();
    const router = useRouter();
    
    const [withDrinks, setWithDrinks] = useState(true);

    const dack = dacks.find(d => d.id === id);
    const playerList = players ? JSON.parse(players) : [];

    const handleStartGame = () => {
        router.push({
            pathname: `/cheap/[id]/game`,
            params: { 
                id, 
                players, 
                withDrinks: String(withDrinks) 
            }
        });
    };

    if (!dack) return <ScreenView><Text className="text-white">Deck não encontrado</Text></ScreenView>;

    return (
        <ScreenView style={{ backgroundColor: "#0a0a0c" }}>
            <StatusBar barStyle="light-content" />
            
            <ScrollView contentContainerStyle={{ padding: 24, flexGrow: 1 }}>
                
                {/* Header do  Estilizado */}
                <View className="items-center mb-10 mt-6">
                    <View 
                        style={{ 
                            backgroundColor: dack.color,
                            shadowColor: dack.color,
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 20,
                            elevation: 15
                        }} 
                        className="w-24 h-24 rounded-[30px] items-center justify-center mb-6"
                    >
                        <Text style={{ fontSize: 45 }}>🃏</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-white text-4xl font-black italic uppercase tracking-tighter">
                            {dack.name}
                        </Text>
                        <View className="ml-2 h-2 w-2 rounded-full bg-[#E33379]" />
                    </View>
                    <Text className="text-gray-500 text-center mt-3 text-base font-medium leading-5 px-4">
                        {dack.description}
                    </Text>
                </View>

                {/* Card de Configuração */}
                <View className="bg-[#161618] rounded-[35px] p-6 border border-white/5 mb-6 shadow-2xl">
                    <Text className="text-gray-600 font-black uppercase tracking-[2px] text-[10px] mb-6">
                        Regras da Partida
                    </Text>
                    
                    <View className="flex-row justify-between items-center">
                        <View className="flex-1 pr-6">
                            <View className="flex-row items-center mb-1">
                                <Text className="text-white text-lg font-black uppercase italic">Modo Bebida</Text>
                                {withDrinks && <Text className="ml-2 text-xs">🥃</Text>}
                            </View>
                            <Text className="text-gray-500 text-xs font-bold leading-4">
                                Ativa o modo com doses, juntos ao desafio
                            </Text>
                        </View>
                        <Switch 
                            value={withDrinks}
                            onValueChange={setWithDrinks}
                            trackColor={{ false: "#334155", true: dack.color }}
                            thumbColor={withDrinks ? "#fff" : "#94a3b8"}
                        />
                    </View>
                </View>

                {/* Lista de Jogadores (Preview) */}
                <View className="bg-[#161618] rounded-[35px] p-6 border border-white/5 mb-8">
                    <View className="flex-row justify-between items-center mb-6">
                        <Text className="text-gray-600 font-black uppercase tracking-[2px] text-[10px]">
                            Todos os jogadores  ({playerList.length})
                        </Text>
                    </View>
                    
                    <View className="flex-row flex-wrap gap-3">
                        {playerList.map((p: any) => (
                            <View 
                                key={p.id} 
                                style={{ 
                                    borderColor: p.color + '40', // Cor com 40% de opacidade
                                    backgroundColor: p.color + '10' // Fundo bem sutil
                                }} 
                                className="border px-4 py-2 rounded-2xl flex-row items-center"
                            >
                                <View style={{ backgroundColor: p.color }} className="w-2 h-2 rounded-full mr-2" />
                                <Text style={{ color: 'white' }} className="font-bold uppercase text-[10px]">
                                    {p.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View className="flex-1" />

                {/* Botão Start Gigante */}
                <TouchableOpacity 
                    onPress={handleStartGame}
                    activeOpacity={0.9}
                    style={{ 
                        backgroundColor: dack.color,
                        shadowColor: dack.color,
                        shadowOffset: { width: 0, height: 15 },
                        shadowOpacity: 0.4,
                        shadowRadius: 25,
                        elevation: 10
                    }}
                    className="h-20 rounded-[30px] items-center justify-center mb-2"
                >
                    <View className="flex-row items-center">
                        <Text className="text-white font-black text-xl uppercase italic tracking-[4px] mr-3">
                            Lançar o Caos
                        </Text>
                        <Text className="text-2xl">🔥</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => router.back()}
                    className="py-4 items-center"
                >
                    <Text className="text-gray-600 font-bold uppercase tracking-widest text-[10px]">
                        Ajustar jogo
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </ScreenView>
    );
}