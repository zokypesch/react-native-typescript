import React, {useState, useEffect} from 'react'
import {Service, Data} from './Types'

export interface DataExample {
    results: Data[]
}

const Post = () => {
    const [result, setResult] = useState<Service<DataExample>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('https://swapi.co/api/starships')
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
  }, []);
    return result;
}

export default Post