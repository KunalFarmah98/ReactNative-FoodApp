import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Linking, TouchableOpacity } from 'react-native';
import { openComposer } from 'react-native-email-link';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ContactScreen = ({navigation}) => {


    const call = (number: String) => {
        if (Platform.OS === 'ios') {
            number = `telprompt:${number}`;
        } else {
            number = `tel:${number}`;
        }
        Linking.openURL(number);
    }

    const email = (mailId) => {
        openComposer({
            to: mailId,
            subject: 'Feedback for Food App',
            body: 'Hi, the Food app is awsome'
        });
    }

    return (
        <View style={styles.background}>
            <Text style={[styles.text,{marginBottom:50}]}>Sample React Native App having {"\n"}{"\n"}State Management {"\n"}Component Inner State Handling {"\n"}SQLite Persistence,
            {"\n"}React Navigation (Stack, BottomTab, Drawer) {"\n"}API calls via Axios
            {"\n"}{"\n"}Created by:</Text>
            <Text style={[styles.text,{alignSelf:'center', fontWeight: '700', marginBottom: 20}]}>Kunal Farmah</Text>
            <View style={styles.Row}>
                        <Ionicons name='call' style={styles.Icon} size = {25}/>
                        <TouchableOpacity onPress={() => { call('9654211634') }}>
                        <Text style={styles.text} >9654211634</Text>
                        </TouchableOpacity>
                    </View><View style={styles.Row}>
                        <Ionicons name='mail' style={styles.Icon} size = {25}/>
                        <TouchableOpacity onPress={() => { email('kunalfarmah98@gmail.com') }}>
                        <Text style={styles.text}>kunalfarmah98@gmail.com</Text>
                        </TouchableOpacity>
                    </View><View style={styles.Row}>
                        <Ionicons name='globe' style={styles.Icon} size = {25} />
                        <TouchableOpacity onPress = {()=>{Linking.openURL('https://kunal-farmah.jimdosite.com')}}>
                        <Text style={styles.text}>kunal-farmah.jimdosite.com</Text>
                        </TouchableOpacity>
                    </View>
                
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        color: "black",
        fontWeight: '500',
        fontSize: 20,
        marginStart: 10,
        justifyContent: 'center'
    },
    Row: {
        margin: 20,
        flexDirection: 'row'
    },
    Icon: {
        marginEnd: 10,
    }
})


export default ContactScreen;