import React, { useState } from 'react'
import { Link, useLocation } from "wouter";
import ListOfMovies from 'components/ListOfMovies';
import Spinner from 'components/Spinner/Spinner';
import useMovies from 'hooks/useMovies';
import TrendingMovies from 'components/TrendingMovies';

const Home = () => {
    const [keyword, setKeyword] = useState('');

    const [path, pushLocation] = useLocation(); // path: locaion actual, pushLocation: locacion nueva

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`); // Nueva locacion
    }
    
    const handleChange = e => {
        setKeyword(e.target.value)
    }

    const {loading, movies} = useMovies()

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={keyword} />
            </form>

            <h1>Ultima busqueda</h1>
            { loading ? <Spinner/> : <ListOfMovies movies={movies}/>}

            <TrendingMovies />
        </>
    )
}

export default Home
