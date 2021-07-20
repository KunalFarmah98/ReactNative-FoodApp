import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-ionicons';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';


import SearchScreen from '../screens/SearchScreen'
import ExploreScreen from '../screens/ExploreScreen';
import ContactScreen from '../screens/ContactScreen';



const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ContactStack = createStackNavigator();


const IoniconsHeaderButton = (props) => (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);


// creating stack navigator for home
const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={SearchScreen}
                options={({ route }) => ({
                    headerTitle: 'Search Restaurants',
                    headerLeft: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item title="Menu" iconName='ios-menu' onPress={() => { navigation.openDrawer() }} />
                            </HeaderButtons>
                        );
                    }
                })}
            />
        </HomeStack.Navigator>
    );
}

// creating stack navigator for explore

const ExploreStackScreen = ({ navigation }) => {
    return (
        <ExploreStack.Navigator>
            <ExploreStack.Screen
                name="Explore"
                component={ExploreScreen}
                options={({ route }) => ({
                    headerTitle: 'Explore Restaurants',
                    headerLeft: () => {
                        return (
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item title="Menu" iconName='ios-menu' onPress={() => { navigation.openDrawer() }} />
                            </HeaderButtons>
                        );
                    }
                })}
            />
        </ExploreStack.Navigator>
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

export {HomeStackScreen, ExploreStackScreen, ContactStackScreen};