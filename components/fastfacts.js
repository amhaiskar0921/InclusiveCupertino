// components/fastfacts.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Linking } from 'react-native';

export default class FastFacts extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold' , fontSize: 25}}>Fast Facts</Text>
        <Text style={{fontSize: 18, margin: 1}}>* As per the CDC website, 1 in 4 adults have some kind of disability.                                            </Text>
        <Text style={{fontSize: 18, margin: 3}}>* According to the NCBI (National Center for Biotechnology Information), the number of people with disabilities is showing an increasing trend over the years, and will continue to maintain that trend.</Text>  
        <Text style={{fontSize: 18, margin: 5}}>* As per the CDC website, 1 in 54 (~2%) children are diagnosed with Autism Spectrum Disorder (ASD) recently, which is 3 times of the year 2000 (1 in 150)</Text> 
        <Text style={{fontSize: 18, margin: 5}}>* The California Department of Developmental Services have over 350,000 clients with some form of physical and/or mental disability</Text>
        <Text style={{fontSize: 18, margin: 5}}>* Since the number of people with disabilities is already high and is continuing to increase, it is crucial for more inclusivity to be implemented in the community</Text>
        <Text style={{fontWeight: 'bold' , fontSize: 25}}>Sources</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html')}>CDC - Disability Impacts All of Us                        </Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.census.gov/library/stories/2021/03/united-states-childhood-disability-rate-up-in-2019-from-2008.html')}>US Census Bureau - U.S. Childhood Disability Rate Up in 2019 from 2008        </Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.ncbi.nlm.nih.gov/books/NBK11437')}>NCBI - The Future of Disability in America         </Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.cdc.gov/ncbddd/autism/data.html')}>CDC - Data and Statistics on Autism Spectrum Disorder</Text>
        <Text style={{fontSize: 18, margin: 3, color: 'blue'}} onPress={() => Linking.openURL('https://www.dds.ca.gov')}>DDS - Department of Developmental Services </Text>
       </View>
    );
  }
}

