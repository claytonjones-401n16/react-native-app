import React from 'react';

import {Container, Content, Form, Item, Picker, Icon} from 'native-base';

export default function DiceForm(props) {

  const {numberOfDice, setNumberOfDice} = props.diceData;

  const handleChange = (value) => {
    setNumberOfDice(value);
  }
  
  return (
    <Form>
      <Item picker>
        <Picker 
          mode='dropdown'
          iosIcon={<Icon name='arrow-down'/>}
          style={{ width: undefined }}
          placeholder='1'
          selectedValue={numberOfDice}
          onValueChange={handleChange}
        >
          <Picker.Item label='1' value='1' />
          <Picker.Item label='2' value='2' />
          <Picker.Item label='3' value='3' />
          <Picker.Item label='4' value='4' />
          <Picker.Item label='5' value='5' />
          <Picker.Item label='6' value='6' />

        </Picker>
      </Item>
    </Form>
  )
}