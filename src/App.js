import { useEffect, useState } from "react";
import getMovies from "./services/getMovies";

const App = () => {
  const [movies, setMovies] = useState([]);

  // funcion del useEffect
  const cargarDatos = ()=>{
    getMovies().then( movie => setMovies(movie))
  }
  // Se ejecuta cada vez que se renderiza el componente
  // Efecto recibe 2 parametros (funcion a ejecutar, y el elemento por el que esperaremos el cambio)
  useEffect(cargarDatos, [])

  return ( 
    <div>
      <section>
        { movies.map( singleMovie => 
          <div key={ singleMovie.id }>
            <h4>{ singleMovie.title }</h4>
            <p>{ singleMovie.id }</p>
            <img src={`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`} alt="img" width="20%"/>
            <h5> { singleMovie.release_date } </h5>
          </div>
        ) }
      </section>
    </div>
  );
}

export default App

