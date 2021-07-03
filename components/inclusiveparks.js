// components/inclusiveparks.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveParks extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 6}}><Text style= {{fontWeight: 'bold'}}>San Jose Rotary Play Garden</Text>{"\n"}offers programs for children with special needs</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://grpg.org/education/special-needs/')}>San Jose Rotary Play Garden                               </Text>
        <Text style={{fontSize: 18, margin: 6}}><Text style= {{fontWeight: 'bold'}}>{"\n"}{"\n"}The Magical Bridge Foundation                         </Text> {"\n"}is building inclusive spaces at various public parks</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://magicalbridge.org/kindness-ambassador-program/')}>The Magical Bridge Foundation                            {"\n"}{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3, fontWeight: 'bold'}}>We encourage local parks to get themselves added here by contacting us (please visit the Contact Us section)</Text>
      </View>
    );
  }
}  