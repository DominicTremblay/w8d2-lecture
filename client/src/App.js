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
import DispatchContext from './context/DispatchContext';
import StateContext from './context/StateContext';

function App() {
  // dispatch => update fct to update the state (reducer)
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/superheros">
                <Superheros />
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
                <h2>404 - Not Found!</h2>
              </Route>
            </Switch>
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
