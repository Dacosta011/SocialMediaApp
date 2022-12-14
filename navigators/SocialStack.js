import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { LogInContext } from "../store/context/LogInContext";
import Feed from "../screens/SocialMedia/Feed";
import Profile from "../screens/SocialMedia/Profile";
import Message from "../screens/SocialMedia/Message";
import color from "../constants/colors";
import Notification from "../screens/SocialMedia/Notification";
import Chat from "../screens/SocialMedia/Chat";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function SocialStack({ navigation }) {
  const logInCtx = useContext(LogInContext);

  async function handleLogOut() {
    logInCtx.logout();
  }

  function ChatStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: color.secondary },
          headerTitleStyle: { color: color.white, fontSize: 30 },
        }}
      >
        <Stack.Screen
          name="mesagges"
          component={Message}
          options={{ headerTitle: "Chats" }}
        />
        <Stack.Screen name="chat" component={Chat} options={{}} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: color.secondary },
        headerRight: () => (
          <Ionicons
            name="log-out"
            size={30}
            color="white"
            onPress={handleLogOut}
          />
        ),
        tabBarActiveTintColor: color.primary,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: color.secondary },
        tabBarInactiveTintColor: color.HardGrey,
        headerTitleStyle: { color: color.white, fontSize: 30 },
        headerRightContainerStyle: { left: -20 },
      }}
    >
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="message"
        component={ChatStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
