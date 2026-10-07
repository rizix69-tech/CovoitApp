import { View, Text, StyleSheet } from "react-native";
import TripListScreen from "./screens/TripListScreen.js";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        RiyadeApp
      </Text>

      <Text style={styles.subtitle}>
        Bienvenue dans mon Application by Riyade 
      </Text> 
      <TripListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1c1c",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 16,
    color: "#AEB4D6",
    marginTop: 8,
  },
});
