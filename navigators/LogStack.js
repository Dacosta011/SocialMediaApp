import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "../screens/Log/LogIn";
import SignIn from "../screens/Log/SignIn";
import color from "../constants/colors";

const Stack = createStackNavigator();

export default function LogStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: color.secondary },
        headerTitleStyle: { color: color.white },
        presentation: "modal",
      }}
    >
      <Stack.Screen name="LoginScreen" component={LogIn} />
      <Stack.Screen name="SignInScreen" component={SignIn} />
    </Stack.Navigator>
  );
}
