import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-ionicons';

import SearchScreen from '../screens/SearchScreen'
import ExploreScreen from '../screens/ExploreScreen';
import { Platform } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';


const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();


  // creating stack navigator for home
  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={SearchScreen}
          options={({ route }) => ({
            headerTitle: 'Search',
          })}
        />
      </HomeStack.Navigator>
    );
  }

  // creating stack navigator for explore

  const ExploreStackScreen = () => {
    return (
      <ExploreStack.Navigator>
        <ExploreStack.Screen
          name="Explore"
          component={ExploreScreen}
          options={({ route }) => ({
            headerTitle: 'Explore Restaurants',
          })}
        />
      </ExploreStack.Navigator>
    );
  }

  // linking both stack navigators into bottom nav
  const App = () => {
    return (
      <NavigationContainer>
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
      </NavigationContainer>
    );
  }

  export default App;