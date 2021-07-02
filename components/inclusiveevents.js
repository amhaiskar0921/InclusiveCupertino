// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveEvents extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>Animal Assisted Happiness</Text>{"\n"}Aims to bring happiness to children with special needs through interactions with barnyard animals at various locations{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3}} onPress={() => Linking.openURL('https://www.animalassistedhappiness.org')}>(Link) Animal Assisted Happiness</Text>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>Sensory Inclusive Storytime at the Milpitas Library</Text>{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3}} onPress={() => Linking.openURL('https://sccl.bibliocommons.com/events/5e00142fdf6a312f00e134d4')}>(Link) Sensory Inclusive Storytime</Text>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>AYSO VIP Soccer Program</Text>{"\n"}Aims to provide an inclusive and welcoming environment for individuals with physical and mental disabilities to play soccer{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 3}} onPress={() => Linking.openURL('https://ayso.org/play/vip/')}>(Link) AYSO VIP Soccer Program</Text>
      </View>
    );
  }
}  