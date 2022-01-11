import React from 'react'
import Spinner from 'components/Spinner/Spinner';
import ListOfMovies from 'components/ListOfMovies'
import useMovies from 'hooks/useMovies';

const SearchResults = ({ params }) => {
    const { keyword } = params;

    // Custom hook para cargar listar las movies
    const {loading, movies} = useMovies({ keyword })

    return <>
        { loading ? <Spinner/> : <ListOfMovies movies={movies}/>}
        </>
    
}

export default SearchResults
