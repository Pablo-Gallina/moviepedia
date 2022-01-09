const apiKey = 'd1995f9cb803e3952498564c2eee810a'

export default function getMovies ({ keywords = 'top_rated' } = {}) {
    const apiURL = `https://api.themoviedb.org/3/movie/${keywords}?api_key=${apiKey}&language=es-ES&page=1`;
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
