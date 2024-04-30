import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import UserStories from "./stories";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: UserStories[0].stories[0].uri }}
        style={styles.image}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
