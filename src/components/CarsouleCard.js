import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel,{Pagination} from 'react-native-snap-carousel'
import data, { sliderData } from "../models/data";
import CarouselCardItem from "../components/carsouleCardItem";
import axios from "axios";
import {useNavigation} from '@react-navigation/native';
export const SLIDER_WIDTH = Dimensions.get("window").width;

const CarsouleCard = () => {
  
    const isCarousel = React.useRef(null)
    const [index, setIndex] = useState(0);
    const navigation = useNavigation();
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FPuthiyathalaimurai_banner_news")
      .then((response) => {
        setNews(response.data.items);
      //  console.log(".NEWS DATA...",response.data.items);
      });
    }, []);

  return (
    <Pressable onPress={""}>
    <View>
    <Carousel
    layout="default"
    autoplay={true}
    layoutCardOffset={9}
    ref={isCarousel}
    data={news}
    renderItem={CarouselCardItem}
    sliderWidth={SLIDER_WIDTH}
    itemWidth={300}
    inactiveSlideShift={0}
    useScrollView={true}
    loop={true}
    onSnapToItem={index => setIndex(index)}
 />
  {/* <Pagination
   dotsLength={sliderData.length}
   activeDotIndex={index}
   carouselRef={isCarousel}
   dotStyle={{
     width: 10,
     height: 10,
     borderRadius: 5,
     marginHorizontal: 1,
     backgroundColor: '#F4BB41',
   }}
   tappableDots={true}
   inactiveDotStyle={{
     backgroundColor: 'black',
     // Define styles for inactive dots here
   }}
   inactiveDotOpacity={0.4}
   inactiveDotScale={0.6}
 /> */}
 </View>
 </Pressable>
  )
}

export default CarsouleCard