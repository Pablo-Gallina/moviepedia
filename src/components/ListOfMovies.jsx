import { useEffect, useState } from "react";

import getMovies from '../services/getMovies';
import MovieCard from "./Card/MovieCard";

const ListOfMovies = ({ params }) => {
    const { keyword } = params;
    const [movies, setMovies] = useState([]);
    // pantalla de cargando
    const [loading, setLoading] = useState(true);

    // funcion del useEffect
    const cargarDatos = ()=>{
        setLoading(true);
        getMovies({ keyword }).then( movie => {
            setMovies(movie)
            setLoading(false);
        })
    }
    // Se ejecuta cada vez que se renderiza el componente
    // Efecto recibe 2 parametros (funcion a ejecutar, y el elemento por el que esperaremos el cambio)
    useEffect(cargarDatos, [keyword])

    // Si esta cargando, mostrar el componente de cargar
    if (loading) return <h1>Cargando...</h1> 

    return (
        movies.map( ({ id, title, poster_path, release_date }) => 
          <MovieCard 
            key={id}
            id={id} 
            title={title} 
            poster_path={poster_path} 
            release_date={release_date} 
          />
        )
    )
}

export default ListOfMovies
