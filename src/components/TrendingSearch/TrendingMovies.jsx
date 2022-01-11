import useTrengingMovies from 'hooks/useTrengingMovies';
import React, { useEffect, useRef, useState } from 'react'
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

export default function LazyTrending () {
    const [show, setShow] = useState(false);
    const lazyTrending = useRef();
    
    useEffect(() => {
        const onObserver = (entries) => {
            console.log(entries);
            const el = entries[0];
            console.log(el);
            // Si el elemento esta en interseccion
            if (el.isIntersecting) {
                setShow(true); //Mostrar las trending movies
            }
        }
        //cuando el elemento este a 100px ya hay interseccion con el elemento y entonces se ejecutara el callback onObserver
        const observer = new IntersectionObserver(onObserver, {
            rootMargin: '100px'
        });

        observer.observe(lazyTrending.current); // Observar el elemento lazyTrending, en su valor actual (current)
    }, [])

    return <div ref={lazyTrending}>
        {show ? <TrendingMovies /> : null}
    </div>

}