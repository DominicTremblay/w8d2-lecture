import React, { useContext } from 'react';
import useSearch from './hooks/useSearch';
import { ADD_SUPERHERO } from './reducers/dataReducer';
import DispatchContext from './context/DispatchContext';

const SearchResult = ({ name }) => {
  // using the custom hook to get the data
  const { heroDetails, loading, error } = useSearch(name);

  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <h3>Search for: name</h3>
      {/* output loading if loading */}
      {loading && <h2>Searching ...</h2>}
      {heroDetails && (
        <div className="search-result">
          <ul>
            {heroDetails.results.map((hero) => (
              <li key={hero.id}>
                {hero.name}{' '}
                <input
                  type="button"
                  value="Add"
                  onClick={() =>
                    dispatch({ type: ADD_SUPERHERO, superhero: hero })
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
