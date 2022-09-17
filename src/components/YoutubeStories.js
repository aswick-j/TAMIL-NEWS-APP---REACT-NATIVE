import React,{useState, useCallback, useRef} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from "react-native-youtube-iframe";


const YoutubeStories = ({route}) => {
  const id = route.params;
  // console.log("====",id);

  let utubeId;

  if(id.id==1){
    utubeId = "NX18e_Wh7NA";
  }else if(id.id==2){
    utubeId = "2ywxK3HC4iA";
  }else if(id.id==3){
    utubeId = "pjtqXBTWliE";
  }else if(id.id==4){
    utubeId = "FeweQREkl44";
  }else if(id.id==5){
    utubeId = "NX18e_Wh7NA";
  }else if(id.id==6){
    utubeId = "2sdziNt17qU";
  }
  
// console.log('====================================');
// console.log(utubeId);
// console.log('====================================');
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
        videoId={utubeId}
        onChangeState={onStateChange}
      />
      <Button color="tomato" title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
    </SafeAreaView>
  )
}

export default YoutubeStories