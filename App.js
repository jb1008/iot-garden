import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackScreen from "./src/stacks/AppStackScreens";

export default function App() {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
}
