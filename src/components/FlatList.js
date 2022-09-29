import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sliderData } from "../models/data";
import axios from "axios";
import {useNavigation} from '@react-navigation/native';

const { width } = Dimensions.get("screen");

const FlatListData = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  useEffect(() => {
   
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_editor_choice"
      )
      .then((response) => {
        setNews(response.data.items);

        // console.log(".NEWS DATA...", response.data.items);
      });
  }, []);
  

  const Card = (datas) => {

    let data = datas.data.item
    return (
      <View>

          <Pressable
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Details", {
                "image": data.thumbnail,
                "title": data.title,
                "description": data.description,
                "date":data.pubDate,
                "link":data.link
              })
            }
          >
            <View style={style.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={{ uri: data.thumbnail }}
                  style={style.cardImage}
                />
                <View style={{ marginTop: 0 }}>
                  <View
                  // style={{
                  //   flexDirection: "row",
                  //   // justifyContent: "space-between",
                  //   marginTop: 10,
                  // }}
                  >
                    <Text
                      numberOfLines={4}
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        width: "28%",
                        marginLeft: 10,
                      }}
                    >
                      {data.title}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.3,
                  borderStyle: "solid",
                  borderRadius: 5,
                  borderColor: "grey",
                  marginTop: 12,
                  opacity:0.1
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  // numberOfLines={4}
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    // width: "30%",
                    marginTop: 10,
                    marginLeft: 0,
                  }}
                >
                  {data.pubDate}
                </Text>
             
                  <Text style={style.appButtonText}>See More</Text>
               
              </View>
            </View>
          </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      snapToInterval={width - 20}
      // showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
      data={news}
      renderItem={(data) => <Card data={data}/>}
    />
  );
};

export default FlatListData;

const style = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: "white",
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  cardImage: {
    width: width - 300,
    height: 80,
    borderRadius: 15,
  },
  appButtonContainer: {
    marginTop: 5,
    elevation: 8,
    backgroundColor: "tomato",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 10,
    marginTop: 10,
    color: "tomato",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
