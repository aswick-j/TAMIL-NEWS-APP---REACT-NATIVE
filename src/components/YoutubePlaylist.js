import React, { useState, useCallback, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";

import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const YoutubePlaylist = ({}) => {
  const [ytplaylist, setYtplaylist] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLZjYaGp8v2I95vxBYNTtS10V4kPlaTZAv&key=AIzaSyCKhpsrokrQFAUNsqN2AZhNUuAqwaXqtv8"
      )
      .then((response) => {
        setYtplaylist(response.data.items);

        // console.log(".NEWS DATA...", response.data.items);
      });
  }, []);
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
    <ScrollView>
    <SafeAreaView>
      <View style={style.header}></View>
      {ytplaylist.map((data) => (
        <>
        <Text style={{marginLeft:20,fontSize:15,marginBottom:20,fontFamily:"sans-serif-medium",color:"tomato"}}>{data.snippet.position} : {data.snippet.title}</Text>
        <View>
          <View style={{ marginLeft: 30, marginRight: 30,marginBottom:10 }}>
            <YoutubePlayer
              height={200}
              videoId={data.snippet.resourceId.videoId}
              play={playing}
              onChangeState={onStateChange}
          
              />
          </View>
        </View></>
      ))}
    </SafeAreaView>
    </ScrollView>
  );
};

export default YoutubePlaylist;

const style = StyleSheet.create({

  
});
