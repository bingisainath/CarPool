import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import bookedRidesScreen from '../bookedRidesScreen/bookedRidesScreen';
import publisedRideScreen from '../publishedRideScreen/publisedRideScreen';
import { style } from './style';

const Tab = createMaterialTopTabNavigator();

const YourRidesNavigationScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Booked Rides" component={bookedRidesScreen} />
      <Tab.Screen name="Published Rides" component={publisedRideScreen} />
    </Tab.Navigator>
    
  )
}

export default YourRidesNavigationScreen