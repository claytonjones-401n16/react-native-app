import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
// import * as Permissions from 'expo-permissions';
import { Accelerometer } from "expo-sensors";
import DisplayDice from '../displayDice/display-dice';

export default function Dice() {
  const [data, setData] = useState({});

  const [numberOfDice, setNumberOfDice] = useState(1);

  const [rollResults, setRollResults] = useState([]);




  useEffect(() => {
    return () => {
      
    };
  });

  const rollDice = (n) => {
    let results = [];
    for (let i = 0; i < n; i++) {
      results.push(Math.ceil(Math.random() * 6));
    }

    setRollResults(results);
  }

  const subscribe = () => {
    Accelerometer.addListener((accelerometerData) => {
      if (parseInt(accelerometerData.x) > 2) {
        alert('FAST!');
        unsubscribe();
      }

      setData(accelerometerData);

    });

    Accelerometer.setUpdateInterval(30);
  };

  const unsubscribe = () => {
    Accelerometer.removeAllListeners();
  };

  return (
    <View>
      <DisplayDice results={rollResults}/>
      <Button block onPress={subscribe}>
        <Text>Subscribe</Text>
      </Button>
      <Button block onPress={unsubscribe}>
        <Text>Unsubscribe</Text>
      </Button>
      <Text>Mice</Text>
      <Text>{data.x || 0}</Text>
    </View>
  );
}
