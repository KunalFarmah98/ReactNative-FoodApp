import React from 'react';
import { View , StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const SearchBar = (props)=>{


    return(

        <View style = {styles.backgorund}>
            <Icon name = 'search' style = {{height: 30, width: 30, alignSelf: 'center', marginHorizontal: 15}} size = {30}/>
            <TextInput style=  {styles.search }
            placeholder = 'Search'
            placeholderTextColor = 'grey'
            value = {props.term}
            autoCapitalize = 'none'
            autoCorrect = {false}
            keyboardType = 'web-search'
            onEndEditing = {props.onTermSubmit}
            onChangeText = {props.onTermChange}/>

        </View>

    );

}

const styles = StyleSheet.create({
    search:{
        color: 'black',
        fontSize: 18,
        flex: 1,
    },
    backgorund:{
        backgroundColor: '#f0eeee',
        flexDirection: 'row',
        borderRadius: 8,
        margin: 15,
        height: 50
    }
});


export default SearchBar;