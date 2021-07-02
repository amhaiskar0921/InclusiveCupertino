// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class InclusiveOthers extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>Children’s Discovery Museum San Jose: Play Your Way</Text>{"\n"}Normally in February, April, September every year{"\n"}https://www.cdm.org/event/play-your-way-13/?instance_id=8492{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 10}}><Text style= {{fontWeight: 'bold'}}>AMC Sensory Friendly Screening</Text>{"\n"}Available on the second and fourth Saturday (family-friendly) and Wednesday evenings (mature audiences) of every month depending on your location.
{"\n"}https://www.amctheatres.com/programs/sensory-friendly-films</Text>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>Pump it Up Sensory Jump</Text>{"\n"}Pump it Up provides a sensory-friendly environment for children on the autism spectrum and their families{"\n"}https://www.pumpitupparty.com/union-city-ca/other-ways-to-play/open-jump/{"\n"}</Text>
        <Text style={{fontSize: 18, margin: 7}}><Text style= {{fontWeight: 'bold'}}>Friends of the Palo Alto Junior Museum and Zoo: Super Family Sunday</Text>{"\n"}The Palo Alto Junior Museum and Zoo hosts Super Family Sunday for families with special needs to come together and enjoy in an inclusive and welcoming environment {"\n"}https://friendsjmz.org/super-family-sunday/{"\n"}</Text>
      </View>
    );
  }
}  