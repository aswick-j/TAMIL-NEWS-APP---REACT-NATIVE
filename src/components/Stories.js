import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Puthiya Thalaimurai',
      image: require('../assets/channels4_profile.jpg'),
    },
    {
      id: 0,
      name: 'Sun News',
      image: require('../assets/sun-news-logo-300x300.jpg'),
    },
    {
      id: 0,
      name: 'Polimer News',
      image: require('../assets/c8e15db56ae56c48af60e11f4b196d7a_screen.jpg'),
    },
    {
      id: 0,
      name: 'Thanthi News',
      image: require('../assets/unnamed.png'),
    },
    ,
    {
      id: 0,
      name: 'News 7',
      image: require('../assets/unnamed.jpg'),
    },
    ,
    {
      id: 0,
      name: 'Captain News',
      image: require('../assets/captain.png'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>

                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;