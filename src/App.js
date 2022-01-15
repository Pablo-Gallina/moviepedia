import { Route } from "wouter";

import Detail from "pages/Detail/index";
import SearchResults from "pages/SearchResults/Index";
import Home from "pages/Home/index";
import Navbar from "components/Navbar/Navbar";

const App = () => {
  return ( 
    <div>
      <Navbar/>
      <section className="px">
        <Route 
          component={Home}
          path="/"
        />

        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />
    
        <Route 
          component={Detail}
          path="/movie/:id"
        />
      </section>
    </div>
  );
}

export default App

