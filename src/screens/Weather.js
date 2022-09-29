import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherCard from '../components/WeatherCard';
import {WebView} from 'react-native-webview';

const Weather = () => {
  return (
    <>
  
<WeatherCard/>
    </>
  )
}

export default Weather