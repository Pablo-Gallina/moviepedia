const apiKey = 'd1995f9cb803e3952498564c2eee810a'

export default function getMoviesSearch ({ keyword = 'top_rated' } = {}) {
    const apiURL = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&language=es-ES&query=${keyword}&page=1&include_adult=false`;
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
