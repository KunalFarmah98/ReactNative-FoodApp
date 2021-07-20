import React from 'react';
import { useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';
import SQLite from "react-native-sqlite-2";



const db = SQLite.openDatabase({ name: 'fav.db', location: 'default' });

let isPresent = false;


const addToFavourites = (item) => {
    db.transaction((txn) => {
        console.log(`adding ${item.name} to fav`);
        txn.executeSql(
            'INSERT INTO fav VALUES(:id, :name, :image, :rating, :stars, :price)',
            [item.id, item.name, item.image_url, item.review_count, item.rating, item.price]
        );
    })
}



const ListItem = ({ data }) => {

    useEffect(()=>{
        console.log(`current id is ${data.id}`);
        db.transaction(txn => {
            txn.executeSql('CREATE TABLE IF NOT EXISTS fav(id VARCHAR(255), name VARCHAR(255), image VARCHAR(255), rating VARCHAR(255), stars VARCHAR(255), price VARCHAR(255))', []);
        });
        db.transaction((txn) => {
            txn.executeSql("SELECT * FROM fav", [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    console.log("item:", res.rows.item(i));
                }
            });
        });
        db.transaction((txn) => {
            txn.executeSql("SELECT * FROM fav WHERE id= ?", [data.id], function (tx, res) {
                if (res.rows.length > 0){
                    console.log('found..................................................................................'+data.name);
                    isPresent =  true;
                }
                else
                    isPresent =  false;
            });
        });
    });

    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{ uri: data.image_url }} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.details}>{data.rating} stars, {data.review_count} reviews</Text>
            <Icon style={[styles.fav, isPresent? {color :'orange'}:{color:'white'}]} name='ios-star' size={25} onPress={() => { addToFavourites(data) }} />
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
    },
    fav: {
        position: 'absolute',
        alignSelf: 'flex-end',
        padding: 10
    }
});

export default ListItem;
