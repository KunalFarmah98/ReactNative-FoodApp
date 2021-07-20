import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


const ContactScreen = ()=>{


    return(
            <View style = {styles.background}>
                <Text>Contact</Text>
            </View>
    );

}


const styles = StyleSheet.create({
    background:{
        backgroundColor: 'white',
        flex: 1
    }
})


export default ContactScreen;