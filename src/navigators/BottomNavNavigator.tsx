import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteStackScreen, HomeStackScreen } from '../navigators/StackNavigator';
import SearchScreen from '../screens/SearchScreen';


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (

    <Tab.Navigator
      initialRouteName='Search'
      barStyle={{ backgroundColor: 'white', borderTopColor: '#1F51FF', borderTopWidth: 0.3}}
      activeColor="#1F51FF"
      inactiveColor="grey"
      tabBarOptions={{
        activeTintColor: 'purple',
        activeBackgroundColor: 'purple',
      }}
    >

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={({ route }) => ({
          tabBarLabel: 'Home',
          title: 'Search Reastaurants',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        })} />

      <Tab.Screen
        name="Favorites"
        component={FavoriteStackScreen}
        options={({ route }) => ({
          title: 'Favorite Reastaurants',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-star" color={color} size={25} />
          ),
        })} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;