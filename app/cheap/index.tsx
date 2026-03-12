import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StatusBar, Text, View } from "react-native";
import { ScreenView } from "../components/screenView";
import { dacks } from "../db/dakcs";

export default function Index() {
  const navigate = useRouter();

  return (
    <ScreenView style={{ backgroundColor: "#0a0a0c" }}>
      <StatusBar barStyle="light-content" />

      <View className="flex-1">

        {/* Header fixo */}
        <BlurView
          intensity={90}
          tint="dark"
          className="absolute top-0 left-0 right-0 px-6 pt-12 pb-4 z-10"
        >
          <View className="items-center">
            <View className="flex-row items-center">
              <Text className="text-4xl font-black text-white italic">
                JOGOS
              </Text>
              <View className="ml-2 h-2 w-2 rounded-full bg-[#E33379]" />
            </View>

            <Text className="text-gray-400 text-lg font-medium mt-1">
              Selecione o nível da noite.
            </Text>
          </View>
        </BlurView>

        <FlatList
          data={dacks}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 120, // espaço do header
            paddingHorizontal: 24,
            paddingBottom: 40
          }}
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
              className="w-full h-32 rounded-[28px] mb-5 p-5 justify-between overflow-hidden"
              onPress={() => item.launched && navigate.push(`/cheap/${item.id}/players`)}
            >
              <View className="absolute inset-0 bg-black/5" />

              <View>
                <View className="bg-black/20 self-start px-2 py-1 rounded-md mb-2">
                  <Text className="text-white text-[10px] font-black uppercase tracking-widest">
                    {item.launched ? `${item.cards.length} JOGOS` : "Em breve"}
                  </Text>
                </View>

                <Text className="text-white font-black text-2xl leading-tight">
                  {item.name}
                </Text>
              </View>

              <Text className="text-white/90 text-[12px] font-bold leading-4">
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