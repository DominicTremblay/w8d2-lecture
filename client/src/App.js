import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Superheros from './pages/Superheros';
import Search from './pages/Search';
import Login from './pages/Login';
import useSuperheros from './hooks/useSuperheros';

function App() {

  const { state, dispatch } = useSuperheros();

  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Superheros /> */}
      {/* <Search /> */}

      {/* <Login /> */}
    </div>
  );
}

export default App;
