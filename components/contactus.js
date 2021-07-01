// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ContactUs extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>Email</Text>   
        <Text>abc123@gmail.com</Text>
        <Text> </Text>
        <Text style={{ fontWeight: 'bold' }}>Phone Number</Text>
        <Text>1800-222-1222</Text>
        <Text> </Text>
        <Text>If you have any questions, comments, or concerns, please reach out to us!</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}
