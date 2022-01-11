import MovieCard from "../Card/MovieCard";

import './ListOfMovies';

const ListOfMovies = ({movies}) => {
    
    return (
        <div className="movies">
          {
            movies.map( ({ id, title, poster_path, release_date }) => 
              <MovieCard 
                key={id}
                id={id} 
                title={title} 
                poster_path={poster_path} 
                release_date={release_date} 
              />
            )
          }
        </div>
    )
}

export default ListOfMovies
