import { useEffect, useState } from 'react'
import getMovieDetail from '../services/getMovieDetail';

const useDetailMovie = (id) => {
    const [movies, setMovies] = useState([]);
    // pantalla de cargando
    const [loading, setLoading] = useState(true);

    // recuperar la keyword del localStorage

    // funcion del useEffect
    const cargarDatos = ()=>{
        setLoading(true);
        getMovieDetail(id).then( movie => {
            setMovies(movie)
            setLoading(false);
        })
    }
    // Se ejecuta cada vez que se renderiza el componente
    // Efecto recibe 2 parametros (funcion a ejecutar, y el elemento por el que esperaremos el cambio)
    useEffect(cargarDatos, [id]);

    return {loading, movies};
}

export default useDetailMovie;