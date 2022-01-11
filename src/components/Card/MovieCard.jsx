const MovieCard = ({ id, title, poster_path, release_date }) => {
    return (
        <div>
            <h4>{ title }</h4>
            <p>{ id }</p>
            
            <img src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}`: ''} alt="img" width="20%"/>
            <h5> { release_date } </h5>
        </div>
    )
}

export default MovieCard
