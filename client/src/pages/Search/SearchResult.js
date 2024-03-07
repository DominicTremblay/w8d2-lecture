import React, { useContext } from 'react';
import useSearch from '../../hooks/useSearch';
import { useLocation } from 'react-router-dom';
import { ADD_SUPERHERO } from '../../reducers/dataReducer';
import DispatchContext from '../../context/DispatchContext';

function SearchResult() {
  const { search } = useLocation();
  const dispatch = useContext(DispatchContext);

  // use the JS API to extract the search params
  const seachParams = new URLSearchParams(search);
  const name = seachParams.get('name');

  // using the useSearch custom hook to get the search results
  const { heroDetails, loading, error } = useSearch(name);

  return (
    <div>

      {error && <h3>{error}</h3>}

      {name && !error && <h3>Search for: {name}</h3>}
      {/* output loading if loading */}

      {loading && <h2>Loading...</h2>}

      {/* ouput herosDetails.results if herosDetails */}

      <div className="search-result">
        <ul>
          {/* list the superhero names */}
          {heroDetails?.results?.map((hero) => (
            <li key={hero.id}>{hero.name} <button onClick={e => dispatch({type: ADD_SUPERHERO, superhero: hero})}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
