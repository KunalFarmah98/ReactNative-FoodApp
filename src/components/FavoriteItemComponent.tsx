import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const FavItem = ({ data }) => {

    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.details}>{data.rating} stars, {data.review_count} reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        borderRadius: 10,
        elevation: 4,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 10
    },
    name: {
        fontWeight: '600',
        color: 'black',
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 5
    },
    details: {
        fontWeight: '400',
        color: 'grey',
        marginBottom: 5,
        marginHorizontal: 10
    },
    image: {
        width: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 150,
    }
});

export default FavItem;
