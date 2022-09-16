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
import * as rssParser from 'react-native-rss-parser';
import { SafeAreaView } from "react-native-safe-area-context";
import { sliderData } from "../models/data";
import axios from "axios";

const { width } = Dimensions.get("screen");

const FlatListData = () => {
  const [news, setNews] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_banner_news"
  //     )
  //     .then((response) => {
  //       setNews(response.data.items);
  //       //  console.log(".NEWS DATA...",response.data.items);
  //     });
  // }, []);


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
            // onPress={() =>
            //   navigation.navigate("DetailsScreen", {
            //     // image: data.image,
            //     title: data.title,
            //     //    "description": data.description,
            //     //    "date":data.published_date
            //   }
            //   )
            // }
          >
            <View style={style.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={{ uri:"https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg" }}
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
                        width: "30%",
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
                    marginTop: 15,
                    marginLeft: 0,
                  }}
                >
                  {data.published_date}
                </Text>
                <TouchableOpacity onPress={"onPress"} style={style.appButtonContainer}>
    <Text style={style.appButtonText}>See More</Text>
  </TouchableOpacity>
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
    marginTop:5,
    elevation: 8,
    backgroundColor: "tomato",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
