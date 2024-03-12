import Home from './pages/Home';
import Navbar from './components/Navbar';
import Superheros from './pages/Superheros';
import Search from './pages/Search';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import useSuperheros from './hooks/useSuperheros';
import SuperheroStats from './pages/Superheros/SuperheroStats';
import DispatchContext from './context/DispatchContext';
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
            <Route
              path="/superheroes"
              element={
                <Superheros />
              }
            />
            <Route
              path="/superheroes/:id"
              element={<SuperheroStats superheroes={state.superheros} />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>404 - Not found</h3>} />
          </Routes>
        </Router>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
