import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FavItem from './FavoriteItemComponent';
import ListItem from './ListItemComponent';
import { useNavigation } from '@react-navigation/native';


const RestaurantComponent = (props)=>{


    const navigation = useNavigation();
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

    if(props.data.length==0)
        return null;

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
                        <TouchableOpacity onPress=  {()=>navigation.navigate('Details', {name: item.name, id: item.id})}>
                            {props.isFavorite?<FavItem data = {item}/>:<ListItem data = {item}/>}
                        </TouchableOpacity>
                    );
                }}/>
        </View>
    );

}

export default RestaurantComponent;