import { Link, Route } from "wouter";

import ListOfMovies from "./components/ListOfMovies";

const App = () => {
  return ( 
    <div>
      <section>
        <Link to="/movies/top_rated">
          Top Peliculas
        </Link> <br/>
        <Link to="/movies/popular">
          Popular
        </Link> <br/>
        <Link to="/movies/upcoming">
          Estrenos 2022
        </Link>

        <Route 
          component={ListOfMovies}
          path="/movies/:keyword"
        />
      </section>
    </div>
  );
}

export default App

