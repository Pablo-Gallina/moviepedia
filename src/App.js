import { Route } from "wouter";

import Detail from "./pages/Detail/index";
import SearchResults from "./pages/SearchResults/Index";
import Home from "./pages/Home/index";

const App = () => {
  return ( 
    <div>
      <section>
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

