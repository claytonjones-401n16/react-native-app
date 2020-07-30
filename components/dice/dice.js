import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import * as Permissions from 'expo-permissions';
import { DeviceMotion } from 'expo-sensors';

export default function Dice() {

  async function getPermissions() {
    await Permissions.askAsync(Permissions.MOTION);
  }

  async function motion() {
    let motionEnabled = await DeviceMotion.isAvailableAsync();

  }

  useEffect(() => {
    getPermissions();
    motion();
  }); 

  return (
    <View>
      <Text>Dice</Text>
    </View>
  )
}