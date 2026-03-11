import { Redirect, useRouter } from "expo-router";
import { Text, View, Image, StatusBar, Platform, TouchableOpacity, Dimensions } from "react-native";
import Login from "./components/Login";
import { useAuth } from "./context/AuthContext";

export default function Index() {
  const androidGap = Platform.OS === "android" ? StatusBar.currentHeight : 0;
  const navigate = useRouter();
  // const { user, loading } = useAuth()

  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Carregando...</Text>
  //     </View>
  //   )
  // }

  // if (!user) {
  //   return <Redirect href="/login" />
  // }

  return (
    <View className="flex-1 bg-[#0a0a0c]">
      <StatusBar barStyle="light-content" />
      
      {/* Background Decorativo (Círculos de luz) */}
      <View 
        className="absolute top-[-50] right-[-50] w-64 h-64 rounded-full bg-[#E33379] opacity-20" 
      />

      <View className="flex-1 px-8 justify-center items-center">
        
        {/* Container da Imagem com Brilho */}
        <View 
          className="items-center justify-center mb-10"
          style={{ paddingTop: androidGap }}
        >
            <View className="absolute w-40 h-40 bg-[#E33379] opacity-10 rounded-full blur-3xl" />
            <Image
                source={require("./assets/images/gangji.png")}
                className="w-80 h-48"
                resizeMode="contain"
            />
        </View>
      </View>
      {/* Footer / Botão */}
      <View className="px-8 pb-12">
        <TouchableOpacity
          className="bg-[#E33379] w-full py-5 rounded-[25px] items-center justify-center shadow-2xl shadow-[#E33379]/40"
          style={{ elevation: 10 }}
          onPress={() => navigate.push("/cheap")}
          activeOpacity={0.9}
        >
          <View className="flex-row items-center">
            <Text className="text-white text-xl font-black tracking-widest italic mr-2">
                BORA JOGAR
            </Text>
            <Text className="text-2xl">🔥</Text>
          </View>
        </TouchableOpacity>
        
        <Text className="text-gray-600 text-center mt-4 text-xs font-bold uppercase tracking-widest">
            Beba com moderação • +18
        </Text>
      </View>

    </View>
  );
}