import React from 'react'
import { Link } from "wouter";
import useTrengingMovies from 'hooks/useTrengingMovies';


const TrendingSearches = () => {
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

export default TrendingSearches
