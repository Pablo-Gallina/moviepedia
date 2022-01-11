import React, { useEffect, useState } from 'react'
import getMoviesSearch from '../services/getMoviesSearch';

const useMovies = ({ keyword } = { keyword : null }) => {
    const [movies, setMovies] = useState([]);
    // pantalla de cargando
    const [loading, setLoading] = useState(true);

    // funcion del useEffect
    const cargarDatos = ()=>{
        setLoading(true);
        getMoviesSearch({ keyword }).then( movie => {
            setMovies(movie)
            setLoading(false);
        })
    }
    // Se ejecuta cada vez que se renderiza el componente
    // Efecto recibe 2 parametros (funcion a ejecutar, y el elemento por el que esperaremos el cambio)
    useEffect(cargarDatos, [keyword])

    return {loading, movies};
}

export default useMovies
