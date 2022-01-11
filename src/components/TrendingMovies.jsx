import useTrengingMovies from 'hooks/useTrengingMovies';
import React from 'react'
import { Link } from "wouter";

const TrendingMovies = () => {
    const {trending} = useTrengingMovies();
    
    return (
        <>
            { 
                trending.map( ({title, id}) => <div key={id}>
                    <Link to={`/movie/${id}`}>
                        {title}
                    </Link> <br/>
                </div> )
            }
        </>
    )
}

export default TrendingMovies
