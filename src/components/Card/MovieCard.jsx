import { Link, useLocation } from "wouter";

const MovieCard = ({ id, title, poster_path, release_date }) => {
    return (
        <div>
            <h4>{ title }</h4>
            <p>{ id }</p>
            
            <img loading="lazy" src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}`: ''} alt="img" width="20%"/>
            <h5> { release_date } </h5>
            <Link to={`/movie/${id}`}>
                Ver mas
            </Link>
            
        </div>
    )
}

export default MovieCard
