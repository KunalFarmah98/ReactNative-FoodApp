import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantComponent from '../components/RestaurantComponent';
import SQLite from 'react-native-sqlite-storage';


const FavoriteScreen = () => {

    const db = SQLite.openDatabase({ name: 'Favorite.db', location: 'default' },
    () => { console.log('db opnened') },
    err => {
        console.log('error opening db: ' + err)
    });

    const [favorites, setFavorites] = useState([]);


    useEffect(()=>{
        db.transaction((txn) => {
            txn.executeSql("SELECT * FROM fav", [],
            function (_tx, res) {
                let favs = [];
                for (let i = 0; i < res.rows.length; ++i) {
                    favs.push(res.rows.item(i));
                }
                setFavorites(favs);
            });
        });
    });



    const filterResultsbyPrice = (p: String) => {
        return favorites.filter(result=>{
            return result.price === p;
        });
    }

    return (
        <View style={styles.background}>
            <ScrollView>
                <RestaurantComponent title='Cost Effective' data={filterResultsbyPrice('$')} isFavorite/>
                <RestaurantComponent title='Bit Costlier' data={filterResultsbyPrice('$$')} isFavorite/>
                <RestaurantComponent title='Big Spender' data={filterResultsbyPrice('$$$')} isFavorite/>
            </ScrollView>
        </View>
    );

}


const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    }
});


export default FavoriteScreen;