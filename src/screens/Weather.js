import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherCard from '../components/WeatherCard';

const Weather = () => {
  return (
    <SafeAreaView>
<WeatherCard/>
    </SafeAreaView>
  )
}

export default Weather