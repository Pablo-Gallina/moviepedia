import MovieCard from "./Card/MovieCard";

const ListOfMovies = ({movies}) => {
    

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
