import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import useSuperheros from './hooks/useSuperheros';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';
import Login from './Login';
import DispatchContext from './contexts/DispatchContext';
import StateContext from './contexts/StateContext';

function App() {
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <DispatchContext.Provider value={dispatch}>
          <StateContext.Provider value={state}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/superheros">
              <Superheros
                // superheros={state.superheros}
                // loading={state.loading}
              />
            </Route>

            <Route path="/superheros/:id">
              <SuperheroPage superheros={state.superheros} />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <h3>404 - Not Found</h3>
            </Route>
          </Switch>
          </StateContext.Provider>
        </DispatchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
