import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

export default function AppHeader(props) {

  const styles = {
    // container: {
    //   paddingTop: 30
    // },
    title: {
      textAlign: 'center'
    },
    header: {
      fontFamily: 'serif'
    }
  }

  return (
    <Container style={styles.container}>
      <Header >
        <Left />
        <Body style={styles.header}>
          <Title style={styles.header}>Roll the Dice!</Title>
        </Body>
        {/* <Right /> */}
      </Header>
    </Container>
  )
}