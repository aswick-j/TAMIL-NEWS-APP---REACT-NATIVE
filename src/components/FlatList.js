import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sliderData } from "../models/data";
import axios from "axios"

const { width } = Dimensions.get("screen");

const FlatListData = () => {
  const [news, setNews] = useState([]);


  
  useEffect(() => {

    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_banner_news")
    .then((response) => {
      setNews(response.data.items);
    //  console.log(".NEWS DATA...",response.data.items);
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
              <Image source={{ uri: data.thumbnail }} style={style.cardImage} />
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {data.title}
                  </Text>
                  {/* <Text
                    style={{fontWeight: 'bold', color:"blue", fontSize: 16}}>
                    {data.published_date}
                  </Text> */}
                </View>

                {/* Location text */}

                {/* <Text style={{ color: "grey", fontSize: 14, marginTop: 5 }}>
                    {data.published_date}
                  </Text> */}

                {/* Facilities container */}
                {/* <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <View style={style.facility}>
                    <Icon name="hotel" size={18} />
                    <Text style={style.facilityText}>2</Text>
                  </View>
                  <View style={style.facility}>
                    <Icon name="bathtub" size={18} />
                    <Text style={style.facilityText}>2</Text>
                  </View>
                  <View style={style.facility}>
                    <Icon name="aspect-ratio" size={18} />
                    <Text style={style.facilityText}>100m</Text>
                  </View>
                </View> */}
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
    height: 220,
    backgroundColor: "white",
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
});
