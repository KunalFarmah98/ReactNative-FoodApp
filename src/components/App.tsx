import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import SearchScreen from '../screens/SearchScreen'


const navigator = createStackNavigator({
  Search: SearchScreen,
  // Details: DetailsScreen
},
{initialRouteName: 'Search',
defaultNavigationOptions: {
  title: 'Search Restaurants'
}}
)



export default createAppContainer(navigator);
