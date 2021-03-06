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

  const [readyButtonDisabled, setReadyButtonDisabled] = useState(false);

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
    let results = [];
    // [5, 5, 4, 3, 2]
    for (let i = 0; i < n; i++) {
      results.push(Math.ceil(Math.random() * 6));
    }

    setRollResults(results);
  }

  const subscribe = () => {
    setRollResults([]);
    setReadyButtonDisabled(true);
    Accelerometer.addListener((accelerometerData) => {
      if (parseInt(accelerometerData.x) > 2) {
        unsubscribe();
        rollDice(numberOfDice);
      }

      setData(accelerometerData);

    });

    Accelerometer.setUpdateInterval(30);
  };

  const unsubscribe = () => {
    setReadyButtonDisabled(false);
    Accelerometer.removeAllListeners();
  };

  return (
    <>
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
      <View style={{flex: 1, height: 400}}>
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
      </View>
      <View style={{flex: 2}}>
        <DiceForm diceData={{numberOfDice, setNumberOfDice}}/>
        <Button block onPress={subscribe} disabled={readyButtonDisabled}>
          <Text>Ready</Text>
        </Button>
      </View>
    </View>
    </>
  );
}
