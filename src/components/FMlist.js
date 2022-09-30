import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FMlist = () => {
 
  const navigation = useNavigation(); 
  const storyInfo = [
    {
      id: 1,
      name: 'FM Rainbow',
      image: require('../assets/20666862f7bc84bb0c498c6029ea61f7_165x165.webp'),
    },
    {
        id: 2,
        name: 'ALL INDIA RADIO',
        image: require('../assets/1200x600wp.png'),
      },
      {
        id: 3,
        name: 'ALL INDIA RADIO CBE',
        image: require('../assets/1200x600wp.png'),
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
            onPress={() => navigation.navigate("FMplay",{
              "id":data.id
            })} >
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 30,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                
                  }}>

                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 10,
                  borderColor: 'green',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 10,
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

export default FMlist;