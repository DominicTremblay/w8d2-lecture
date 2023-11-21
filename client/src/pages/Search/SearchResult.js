import React, { useContext } from 'react';
import useSearch from '../../hooks/useSearch';
import { ADD_SUPERHERO } from '../../reducers/dataReducer';
import DispatchContext from '../../context/DispatchContext';

function SearchResult({ name }) {
  const { heroDetails, loading, error } = useSearch(name);

  const dispatch = useContext(DispatchContext);

  const herosList = heroDetails?.results?.map((superhero) => <li key={superhero.id}>{superhero.name} <button onClick={event => dispatch({type: ADD_SUPERHERO, superhero})}>Add</button></li>);

  return (
    <div>
      <h3>Search for: {name}</h3>
      {/* output loading if loading */}

      {error && <h2>{error}</h2>}

      {loading && <h2>Loading...</h2>}

      {/* ouput herosDetails.results if herosDetails */}

      {heroDetails && (
        <div className="search-result">
          <ul>
            {/* list the superhero names */}
            {herosList}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
