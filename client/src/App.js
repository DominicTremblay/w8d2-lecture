import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Superheros from './pages/Superheros';
import SuperheroStats from './pages/Superheros/SuperheroStats';
import Search from './pages/Search';
import Login from './pages/Login';
import useSuperheros from './hooks/useSuperheros';
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
                path="/superheros"
                element={
                  <Superheros />
                }
              />
              <Route
                path="/superheros/:id"
                element={<SuperheroStats superheros={state.superheros} />}
              />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
          </Router>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
