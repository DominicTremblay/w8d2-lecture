import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Superheros from './pages/Superheros';
import SuperheroStats from './pages/Superheros/SuperheroStats';
import Search from './pages/Search';
import Login from './pages/Login';
import './App.css';
import useSuperheros from './hooks/useSuperheros';

function App() {
  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/superheros"
            element={
              <Superheros
                superheros={state.superheros}
                loading={state.loading}
              />
            }
          />
          <Route
            path="/superheros/:id"
            element={<SuperheroStats superheros={state.superheros} />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
