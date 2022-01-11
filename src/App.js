import { Route } from "wouter";

import Detail from "./pages/Detail/index";
import SearchResults from "./pages/SearchResults/Index";
import Home from "./pages/Home/index";

// Contexto
import StaticContext from "./context/StaticContext"

const App = () => {
  return ( 
    <StaticContext.Provider value={{
      name: 'pablo',
      estado: true
  }}>
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
          path="/movie/:keyword"
        />
      </section>
    </StaticContext.Provider>
  );
}

export default App

