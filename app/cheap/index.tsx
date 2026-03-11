import { useRouter } from "expo-router";
import { FlatList, Pressable, StatusBar, Text, View } from "react-native";
import { ScreenView } from "../components/screenView";
import { dacks } from "../db/dakcs";

export default function Index() {
  const navigate = useRouter();

  return (
    <ScreenView style={{ backgroundColor: "#0a0a0c" }}>
      <StatusBar barStyle="light-content" />

      <View className="flex-1 px-6">
        {/* Header Estilizado */}
        <View className="mt-12 mb-8">
          <View className="flex-row items-center">
            <Text className="text-4xl font-black text-white italic">
              JOGOS
            </Text>
            <View className="ml-2 h-2 w-2 rounded-full bg-[#E33379]" />
          </View>
          <Text className="text-gray-500 text-lg font-medium mt-1">
            Selecione o nível da noite.
          </Text>
        </View>

        <FlatList
          data={dacks}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <Pressable
              style={{ 
                backgroundColor: item.color,
                shadowColor: item.color,
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.4,
                shadowRadius: 12,
                elevation: 8
              }}
              className="w-[47%] h-64 rounded-[35px] mb-6 p-5 justify-between overflow-hidden"
              onPress={() => item.launched && navigate.push(`/cheap/${item.id}/players`)}
            >
              {/* Overlay sutil para legibilidade */}
              <View className="absolute inset-0 bg-black/5" />

              <View>
                <View className="bg-black/20 self-start px-2 py-1 rounded-md mb-2">
                    <Text className="text-white text-[10px] font-black uppercase tracking-widest">
                        {item.launched ? `${item.cards.length} CARDS` : "Em breve"}
                    </Text>
                </View>
                <Text className="text-white font-black text-2xl leading-tight">
                  {item.name}
                </Text>
              </View>

              <Text className="text-white/90 text-xs font-bold leading-4">
                {item.description}
              </Text>
              <View className="absolute top-4 right-4 bg-white/30 rounded-full w-6 h-6 items-center justify-center">
                <Text className="text-white text-xs font-black">+</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </ScreenView>
  );
}