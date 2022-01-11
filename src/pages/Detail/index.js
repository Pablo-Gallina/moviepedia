import React from 'react'
import useDetailMovie from 'hooks/useDetailMovie'

const Detail = ({ params }) => {
    const { id } = params;
    const {loading, movies} = useDetailMovie(id);
    const { backdrop_path, genres, overview, poster_path, production_companies, tagline, title, vote_average  } = movies
    return (

        <h1>
            <div>
            <h4>{ title }</h4>
            
            <img loading="lazy" src={backdrop_path ? `https://image.tmdb.org/t/p/original/${backdrop_path}`: ''} alt="img"/>
            <h5> { overview } </h5>
            <p>{vote_average}</p>
        </div>
        </h1>
    )
}

export default Detail
