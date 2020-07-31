import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View} from "react-native";
import {Container, Content} from 'native-base';
import Header from "./components/header";
// import { Header } from "native-base";
import Footer from "./components/footer";
import Dice from "./components/dice";
export default function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Dice />
      </Content>
      <Footer />
    </Container>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};
