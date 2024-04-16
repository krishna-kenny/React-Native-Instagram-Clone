import { Text, View } from "react-native";
import HomePage from "./components/HomePage";
import { StyleSheet } from "react-native";
import SpeakerProfile from "./components/SpeakerProfile";
import SearchOverlay from "./components/SearchOverlay";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
