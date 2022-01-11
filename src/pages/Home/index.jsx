import React, { useState } from 'react'
import { Link, useLocation } from "wouter";
import ListOfMovies from '../../components/ListOfMovies';
import Spinner from '../../components/Spinner/Spinner';
import useMovies from '../../hooks/useMovies';

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

    const {loading, movies} = useMovies({ keyword : 'popular' })

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={keyword} />
            </form>
            <h1>Busquedas populares</h1>
            <Link to="/search/top_rated">
                Top Peliculas
            </Link> <br/>
            <Link to="/search/popular">
                Popular
            </Link> <br/>
            <Link to="/search/upcoming">
                Estrenos 2022
            </Link>

            { loading ? <Spinner/> : <ListOfMovies movies={movies}/>}
        </>
    )
}

export default Home
