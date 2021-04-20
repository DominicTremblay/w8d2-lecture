import React, {useContext} from 'react';

import useSearch from './hooks/useSearch';
import {ADD_SUPERHERO} from './reducers/dataReducer';
import DispatchContext from './context/DispatchContext';

const SearchResult = ({ name }) => {
  // using the custom hook to get the data
  const { heroDetails, loading, error } = useSearch(name);
  const dispatch = useContext(DispatchContext);
  
  return (
    <div>
      <h3>Search for: {name}</h3>

      {/* output loading if loading */}
      {loading && <h1>Loading...</h1>}

      {/* ouput herosDetails.results if herosDetails */}

      <div className="search-result">
        <ul>
          {heroDetails && heroDetails.results.map((hero) => (
            <li key={hero.id}>{hero.name} <input onClick={evt => dispatch({type: ADD_SUPERHERO, superhero: hero})} type='button' value='Add' /></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;