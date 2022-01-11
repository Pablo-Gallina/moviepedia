import { useEffect, useRef, useState } from 'react'

// Cargar el js cuando lo necesitemos (suspense, lazy)
const useNearScreen = (distance = '100px') => {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        const onObserver = (entries) => {
            const el = entries[0];
            // Si el elemento esta en interseccion
            if (el.isIntersecting) {
                setIsNearScreen(true); //Mostrar las trending movies
                observer.disconnect(); //Deconectar el observer, para que no este actualizando cada vez su estado
            }
        }
        //cuando el elemento este a 100px ya hay interseccion con el elemento y entonces se ejecutara el callback onObserver
        const observer = new IntersectionObserver(onObserver, {
            rootMargin: distance
        });

        observer.observe(fromRef.current); // Observar el elemento lazyTrending, en su valor actual (current)

        return () => observer.disconnect(); //Deconectar el observer en el Effect, para evitar que no este actualizando cada vez su estado
    })

    return {isNearScreen, fromRef};
}

export default useNearScreen
