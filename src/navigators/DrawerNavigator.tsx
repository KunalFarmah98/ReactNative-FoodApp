import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ContactStackScreen, HomeStackScreen } from '../navigators/StackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
        drawerType = 'slide'>
            <Drawer.Screen name="Home" component={HomeStackScreen} options={({ route }) => ({
                drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="md-home"
                        size={size}
                        color={focused ? '#1F51FF' : 'gray'}
                    />
                ),
            })}/>
            <Drawer.Screen name="Contact" component={ContactStackScreen} options={{
                title: 'Contact',
                drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="md-call"
                        size={size}
                        color={focused ? '#1F51FF' : 'gray'}
                    />
                ),
            }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;