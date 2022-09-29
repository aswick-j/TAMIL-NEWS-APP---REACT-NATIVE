import React,{useState, useCallback, useRef} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from "react-native-youtube-iframe";

import {useNavigation} from '@react-navigation/native';


import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniIcons from "react-native-vector-icons/Ionicons";

const YoutubePlaylist = ({}) => {
 
  // console.log("====",id);

  // let utubeId;

  // if(id.id==1){
  //   utubeId = "NX18e_Wh7NA";
  // }else if(id.id==2){
  //   utubeId = "2ywxK3HC4iA";
  // }else if(id.id==3){
  //   utubeId = "pjtqXBTWliE";
  // }else if(id.id==4){
  //   utubeId = "FeweQREkl44";
  // }else if(id.id==5){
  //   utubeId = "NX18e_Wh7NA";
  // }else if(id.id==6){
  //   utubeId = "2sdziNt17qU";
  // }
  
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
           <View style={style.header}>
            {/* <View style={style.headerBtn}>
              <IoniIcons
                name="chevron-back"
                size={20}
                onPress={navigation.goBack}
              />
            </View > */}
            {/* <View style={style.headerBtn}>
              <Icon name="share" size={20} color={"tomato"} />
            </View> */}
          </View>
      <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"pjtqXBTWliE"}
        onChangeState={onStateChange}
      />
      <View style={[{ width: "30%", margin: 10, backgroundColor: "red",borderRadius:10,marginLeft:"35%" }]}>
      <Button color="tomato" title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>
    </View>
    </SafeAreaView>
  )
}

export default YoutubePlaylist

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

});
