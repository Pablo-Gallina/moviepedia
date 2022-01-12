import { useEffect, useState } from 'react'
import getMoviesSearch from 'services/getMoviesSearch';

const INITIAL_PAGE = 1;
const useMovies = ({ keyword } = { keyword : '' }) => {
    const [movies, setMovies] = useState([]);
    // pantalla de cargando
    const [loading, setLoading] = useState(true);
    const [loadingNextPage, setLoadingNextPage] = useState(true)

    // Paginacion
    const [page, setPage] = useState(INITIAL_PAGE)

    // recuperar la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'avengers';

    // funcion del useEffect
    const cargarDatos = ()=>{
        setLoading(true);
        getMoviesSearch({ keyword: keywordToUse }).then( movie => {
            setMovies(movie)
            setLoading(false);
            localStorage.setItem('lastKeyword', keywordToUse)
        })
    }
    // Se ejecuta cada vez que se renderiza el componente
    // Efecto recibe 2 parametros (funcion a ejecutar, y el elemento por el que esperaremos el cambio)
    useEffect(cargarDatos, [keyword, keywordToUse, setMovies]);

    useEffect(() => {
       if (page === INITIAL_PAGE) return;
       setLoadingNextPage(true);
       getMoviesSearch({ keyword: keywordToUse, page })
        .then(nextMovies => {
            setMovies(prevMovies => prevMovies.concat(nextMovies));
            setLoadingNextPage(false);
        })
    }, [keywordToUse, page, setMovies])

    return {loading, movies, loadingNextPage, setPage};
}

export default useMovies
