import React from 'react';
import Ionicons from 'react-native-ionicons';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStackScreen, ExploreStackScreen, ContactStackScreen} from '../navigators/StackNavigator';


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'purple',
        activeBackgroundColor: 'white'
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={25} />
          )
        }} />

      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe" color={color} size={25} />
          ),
        }} />

    </Tab.Navigator>
  );
}

export default BottomTabNavigator;