import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState([]);
  const [celcius, setCelcius] = useState("");
  const [weatherv2Data, setWeatherv2Data] = useState([]);
  const [sunrise,setSunrise] = useState("")
  const [sunset,setSunset] = useState("")
  const [wind,setWind] = useState("")
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log("==========ddd",location);
      const longitude = location.coords.longitude;
      const latitude = location.coords.latitude;

      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=73c15d30653293d61c4b7b2be135b6d6&units=imperial`
        )
        .then((response) => {
          setWeatherData(response.data);
          // console.log("...", response.data);
          const fahrenheit = response.data.main.temp;
          // convert fahrenheit to celsius
          const celsius = ((fahrenheit - 32) * 5) / 9;
          const last4Str = String(celsius).slice(0, 4);
          const last4Num = Number(last4Str);
          setCelcius(last4Num);
          setWeatherv2Data(response.data.weather);

          setWind(response.data.wind.speed)
          // console.log("====",response.data.wind.speed);
          const unixTimestamp = response.data.sys.sunrise;

          const date = new Date(unixTimestamp * 1000);

          const hours = date.getHours();
          const minutes = date.getMinutes();
          const seconds = date.getSeconds();

          // 👇️ Format as hh:mm:ss
          const time = `${padTo2Digits(hours)}:${padTo2Digits(
            minutes
          )}:${padTo2Digits(seconds)}`;

         setSunrise(time); // 👉️ 09:25:32

          function padTo2Digits(num) {
            return num.toString().padStart(2, "0");
          }

          //-------

          const unixTimestamp2 = response.data.sys.sunset;

          const date2 = new Date(unixTimestamp2 * 1000);

          const hours2 = date2.getHours();
          const minutes2 = date2.getMinutes();
          const seconds2 = date2.getSeconds();

          // 👇️ Format as hh:mm:ss
          const time2 = `${padTo2Digits(hours2)}:${padTo2Digits(
            minutes2
          )}:${padTo2Digits(seconds2)}`;

          setSunset(time2); // 👉️ 09:25:32

          function padTo2Digits(num) {
            return num.toString().padStart(2, "0");
          }
        });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/chennai.jpg")}
        style={{ height: 200, marginTop: 30 }}
        imageStyle={{ borderRadius: 10 }}
      ></ImageBackground>
      <Text
        style={{
          fontSize: 50,
          fontFamily: "sans-serif-thin",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        {celcius} ℃
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "sans-serif-medium",
          marginTop: 0,
          marginLeft: 10,
          color: "tomato",
        }}
      >
        {weatherData.name}
      </Text>
      <View style={{ flexDirection: "row" ,justifyContent:"space-around"}}>
        <View style={styles.wcontainer}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "sans-serif",
              marginTop: 0,
              textAlign: "center",
            }}
          >
            Wind
          </Text>
          <Image
            source={require("../assets/toppng.com-computer-icons-weather-wind-rain-windy-weather-icon-1335x1135.png")}
            style={{
              height: 30,
              resizeMode: "contain",
              alignSelf: "center",
              width: 30,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: "sans-serif",
              marginTop: 10,
              marginLeft: 0,
              textAlign: "center",
              textTransform: "capitalize",
              color: "tomato",
            }}
          >
            {wind} miles/hour
          </Text>
        </View>
        <View style={styles.wcontainer}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "sans-serif",
              marginTop: 0,
              textAlign: "center",
            }}
          >
            Sunrise
          </Text>
          <Image
            source={require("../assets/sunrise.png")}
            style={{
              height: 40,
              resizeMode: "contain",
              alignSelf: "center",
              width: 40,
              marginTop: 4,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: "sans-serif",
              marginTop: 6,
              marginLeft: 0,
              textAlign: "center",
              textTransform: "capitalize",
              color: "tomato",
            }}
          >
            {sunrise} AM 
          </Text>
        </View>
        <View style={styles.wcontainer}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "sans-serif",
              marginTop: 0,
              textAlign: "center",
            }}
          >
            Sunset
          </Text>
          <Image
            source={require("../assets/sunset.png")}
            style={{
              height: 40,
              resizeMode: "contain",
              alignSelf: "center",
              width: 40,
              marginTop: 4,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: "sans-serif",
              marginTop: 6,
              marginLeft: 0,
              textAlign: "center",
              textTransform: "capitalize",
              color: "tomato",
            }}
          >
            {sunset} PM 
          </Text>
        </View>
      </View>
      {/* <View style={styles.container3}> */}
      {/* <Text>{weatherData.main.humidity}</Text>
        <Text>{weatherData.wind.speed}</Text>
        <Text>{weatherData.clouds.all}</Text>
        <Text>{weatherData.sys.sunrise}</Text>
        <Text>{weatherData.sys.sunset}</Text> */}
      {/* </View> */}
      <View style={{ flexDirection: "row",justifyContent:"space-around" }}>
        {weatherv2Data.map((data) => (
          <View style={styles.wcontainer}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "sans-serif",
                marginTop: 0,
                textAlign: "center",
              }}
            >
              {data.main}
            </Text>
            <Image
              source={{
                uri: `http://openweathermap.org/img/w/${data.icon}.png`,
              }}
              style={{
                height: 40,
                resizeMode: "contain",
                alignSelf: "center",
                width: 40,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: "sans-serif",
                marginTop: 0,
                marginLeft: 0,
                textAlign: "center",
                textTransform: "capitalize",
                color: "tomato",
              }}
            >
              {data.description}
            </Text>
          </View>
        ))}
      </View>
      {/* <View style={styles.container2}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:43}}>
          <Text style={{fontSize:20}}>{weatherData.name}</Text>
          <Text style={{fontSize:20}}>{celcius} ℃</Text> */}
      {/* <Text style={{fontSize:20}}>{weatherData.weather[0].main}</Text> */}
      {/* </View> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  loaction: {
    paddingLeft: 30,
    marginTop: 40,
    color: "white",
    // fontWeight: "800",
    fontFamily: "sans",
    // fontStyle:"italic",
    fontSize: 40,
  },
  container: {
    height: "100%",
    backgroundColor: "white",
    elevation: 10,
    // marginRight: 20,
    padding: 15,
    // marginLeft:20,
    // borderRadius: 20,
    // marginTop: 10,
  },
  container2: {
    height: 150,
    backgroundColor: "white",
    elevation: 10,
    // marginRight: 20,
    padding: 15,
    // marginLeft:20,
    borderRadius: 20,
    marginTop: 100,
  },
  wcontainer: {
    height: 140,
    backgroundColor: "white",
    elevation: 10,
    // marginRight: 20,
    padding: 15,
    // marginLeft: 10,
    borderRadius: 20,
    marginTop: 30,
    width: 100,
  },
  container3: {
    height: 140,
    backgroundColor: "white",
    elevation: 10,
    marginRight: 20,
    padding: 15,
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 40,
  },
});
