// components/inclusiveshopping.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveShopping extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 4}}><Text style= {{fontWeight: 'bold'}}>Target  </Text> {"\n"}Some Target stores offer sensory friendly shopping hours for individuals with sound and/or light sensitivity  </Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://retailleader.com/target-offers-quiet-shopping-hours-mass')}>Target - Sensory Friendly Shopping Hours        {"\n"}</Text>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>Barnes and Noble</Text> {"\n"}Some Barnes and Noble locations provide reserved private store hours for families of children with autism. {"\n"}Therapy dogs may also be available at the store to play with the children.                             </Text>
        <Text style={{fontSize: 18, margin: 7, color: 'blue'}} onPress={() => Linking.openURL('https://www.autismalliance.org/stories/barnes-noble-sensory-friendly-shopping-hour')}>Barnes and Noble - Sensory Friendly Shopping Hour{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 4}}><Text style= {{fontWeight: 'bold'}}>Jumping Jacks Children’s Boutique               </Text>{"\n"}A fully sensory friendly store located in Fredericton, New Brunswick, and Canada    </Text>
        <Text style={{fontSize: 18, color: 'blue'}} onPress={() => Linking.openURL('https://www.sensoryfriendly.net/jumping-jacks-a-sensory-friendly-store/')}>Jumping Jacks Children’s Boutique                   {"\n"}</Text>
        <Text style={{fontSize: 18, margin: 7, fontWeight: 'bold'}}>We encourage local businesses to get themselves added here by contacting us (please visit the Contact Us section)                     </Text>
      </View>
    );
  }
}  