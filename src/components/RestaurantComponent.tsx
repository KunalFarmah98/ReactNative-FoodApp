import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import ListItem from './ListComponent';


const RestaurantComponent = (props)=>{


    const styles = StyleSheet.create({
        view: {
            padding: 10
        },
        title:{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold'
        }
    });

    return (
        <View style = {styles.view}>
            <Text style = {styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                keyExtractor = {(item)=>{return item.id}}
                data= {props.data}
                scrollEnabled = {false}
                renderItem = {({item})=> {
                    return(
                        <ListItem item = {item}/>
                    );
                }}/>
        </View>
    );

}

export default RestaurantComponent;