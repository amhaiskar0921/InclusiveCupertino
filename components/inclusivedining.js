// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveDining extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 5}}><Text style= {{fontWeight: 'bold'}}>Sensory Sensitive Sundays at Chuck E Cheese</Text></Text>
        <Text style={{fontSize: 18, margin: 3}} onPress={() => Linking.openURL('https://www.chuckecheese.com/events/sensory-sensitive-sundays/')}>(Link) Chuck E Cheese - Sensory Sensitive Sundays</Text>
        <Text style={{fontSize: 18, margin: 25}}><Text style= {{fontWeight: 'bold'}}>Autism Eats</Text> {"\n"}is an independent organization that works with restaurants to help accommodate children on the autism spectrum</Text>
        <Text style={{fontSize: 18, margin: 3}} onPress={() => Linking.openURL('http://www.autismeats.org')}>(Link) Autism Eats</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{"\n"}In New Jersey, there are a few restaurants who serve special needs families on certain days and times</Text>
        <Text style={{fontSize: 18, margin: 25}}><Text style= {{fontWeight: 'bold'}}>Guisseppe's restaurant in Old Bridge</Text>{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3}} onPress={() => Linking.openURL('https://943thepoint.com/sensory-friendly-dining-for-special-needs-kids-and-families/')}>(Link) Guisseppe's Restaurant - Sensory Friendly Dining</Text>
        <Text style={{fontSize: 18, margin: 5}}><Text style= {{fontWeight: 'bold'}}>Riv’s Toms River Hub</Text></Text>
        <Text style={{fontSize: 18, margin: 3}} onPress={() => Linking.openURL('https://rivstrhub.com')}>(Link) Riv’s Toms River Hub</Text>
      </View>
    );
  }
}