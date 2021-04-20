import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import useSuperheros from './hooks/useSuperheros';
import Superheros from './Superheros';
import Home from './Home';
import SuperheroPage from './SuperheroPage';
import Login from './Login';
import StateContext from './context/StateContext';
import DispatchContext from './context/DispatchContext';
import PrivateRoute from './PrivateRoute';

function App() {
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

              <PrivateRoute exact path="/superheros">
                {/* <Superheros superheros={state.superheros} loading={state.loading} /> */}
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
                <h1>404 - Not Found</h1>
              </Route>
            </Switch>
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
