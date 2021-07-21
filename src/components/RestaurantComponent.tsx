import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import FavItem from './FavoriteItemComponent';
import ListItem from './ListItemComponent';


const RestaurantComponent = (props)=>{


    const styles = StyleSheet.create({
        view: {
            padding: 10
        },
        title:{
            fontSize: 20,
            color: 'black',
            marginLeft: 10,
            fontWeight: 'bold'
        }
    });

    return (
        <View style = {styles.view}>
            <Text style = {styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                keyExtractor = {(item)=>{return item.id;}}
                data= {props.data}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item})=> {
                    return(
                        props.isFavorite?<FavItem data = {item}/>:<ListItem data = {item}/>
                    );
                }}/>
        </View>
    );

}

export default RestaurantComponent;