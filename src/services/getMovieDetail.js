import { API_KEY, API_URL } from "./settings";

export default function getMovieDetail (id) {
    const apiURL = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then(response=>{
            // Desestrucutrar la data
            const { backdrop_path, genres, overview, poster_path, production_companies, tagline, title, vote_average  } = response;
            return { backdrop_path, genres, overview, poster_path, production_companies, tagline, title, vote_average  };
        })
}
