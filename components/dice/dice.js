import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
// import * as Permissions from 'expo-permissions';
import { Accelerometer } from "expo-sensors";

export default function Dice() {
  const [data, setData] = useState({});


  useEffect(() => {
    return () => {
      
    };
  });

  const subscribe = () => {
    Accelerometer.addListener((accelerometerData) => {
      if (parseInt(accelerometerData.x) > 0.2) {
        alert('FAST!');
        unsubscribe();
      }
      setData(accelerometerData);
    });

    Accelerometer.setUpdateInterval(200);
  };

  const unsubscribe = () => {
    Accelerometer.removeAllListeners();
  };

  return (
    <View>
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
