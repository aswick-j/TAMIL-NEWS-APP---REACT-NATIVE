import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/screens/Home";
import NewsFeed from "./src/screens/NewsFeed";
import LiveNews from "./src/screens/LiveNews";
import Weather from "./src/screens/Weather";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "News") {
              iconName = focused ? "newspaper-outline" : "newspaper-outline";
            } else if (route.name === "Live") {
              iconName = focused
                ? "play-circle-outline"
                : "play-circle-outline";
            } else if (route.name === "Weather") {
              iconName = focused
                ? "thunderstorm-outline"
                : "thunderstorm-outline";
            }
            return <Ionicons name={iconName} size={18} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="News"
          component={NewsFeed}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Live"
          component={LiveNews}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Weather"
          component={Weather}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
