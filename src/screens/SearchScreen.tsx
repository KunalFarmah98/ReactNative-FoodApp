import React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantComponent from '../components/RestaurantComponent';
import SearchBar from '../components/SearchBar'; 
import useResults from '../hooks/useResults';


const SearchScreen = ()=>{

    const [term, setTerm] = useState("");

    // any logic that gives out some results that populate data can be viewed as a hook

    const [callSearchApi, results] = useResults();
    

    const filterResultsbyPrice = (p:String) =>{
        //price is '$', '$$', or '$$$'
        return results.filter(result=>{
            return result.price === p;
        });
    }

    return(
            <View style = {styles.background}>
                <ScrollView>
                <SearchBar 
                    term = {term} 
                    onTermChange = {newTerm => setTerm(newTerm)} 
                    onTermSubmit = {()=>callSearchApi(term)}/>

                    <RestaurantComponent title='Cost Effective' data = {filterResultsbyPrice('$')} />
                    <RestaurantComponent title='Bit Costlier'  data = {filterResultsbyPrice('$$')} />
                    <RestaurantComponent title='Big Spender'  data = {filterResultsbyPrice('$$$')} />

                {/* {error.length>0?<Text>{error}</Text>:<Text>We found {results.length} results</Text>} */}
                </ScrollView>
            </View>
    );

}


const styles = StyleSheet.create({
    background:{
        backgroundColor: 'white',
        flex: 1
    }
})


export default SearchScreen;