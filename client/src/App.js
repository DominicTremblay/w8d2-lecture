import Home from './pages/Home';
import Navbar from './components/Navbar';

import Superheroes from './pages/Superheroes';
import SuperheroStats from './pages/Superheroes/SuperheroStats';
import Search from './pages/Search';
import Login from './pages/Login';
import './App.css';
import DispatchContext from './context/DispatchContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useSuperheros from './hooks/useSuperheros';
import StateContext from './context/StateContext';

function App() {
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/superheroes" element={<Superheroes />} />
              <Route
                path="/superheroes/:id"
                element={<SuperheroStats superheroes={state.superheros} />}
              />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
