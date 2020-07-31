import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button, Content, Container } from "native-base";
// import * as Permissions from 'expo-permissions';
import { Accelerometer } from "expo-sensors";
import DisplayDice from '../displayDice/display-dice';
import DiceForm from '../diceForm';
import * as Font from 'expo-font';

export default function Dice() {
  const [data, setData] = useState({});

  const [numberOfDice, setNumberOfDice] = useState(1);

  const [rollResults, setRollResults] = useState([]);

  async function getFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  useEffect(() => {
    getFonts();
  }, []);

  const rollDice = (n) => {
    alert(n);
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
        rollDice(numberOfDice);
      }

      setData(accelerometerData);

    });

    Accelerometer.setUpdateInterval(30);
  };

  const unsubscribe = () => {
    Accelerometer.removeAllListeners();
  };

  const styles = {
    wrapper: {
      flex: 1
    },

    menu: {
      flexDirection: 'row',
    }
  }


  return (
    <>
      <View>
        <Text>
          Select number of dice to roll then hit Ready
        </Text>
      </View>
      <View>
        <Text>
          Then flick your phone to roll!
        </Text>
      </View>
      <DisplayDice results={rollResults}/>
      <DiceForm diceData={{numberOfDice, setNumberOfDice}}/>
      <Button block onPress={subscribe}>
        <Text>Ready</Text>
      </Button>
      
      <Text>{data.x || 0}</Text>
    </>
  );
}
