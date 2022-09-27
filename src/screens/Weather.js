import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherCard from '../components/WeatherCard';
import {WebView} from 'react-native-webview';

const Weather = () => {
  return (
    <SafeAreaView>
       <WebView source={{ uri: 'https://www.freecodecamp.org/news/how-to-add-a-youtube-playlist-to-a-nextjs-react-app-with-the-youtube-api/' }} />
{/* <WeatherCard/> */}
    </SafeAreaView>
  )
}

export default Weather