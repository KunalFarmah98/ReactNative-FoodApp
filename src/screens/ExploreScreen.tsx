import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


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