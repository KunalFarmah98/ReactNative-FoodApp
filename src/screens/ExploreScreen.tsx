import React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantComponent from '../components/RestaurantComponent';
import SearchBar from '../components/SearchBar'; 
import useResults from '../hooks/useResults';


const ExploreScreen = ()=>{


    return(
            <View style = {styles.background}>
                <Text>Explore</Text>
            </View>
    );

}


const styles = StyleSheet.create({
    background:{
        backgroundColor: 'white',
        flex: 1
    }
})


export default ExploreScreen;