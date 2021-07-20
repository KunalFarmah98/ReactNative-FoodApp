import React from 'react';
import Ionicons from 'react-native-ionicons';
import { ContactStackScreen } from '../navigators/StackNavigator';
import BottomTabNavigator from './BottomNavNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTabNavigator} options={{
                title: 'Search Restaurants',
                drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="md-home"
                        size={size}
                        color={focused ? 'purple' : 'gray'}
                    />
                ),
            }} />
            <Drawer.Screen name="Contact" component={ContactStackScreen} options={{
                title: 'Contact',
                drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="md-call"
                        size={size}
                        color={focused ? 'purple' : 'gray'}
                    />
                ),
            }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;