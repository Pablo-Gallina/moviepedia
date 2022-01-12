import React from 'react'
import Spinner from 'components/Spinner/Spinner';
import ListOfMovies from 'components/ListOfMovies/ListOfMovies'
import useMovies from 'hooks/useMovies';

const SearchResults = ({ params }) => {
    const { keyword } = params;

    // Custom hook para cargar listar las movies
    const {loading, movies, setPage} = useMovies({ keyword })

    const handleNext = () => setPage(prevPage => prevPage + 1);
    return <>
        { loading ? <Spinner/> : <ListOfMovies movies={movies}/>}

        <button onClick={handleNext}>Siguiente pagina</button>
        </>
    
}

export default SearchResults
