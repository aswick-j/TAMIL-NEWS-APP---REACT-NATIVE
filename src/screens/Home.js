import React,{useRef} from "react";
import { StyleSheet, Text, View, StatusBar,Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionic from "react-native-vector-icons/Ionicons";
import Stories from "../components/Stories";
import Carousel from 'react-native-snap-carousel'
import data, { sliderData } from "../models/data";
import CarouselCardItem from "../components/carsouleCardItem";

export const SLIDER_WIDTH = Dimensions.get("window").width;

const Home = () => {
    const isCarousel = React.useRef(null)
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
         <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color:"tomato",
            paddingBottom:10
          }}>
          Good Evening
        </Text>
      </View>
      <Text style={styles.livetext}>Live</Text>
      <ScrollView>
        <Stories />
      </ScrollView>
      </View>
      <View>
      <Text style={styles.livetext}>Top Headlines</Text>
      <Carousel
         layout="default"
         layoutCardOffset={9}
         ref={isCarousel}
         data={sliderData}
         renderItem={CarouselCardItem}
         sliderWidth={SLIDER_WIDTH}
         itemWidth={300}
         inactiveSlideShift={0}
         useScrollView={true}
         loop={true}
      />
      </View>
      <Text style={styles.Breakn}>Breaking News</Text>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
    livetext:{
        paddingLeft:20,
        color:"black",
        fontWeight:"800"
    },
    Breakn:{
        paddingLeft:20,
        marginTop:10,
        color:"black",
        fontWeight:"800"
    }
})
