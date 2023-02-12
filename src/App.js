import React from 'react';
import { useEffect } from 'react';

// 930634a9

const API_URL = 'http://www.omdbapi.com?apikey=930634a9';

const App = () => {

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=$(title)`);
        const data = await response.json();
    }

    useEffect(() => {
        searchMovies()
    }, [])

    return (
        <h1>App</h1>
    )
}

export default App