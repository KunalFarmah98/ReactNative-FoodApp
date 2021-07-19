import React from 'react';
import yelp from '../api/yelp'
import { useState, useEffect } from 'react';


const useResults = ()=>{
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const callSearchApi = async (searchTerm: String)=>{
        console.log(`searching for ${searchTerm}`)
        // if(searchTerm.length>0){
            try{
                const resp = await yelp.get('/search', {
                    params:{
                        limit: 50,
                        term: searchTerm,
                        location: 'NYC'
                    }
                });
                console.log(resp.data.bussineses);
                setResults(resp.data.bussineses);
            }
            catch(err){
                console.log(err);
                setError('Something Went Wrong');
            }
        // }
    }

    // calling a function only once when components loads for the first time
    useEffect(()=>{
        callSearchApi('pizza');
    },[]);

    return [callSearchApi, results, error];
}

export default useResults;