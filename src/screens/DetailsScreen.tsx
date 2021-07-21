import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({ navigation, route }) => {
    const id = route.params.id;
    const [result, setResult] = useState(null);

    console.log(result);

    const getResult = async (id: String) => {
        const resp = await yelp.get(`/${id}`);
        setResult(resp.data);
    }

    useEffect(() => {
        navigation.setOptions({
            tabBarVisible: false
        });
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View>
            <Text>{id}</Text>
        </View>
    );
}

export default DetailsScreen;