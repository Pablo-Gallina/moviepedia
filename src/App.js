import { useState } from "react";
import ListOfMovies from "./components/ListOfMovies";

const App = () => {
  const [keyword, setKeyword] = useState('top_rated')
  return ( 
    <div>
      <section>
        <ListOfMovies keywords={keyword}/>
        <button onClick={()=> setKeyword('popular')}>Cambiar keyword</button>
      </section>
    </div>
  );
}

export default App

