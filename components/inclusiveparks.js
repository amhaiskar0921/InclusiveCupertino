// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveParks extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>San Jose Rotary Play Garden</Text>{"\n"}offers programs for children with special needs{"\n"}https://grpg.org/education/special-needs/{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 10}}><Text style= {{fontWeight: 'bold'}}>The Magical Bridge Foundation</Text> {"\n"}is building inclusive spaces at various public parks{"\n"}https://magicalbridge.org/kindness-ambassador-program/</Text>
      </View>
    );
  }
}  