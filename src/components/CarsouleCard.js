import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel,{Pagination} from 'react-native-snap-carousel'
import data, { sliderData } from "../models/data";
import CarouselCardItem from "../components/carsouleCardItem";

export const SLIDER_WIDTH = Dimensions.get("window").width;

const CarsouleCard = () => {
    const isCarousel = React.useRef(null)
    const [index, setIndex] = useState(0);
  return (
    <View>
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
  )
}

export default CarsouleCard