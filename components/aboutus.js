// components/aboutus.js

import React, { Component } from 'react';
import { Button, View, Text, Image} from 'react-native';

export default class AboutUs extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold' , fontSize: 20}}>About the App </Text>
        <Text style={{fontSize: 18, margin: 12}}>The InclusiveCupertino App helps people find sensory friendly hours in various social settings, making the public spaces more available to special needs communities and creating social justice for them.</Text>  

        <Text style={{ fontWeight: 'bold' , fontSize: 20}}>Inspiration </Text>
        <Text style={{fontSize: 18, margin: 12}}>I have closely seen parents think a lot before taking their special needs child out in the community to parks, restaurants, shopping etc. At times, the parents cannot take the child out due to the problems listed below.</Text>
        <Text> </Text>
        <Text style={{ fontWeight: 'bold' , fontSize: 20}}>The Problems</Text>  
        <Text style={{fontSize: 18, margin: 12}}><Text style= {{fontWeight: 'bold'}}>For people with disabilities,</Text> crowds can be very uncomfortable, and they can create sensory overload with all the sounds, sights, and smells. Because of this, people with disabilities cannot equally access many of the common resources like parks, stores, and restaurants. 
</Text>
        <Text style={{fontSize: 18, margin: 12}}><Text style= {{fontWeight: 'bold'}}>For the caregivers of people with disabilities,</Text> it becomes socially awkward, uncomfortable, and overwhelming to take the people with disabilities to crowded places. {"\n"}The crowds can be overstimulating for people with disabilities and may disregulate them, making it difficult for the caregivers to handle them. {"\n"}</Text>
      </View>
    );
  }
}