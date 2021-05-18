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
import PrivateRoute from './PrivateRoute';

function App() {
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <Router>
        <DispatchContext.Provider value={dispatch}>
          <StateContext.Provider value={state}>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <PrivateRoute exact path="/superheros">
                <Superheros />
              </PrivateRoute>

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
                <h2>404 - Not Found</h2>
              </Route>
            </Switch>
          </StateContext.Provider>
        </DispatchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
