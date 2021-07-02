// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveShopping extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 6}}><Text style= {{fontWeight: 'bold'}}>Jumping Jacks Children’s Boutique</Text>{"\n"}A fully sensory friendly store located in Fredericton, New Brunswick, and Canada{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.sensoryfriendly.net/jumping-jacks-a-sensory-friendly-store/')}>Jumping Jacks Children’s Boutique</Text>
        <Text style={{fontSize: 18, margin: 10}}><Text style= {{fontWeight: 'bold'}}>Target</Text> {"\n"}Some Target stores offer sensory friendly shopping hours for individuals with sound and/or light sensitivity{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://retailleader.com/target-offers-quiet-shopping-hours-mass')}>Target - Sensory Friendly Shopping Hours</Text>
        <Text style={{fontSize: 18, margin: 10}}><Text style= {{fontWeight: 'bold'}}>Barnes and Noble: Sensory Friendly Shopping Hour</Text> {"\n"}Barnes and Noble in Firmingham reserved private store hours for families of children with autism. {"\n"}Therapy dogs were also at the store to play with the children.{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.autismalliance.org/stories/barnes-noble-sensory-friendly-shopping-hour')}>Barnes and Noble - Sensory Friendly Shopping Hour</Text>
        <Text style={{fontSize: 18, margin: 10, fontWeight: 'bold'}}>We encourage local businesses to get themselves added by contacting us (please visit the Contact Us page)</Text>
      </View>
    );
  }
}  