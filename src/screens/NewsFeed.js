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

const NewsFeed = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.in/newsapi/news.php?key=3UvFfT48bFHmw5orOYBqYujEd6EHJt&category=tamil_state&content_type=full_content"
      )
      .then((res) => {
        const data = res.data;
        console.log("value=====", data.News);
        setNews(data.News);
      });
  }, []);

  const Card = () => {
    return (
      <>
        {news.map((data) => (
          <Pressable
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Details", {
                "image": data.image,
                "title": data.title,
                "description": data.description,
                "date":data.published_date
     
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
                <View style={{ marginTop: 5 }}>
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
                  borderStyle: "dashed",
                  borderRadius: 5,
                  borderColor: "grey",
                  marginTop: 6,
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
                    marginTop: 5,
                    marginLeft: 0,
                  }}
                >
                  {data.pubDate}
                </Text>
             
                  <Text style={style.appButtonText}>See More</Text>
               
              </View>
            </View>
          </Pressable>
        ))}
      </>
    );
  };

  return (
    <FlatList
      snapToInterval={width - 20}
      // showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
      data={sliderData}
      renderItem={({ item }) => <Card house={item} />}
    />
  );
};

export default NewsFeed;

const style = StyleSheet.create({
  card: {
    height: 130,
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
    marginTop: 5,
    color: "tomato",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
