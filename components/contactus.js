// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ContactUs extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Our Address: Cupertino Library, Room 24, Cupertino, CA 95014 </Text>   
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}
