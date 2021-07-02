// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ContactUs extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold' , fontSize: 25}}>Email</Text>   
        <Text style={{fontSize: 20}}>InclusiveCupertino@gmail.com</Text>
        <Text> </Text>
        <Text style={{ fontWeight: 'bold' , fontSize: 25}}>Phone Number</Text>
        <Text style={{fontSize: 20}}>1-800-INC-CUPR</Text>
        <Text> </Text>
        <Text style={{textAlign: 'center', fontSize: 20}}>If you have any questions, comments, or concerns, please reach out to us!</Text>
        <Text> </Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}
