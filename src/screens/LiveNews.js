import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlaylist from '../components/YoutubePlaylist';

const LiveNews = () => {
  return (
    <SafeAreaView>
      {/* <YoutubePlaylist/> */}
    <Image     style={{
                    resizeMode: 'center',
                    width: '100%',
                    height: '100%',
                   
                  }} source={require('../assets/NicePng_coming-soon-png_46738.png')}></Image>
    </SafeAreaView>
  )
}

export default LiveNews