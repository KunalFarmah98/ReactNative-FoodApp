import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ProgressBar } from 'react-native-paper';
import yelp from '../api/yelp';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DetailsScreen = ({ route }) => {
    const id = route.params.id;
    const [result, setResult] = useState(null);

    const styles = StyleSheet.create({
        wait: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        Image: {
            margin: 20,
            width: 300,
            height: 200,
            alignSelf: 'center',
            borderRadius: 10
        },
        View: {
            flex: 1,
            alignItems: 'center'
        },
        Info: {
            color: 'black',
            fontSize: 18,
            marginHorizontal:10,
            fontWeight: '500',
            justifyContent: 'center'
        },
        Row: {
            margin: 20,
            flexDirection: 'row'
        },
        Icon: {
            marginEnd: 10
        },
        List: {
            margin: 20,
        }
    });

    const getResult = async (id: String) => {
        const resp = await yelp.get(`/${id}`);
        if (resp != null && resp != undefined)
            setResult(resp.data);
    }

    console.log(result);

    const call = (number: String) => {
        if (Platform.OS === 'ios') {
            number = `telprompt:${number}`;
        } else {
            number = `tel:${number}`;
        }
        Linking.openURL(number);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return (
            <View style={styles.wait}>
                <Text >Please Wait. Loading</Text>
                <ProgressBar style={{ marginTop: 20, width: 200 }} />
            </View>
        );
    }
    else {
        console.log(result.image_url);
        let add = result.location.display_address;
        let address = '';
        for(let i=0; i<add.length-1; i++){
            address+=add[i];
            address+=', ';
        }
        address+=add[add.length-1];
        return (
            <View style={styles.View}>
                <ScrollView>
                    <Image style={styles.Image} source={{ uri: result.image_url }} />
                    <View style={styles.Row}>
                        <Ionicons name='home' style={styles.Icon} size={25} />
                        <Text style={styles.Info}>{address}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Ionicons name='globe' style={styles.Icon} size={25} />
                        <TouchableOpacity onPress={() => { Linking.openURL(result.url) }}>
                            <Text style={[styles.Info, { textDecorationLine: 'underline' }]}>{result.url}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Row}>
                        <Ionicons name='call' style={styles.Icon} size={25} />
                        <TouchableOpacity onPress={() => { call(result.display_phone) }}>
                            <Text style={styles.Info}>{result.display_phone}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.Info, { alignSelf: 'center', marginTop: 20 }]}> All Images: </Text>
                    <FlatList
                        style={styles.List}
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return <Image style={styles.Image} source={{ uri: item }} />
                        }}
                    />
                </ScrollView>
            </View>
        );
    }

}

export default DetailsScreen;