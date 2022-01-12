import { API_KEY, API_URL} from "./settings";

export default function getMoviesSearch ({ keyword = 'random', page = 1 } = {}) {
    const apiURL = `${API_URL}/search/movie/?api_key=${API_KEY}&language=es-ES&query=${keyword}&page=${page}&include_adult=false`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then(response=>{
          // Desestrucutrar la data
          const { results = [] } = response;

          //Recorrer la data para traer solo ciertos campos
          const allMovies = results.map(data => {
            const { id, title, release_date, poster_path, overview } = data;
            return { id, title, release_date, poster_path, overview };
          });
          // console.log(allMovies);
          return allMovies;
        })
}
