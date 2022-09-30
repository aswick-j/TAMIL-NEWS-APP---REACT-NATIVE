import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FMlist from "../components/FMlist";
import YoutubePlaylist from "../components/YoutubePlaylist";

const LiveNews = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text1}>FM</Text>
      <FMlist />
      <Text style={styles.text2}>Youtube Videos</Text>
      {/* <YoutubePlaylist/> */}
      {/* <Image     style={{
                    resizeMode: 'center',
                    width: '100%',
                    height: '100%',
                   
                  }} source={require('../assets/NicePng_coming-soon-png_46738.png')}></Image> */}
    </SafeAreaView>
  );
};

export default LiveNews;

const styles = StyleSheet.create({
  text1: {
    paddingLeft: 20,
    color: "black",
    fontWeight: "800",
    marginTop:40
  },
  text2: {
    paddingLeft: 20,
    color: "black",
    fontWeight: "800",
   
  },
});
