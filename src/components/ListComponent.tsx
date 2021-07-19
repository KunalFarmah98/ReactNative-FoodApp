import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ListItem = (item)=>{
    return(
        <View style = {styles.view}>
            <Image style = {styles.image} source = {{uri: item.image_url}}/>
            <Text style = {styles.name}>{item.name}</Text>
            <Text style = {styles.details}>{item.rating} stars, {item.review_count} reviews</Text>
        </View>
    );

    
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5
    },
    title:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    name:{
        fontWeight: 'normal',
        color: 'black',
        fontSize: 16
    },
    details:{
        fontWeight: '400',
        color: 'grey'
    },
    image:{
        flexWrap: 'wrap',
        width: 200,
        height: 150,
        borderRadius: 4
    }
});

export default ListItem;
