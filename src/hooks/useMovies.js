import React, { useEffect, useState } from 'react'
import getMoviesSearch from '../services/getMoviesSearch';

const useMovies = ({ keyword } = { keyword : '' }) => {
    const [movies, setMovies] = useState([]);
    // pantalla de cargando
    const [loading, setLoading] = useState(true);

    // recuperar la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'avengers';

    // funcion del useEffect
    const cargarDatos = ()=>{
        setLoading(true);
        getMoviesSearch({ keyword: keywordToUse }).then( movie => {
            setMovies(movie)
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword)
        })
    }
    // Se ejecuta cada vez que se renderiza el componente
    // Efecto recibe 2 parametros (funcion a ejecutar, y el elemento por el que esperaremos el cambio)
    useEffect(cargarDatos, [keyword, keywordToUse]);

    return {loading, movies};
}

export default useMovies
