// components/onlinecommunity.js

import React, { Component } from 'react';
import { Button, View, Text, Image} from 'react-native';

export default class OnlineCommunity extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./FB_WA.jpg')} />
      </View>
    );
  }
}