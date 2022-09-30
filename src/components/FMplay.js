import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import IoniIcons from "react-native-vector-icons/Ionicons";

export default function FMplay({navigation:{ goBack } ,route}) {
    const id = route.params;
    console.log("id",id);

    let url;

  if(id.id==1){
    url ="https://air.pc.cdn.bitgravity.com/air/live/pbaudio022/playlist.m3u8";
  }else if(id.id==2){
    url = "https://air.pc.cdn.bitgravity.com/air/live/pbaudio126/playlist.m3u8";
  }else if(id.id==3){
    url = "https://air.pc.cdn.bitgravity.com/air/live/pbaudio016/playlist.m3u8";
  }
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({
      uri: url,
    });
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View>
      <IoniIcons
                name="chevron-back"
                size={20}
                onPress={() => goBack()} title="Go back from ProfileScreen" 
              />
    <View style={styles.container}>
      <Button title="Play Sound" color={"tomato"} onPress={playSound} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    margin: 10,
    borderRadius: 10,
    marginLeft: "35%",
  },
 text1: {
    marginLeft: 20,
    color: "black",
    fontWeight: "800",
    marginTop:20
  }
});
