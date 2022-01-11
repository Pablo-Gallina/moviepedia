import { API_KEY, API_URL} from "./settings";

export default function getMoviesSearch () {
    const apiURL = `${API_URL}/trending/all/day?api_key=${API_KEY}&language=es-ES&include_adult=false`;
    return fetch(apiURL)
        .then((res) => res.json())
        .then(response=>{
          // Desestrucutrar la data
          const { results = [] } = response;

          //Recorrer la data para traer solo ciertos campos
          const allMovies = results.map(data => {
            const { id, title } = data;
            return { id, title };
          });
          return allMovies;
        })
}
