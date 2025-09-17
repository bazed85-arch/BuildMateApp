import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏗️ Welcome to BuildMate Frontend</Text>
      <HomeScreen />
    </View>
  );
}
