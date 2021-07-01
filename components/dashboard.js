// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class Dashboard extends Component {
    render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="About the App"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Fast Facts"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Inclusive Shopping"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Inclusive Dining"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Inclusive Parks"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Other Inclusive Locations"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Inclusive Job Opportunities"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Inclusive Events"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Join the Online Community"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
        <Button
          title="Contact Us"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});