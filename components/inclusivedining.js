// components/inclusivedining.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveDining extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 5}}><Text style= {{fontWeight: 'bold'}}>Sensory Sensitive Sundays at Chuck E Cheese</Text>{"\n"}Chuck E Cheese offers sensory friendly hours for children with special needs, and they have trained personnel during these hours.</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.chuckecheese.com/events/sensory-sensitive-sundays/')}>Chuck E Cheese - Sensory Sensitive Sundays</Text>
        <Text style={{fontSize: 18, margin: 8}}><Text style= {{fontWeight: 'bold'}}>{"\n"}Autism Eats</Text> {"\n"}is an independent organization that works with restaurants to help accommodate children on the autism spectrum</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue', textAlign: 'left'}} onPress={() => Linking.openURL('http://www.autismeats.org')}>Autism Eats                                                            </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{"\n"}Food for Thought   :                                           </Text>
        <Text style={{fontSize: 18, margin: 5}}>In New Jersey, there are several restaurants who serve special needs families on certain days and times.                                                      {"\n"}{"\n"}Some examples below:{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 5}}><Text style= {{fontWeight: 'bold'}}>Guisseppe's restaurant in Old Bridge              </Text></Text>
        <Text style={{fontSize: 18, margin: 7, color: 'blue'}} onPress={() => Linking.openURL('https://943thepoint.com/sensory-friendly-dining-for-special-needs-kids-and-families/')}>Guisseppe's Restaurant - Sensory Friendly Dining                                                                        </Text>
        <Text style={{fontSize: 18, margin: 5}}><Text style= {{fontWeight: 'bold'}}>Riv’s Toms River Hub                                               </Text></Text>
        <Text style={{fontSize: 18, margin: 5, color: 'blue'}} onPress={() => Linking.openURL('https://rivstrhub.com')}>Riv’s Toms River Hub                                             </Text>
      </View>
    );
  }
}