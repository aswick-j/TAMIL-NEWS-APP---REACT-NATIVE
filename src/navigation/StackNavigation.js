import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import YoutubeStories from "../components/YoutubeStories";
import Home from "../screens/Home";
import NewsFeed from "../screens/NewsFeed";
import LiveNews from "../screens/LiveNews";
import Weather from "../screens/Weather";
import Stories from "../components/Stories";
import DetailsScreen from "../nestedScreen/DetailsScreen";

const Stack = createNativeStackNavigator();



const MainStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home1" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Stories" component={Stories} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
         <Stack.Screen name="YoutubeStories" component={YoutubeStories} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator >
         <Stack.Screen name="NewsFeed" component={NewsFeed} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
const LiveStackNavigator = () => {
    return (
      <Stack.Navigator >
         <Stack.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }
  const WeatherStackNavigator = () => {
    return (
      <Stack.Navigator >
         <Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

export { MainStackNavigator,NewsStackNavigator,LiveStackNavigator, WeatherStackNavigator };