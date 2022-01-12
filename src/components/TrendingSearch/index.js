import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen';
import Spinner from 'components/Spinner/Spinner';

// usando React Lazy, se cargara el componente TrendingSearches, cuando lo necesitamos, "Cargar solo lo que el usuario necesita"
const TrendingSearches = React.lazy( ()=> import('./TrendingSearches'));

export default function LazyTrending () {
    
    const {isNearScreen, fromRef } = useNearScreen();

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}    
        </Suspense>
    </div>

}