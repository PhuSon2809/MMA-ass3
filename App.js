import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigation from "./src/navigation/DrawerNavigation";

function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default App;
