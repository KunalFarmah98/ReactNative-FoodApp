import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';


import FavoriteScreen from '../screens/FavoriteScreen';
import ContactScreen from '../screens/ContactScreen';
import DetailsScreen from '../screens/DetailsScreen';
import BottomTabNavigator from './BottomNavNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';




const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const ContactStack = createStackNavigator();



const IoniconsHeaderButton = (props) => (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

// controlling visibility of header based on route name
const showHeader = (route)=>{
    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName==='Favorites')
        return false;
    return true;

}

// creating stack navigator for home
const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Tabs"
                component={BottomTabNavigator}
                options={({ route }) => ({
                    headerTitle: 'Search Restaurants',
                    headerShown: showHeader(route),
                    headerLeft: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item title="Menu" iconName='ios-menu' onPress={() => { navigation.openDrawer() }} />
                            </HeaderButtons>
                        );
                    }
                })}
            />
            <HomeStack.Screen
                name="Details"
                component={DetailsScreen}
                options={({ route }) => ({
                    headerTitle: route.params.name,
                    headerLeft: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item title="Back" iconName='arrow-back' onPress={() => { navigation.goBack() }} />
                            </HeaderButtons>
                        );
                    },
                })}
            />
        </HomeStack.Navigator>
    );
}

// creating stack navigator for favorites

const FavoriteStackScreen = ({ navigation }) => {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={({ route }) => ({
                    headerTitle: 'Favorite Restaurants',
                    headerShown: true,
                    headerLeft: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item title="Menu" iconName='ios-menu' onPress={() => { navigation.openDrawer() }} />
                            </HeaderButtons>
                        );
                    }
                })}
            />
        </FavoriteStack.Navigator>
    );
}

const ContactStackScreen = ({ navigation }) => {
    return (
        <ContactStack.Navigator>
            <ContactStack.Screen
                name="Contact"
                component={ContactScreen}
                options={({ route }) => ({
                    headerTitle: 'Contact',
                    headerLeft: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item title="Back" iconName='arrow-back' onPress={() => { navigation.goBack() }} />
                            </HeaderButtons>
                        );
                    }
                })}
            />
        </ContactStack.Navigator>
    );
}

export { HomeStackScreen, FavoriteStackScreen, ContactStackScreen };