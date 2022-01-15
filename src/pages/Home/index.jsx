import React from 'react'
import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import Spinner from 'components/Spinner/Spinner';
import useMovies from 'hooks/useMovies';
import TrendingMovies from 'components/TrendingSearch';

const Home = () => {

    const {loading, movies} = useMovies()

    return (
        <>

            <h1>Ultima busqueda</h1>
            { loading ? <Spinner/> : <ListOfMovies movies={movies}/>}

            <TrendingMovies />
        </>
    )
}

export default Home
