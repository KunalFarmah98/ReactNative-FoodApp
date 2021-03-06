import React from 'react';
import yelp from '../api/yelp'
import { useState, useEffect } from 'react';
import Restaurant from '../model/Restaurant';
import SQLite from "react-native-sqlite-storage";



const db = SQLite.openDatabase({ name: 'Favorite.db', location: 'default' },
    () => { console.log('db opnened') },
    err => {
        console.log('error opening db: ' + err)
    });


const useResults = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    let list = [];
    let favs = [];

    const callSearchApi = async (searchTerm: String) => {
        console.log(`searching for ${searchTerm}`)
        getFavourites();
        if (searchTerm.length == 0) {
            searchTerm = 'pizza';
        }
        try {
            const resp = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'NYC'
                }
            });
            const data = resp.data.businesses;
            console.log(favs);
            for (let i = 0; i < data.length; i++) {
                const value = data[i];
                let isPresent = false;
                for (let i = 0; i < favs.length; i++) {
                    if (favs[i].id === value.id) {
                        isPresent = true;
                        break;
                    }
                }
                list.push(new Restaurant(value.id, value.name, value.review_count, value.rating, value.price, value.image_url, isPresent));
            }
            setResults(list);
        }
        catch (err) {
            console.log(err);
            setError('Something Went Wrong');
        }
    }

    // calling a function only once when components loads for the first time
    useEffect(() => {
        getFavourites();
        callSearchApi('pizza');
    }, []);


    const getFavourites = async () => {
        await db.transaction(txn => {
            txn.executeSql('CREATE TABLE IF NOT EXISTS fav(id VARCHAR(255) PRIMARY KEY, name VARCHAR(255), image VARCHAR(65535), rating FLOAT(0), review_count FLOAT(0), price VARCHAR(255))', []);
        })
        await db.transaction((txn) => {
            txn.executeSql("SELECT * FROM fav", [], function (tx, res) {
                console.debug(`${res.rows.length} Favourites found`);
                for (let i = 0; i < res.rows.length; ++i) {
                    let fav = res.rows.item(i);
                    favs.push(new Restaurant(fav.id, fav.name, fav.review_count, fav.rating, fav.price, fav.image, true));
                }
            });
        });
        console.log('favorites are: ' + favs);
    }

    return [callSearchApi, results, error];
}

export default useResults;