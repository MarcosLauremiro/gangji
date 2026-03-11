import { Text, Pressable, StyleSheet } from "react-native"
import * as WebBrowser from "expo-web-browser"
import * as Linking from "expo-linking"
import { supabase } from "../../lib/supabase"

WebBrowser.maybeCompleteAuthSession()

export default function Login() {

  const signInWithGoogle = async () => {

    const redirectUrl = Linking.createURL("/")

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl
      }
    })

    if (error) {
      console.log(error)
      return
    }

    if (data?.url) {
      await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl
      )
    }

  }

  return (
    <Pressable style={styles.button} onPress={signInWithGoogle}>
      <Text style={styles.text}>Entrar com Google</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4285F4",
    padding: 16,
    borderRadius: 8,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16
  }
})