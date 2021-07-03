// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, ImageBackground } from 'react-native';

const image = { uri: "https://media.istockphoto.com/vectors/frame-background-banner-blank-with-puzzle-jigsaw-colorful-pieces-vector-id1167277500?b=1&k=6&m=1167277500&s=612x612&w=0&h=CpwGElzzLg3eFpkJq9dYaGacYHF-g2562L-nagP1F28=" };

export default class Dashboard extends Component {
    render() {
    return (
      <View style = { styles.container } >
      <ImageBackground  style= { styles.imgBackground } source={image} resizeMode='cover'>  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="About Us"
          onPress={() => this.props.navigation.navigate('AboutUs')}
        />
        <Button
          title="Fast Facts"
          onPress={() => this.props.navigation.navigate('FastFacts')}
        />
        <Button
          title="Inclusive Shopping"
          onPress={() => this.props.navigation.navigate('InclusiveShopping')}
        />
        <Button
          title="Inclusive Dining"
          onPress={() => this.props.navigation.navigate('InclusiveDining')}
        />
        <Button
          title="Inclusive Parks"
          onPress={() => this.props.navigation.navigate('InclusiveParks')}
        />
        <Button
          title="Other Inclusive Locations"
          onPress={() => this.props.navigation.navigate('InclusiveOthers')}
        />
        <Button
          title="Inclusive Events"
          onPress={() => this.props.navigation.navigate('InclusiveEvents')}
        />
        <Button
          title="Join the Online Community"
          onPress={() => this.props.navigation.navigate('OnlineCommunity')}
        />
        <Button
          title="Contact Us"
          onPress={() => this.props.navigation.navigate('ContactUs')}
        />
      </View>
      </ImageBackground>
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
  },
  imgBackground: {
    width: '120%',
    height: '100%',
    flex: 1 
},
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3
}
});