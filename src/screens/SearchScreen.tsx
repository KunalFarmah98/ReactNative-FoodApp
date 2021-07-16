import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar'; 


const SearchScreen = ()=>{

    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const callSearchApi = async (searchTerm: String)=>{
        if(term.length>0){
            try{
                const resp = await yelp.get('/search', {
                    params:{
                        limit: 50,
                        term,
                        location: "New York"
                    }
                });
                console.log(resp.data.bussineses);
                setResults(resp.data.bussineses);
            }
            catch(err){
                console.log(err);
                setError('Something Went Wrong');
            }
        }
    }

    return(
        <View style = {styles.background}>
            <SearchBar 
                term = {term} 
                onTermChange = {newTerm => setTerm(newTerm)} 
                onTermSubmit = {()=>callSearchApi(term)}/>

            {error.length>0?<Text>{error}</Text>:<Text>We found {results.length} results</Text>}
            
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