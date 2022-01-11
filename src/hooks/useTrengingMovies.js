import { useEffect, useState } from 'react'
import getTrendingMovie from 'services/getTrendingMovie';

const useTrengingMovies = (id) => {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        getTrendingMovie().then(movie =>{
            setTrending(movie);
        })
    }, []);

    return {trending};
}

export default useTrengingMovies;