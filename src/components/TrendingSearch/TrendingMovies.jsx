import React from 'react'
import { Link } from "wouter";

import useNearScreen from 'hooks/useNearScreen';
import useTrengingMovies from 'hooks/useTrengingMovies';

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

export default function LazyTrending () {
    
    const {isNearScreen, fromRef } = useNearScreen();

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingMovies /> : null}
    </div>

}