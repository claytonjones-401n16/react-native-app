import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import Dice from './components/dice';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Dice />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
