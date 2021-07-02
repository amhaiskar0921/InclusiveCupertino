// components/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class AboutUs extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold' , fontSize: 25}}>Inspiration</Text>
        <Text style={{fontSize: 18, margin: 12}}>During the COVID-19 pandemic, businesses started to have separate business hours for senior citizens to protect them from crowds, and thereby from COVID-19. {"\n"}The same idea can be extended to people with disabilities and special needs.  
</Text>
        <Text> </Text>
        <Text style={{ fontWeight: 'bold' , fontSize: 25}}>Why is this an important issue?</Text>  
        <Text> </Text>
        <Text style={{fontSize: 18, margin: 12}}><Text style= {{fontWeight: 'bold'}}>For people with disabilities,</Text>{"\n"}crowds can be very uncomfortable, and they can create sensory overload with all the sounds, sights, and smells. {"\n"}Because of this, people with disabilities have very limited access to many of the common resources like parks, stores, and restaurants. 
</Text>
        <Text style={{fontSize: 18, margin: 12}}><Text style= {{fontWeight: 'bold'}}>For the caregivers of people with disabilities,</Text> {"\n"}it becomes socially awkward, uncomfortable (embarrassing at times), and overwhelming to take the people with disabilities to crowded places. {"\n"}The crowds can be overstimulating for people with disabilities and may disregulate them. {"\n"}It will be easier for the caregivers to have people around them who are in a similar situation and can empathize with them, and have less crowds. </Text>
      </View>
    );
  }
}