const apiKey = 'd1995f9cb803e3952498564c2eee810a'

export default function getMovieDetail (id) {
    const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then(response=>{
            // Desestrucutrar la data
            const { backdrop_path, genres, overview, poster_path, production_companies, tagline, title, vote_average  } = response;
            return { backdrop_path, genres, overview, poster_path, production_companies, tagline, title, vote_average  };
        })
}
