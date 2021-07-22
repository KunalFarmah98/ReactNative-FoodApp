import React from 'react';
import { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SQLite from "react-native-sqlite-storage";



const db = SQLite.openDatabase({ name: 'Favorite.db', location: 'default' },
    () => { console.log('db opnened') },
    err => {
        console.log('error opening db: ' + err)
    });

const ListItem = ({ data }) => {

    const [isPresent, setPresent] = useState(data.isPresent);

    const addToFavourites = (item) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM fav WHERE ID = ?', [item.id], function (tx, res) {
                if (res.rows.length <= 0) {
                    try {
                        db.transaction((txn) => {
                            txn.executeSql(
                                'INSERT INTO fav(id, name, image, rating, review_count, price) VALUES(?,?,?,?,?,?)',
                                [item.id, item.name, item.image, item.rating, item.review_count, item.price]
                            );
                        });
                        console.log(`added ${item.name}`);
                        setPresent(true);
                    }
                    catch (e) {
                        console.log("error inserting item: " + e);
                        setPresent(false);
                    }
                }
                else {
                    try {
                        db.transaction((txn) => {
                            txn.executeSql(
                                'DELETE FROM fav WHERE id = ?',
                                [item.id]
                            );
                        });
                        console.log(`removed ${item.name}`);
                        setPresent(false);
                    }
                    catch (e) {
                        console.log("error removing item: " + e);
                        setPresent(true);
                    }
                }
            }
            )
        });
    }


    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.details}>{data.rating} stars, {data.review_count} reviews</Text>
            <Icon style={[styles.fav, isPresent ? { color: 'orange' } : { color: 'white' }]} name='ios-star' size={25} onPress={() => { addToFavourites(data) }} />
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
