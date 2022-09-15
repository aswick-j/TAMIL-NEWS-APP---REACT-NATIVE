import React,{useState, useCallback, useRef} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from "react-native-youtube-iframe";

const YoutubeStories = () => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  return (
    <SafeAreaView>
      <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"mLI_QxszYrU"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
    </SafeAreaView>
  )
}

export default YoutubeStories