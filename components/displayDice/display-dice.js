import React from 'react';
import { Text, View, Image } from "react-native";



export default function DisplayDice(props) {

  const dice = {
    1: require('../../assets/dice-image/dice-01.png'),
    2: require('../../assets/dice-image/dice-02.png'),
    3: require('../../assets/dice-image/dice-03.png'),
    4: require('../../assets/dice-image/dice-04.png'),
    5: require('../../assets/dice-image/dice-05.png'),
    6: require('../../assets/dice-image/dice-06.png'),
  
  }
  return (
    <View>
      <Image
       source={dice[props.results]}
       style={{
         width:120,
         height:120
       }} />

       <image 
      source={dice['1']}
      style={{
        width:120,
        height:120
       }} />

    </View>
  )
}