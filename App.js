// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import ContactUs from './components/contactus';
import AboutUs from './components/aboutus'
import FastFacts from './components/fastfacts'
import OnlineCommunity from './components/onlinecommunity';
import InclusiveDining from './components/inclusivedining';
import InclusiveParks from './components/inclusiveparks';
import InclusiveOthers from './components/inclusiveothers';
import InclusiveEvents from './components/inclusiveevents';
import InclusiveShopping from './components/inclusiveshopping';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Inclusive Cupertino' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: 'Login' }}
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={{ title: 'Dashboard' }}
      />
      <Stack.Screen 
       name="ContactUs" 
       component={ContactUs} 
       options={{ title: 'Contact Us' }}
      />
      <Stack.Screen 
       name="AboutUs" 
       component={AboutUs} 
       options={{ title: 'About Us' }}
      />
      <Stack.Screen 
       name="FastFacts" 
       component={FastFacts} 
       options={{ title: 'Fast Facts' }}
      />
      <Stack.Screen 
       name="OnlineCommunity" 
       component={OnlineCommunity} 
       options={{ title: 'Join the Online Community' }}
      />
      <Stack.Screen 
       name="InclusiveDining" 
       component={InclusiveDining} 
       options={{ title: 'Inclusive Dining' }}
      />
      <Stack.Screen 
       name="InclusiveParks" 
       component={InclusiveParks} 
       options={{ title: 'Inclusive Parks' }}
      />
      <Stack.Screen 
       name="InclusiveOthers" 
       component={InclusiveOthers} 
       options={{ title: 'Other Inclusive Locations' }}
      />
      <Stack.Screen 
       name="InclusiveEvents" 
       component={InclusiveEvents} 
       options={{ title: 'Inclusive Events' }}
      />
      <Stack.Screen 
       name="InclusiveShopping" 
       component={InclusiveShopping} 
       options={{ title: 'Inclusive Shopping' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}