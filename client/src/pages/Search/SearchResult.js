import React, {useContext} from 'react';
import useSearch from '../../hooks/useSearch';
import { ADD_SUPERHERO } from '../../reducers/dataReducer';
import DispatchContext from '../../context/DispatchContext';

function SearchResult({ name }) {
  const { heroDetails, loading, error } = useSearch(name);

  console.log('heroDetails:', heroDetails?.results);

  const dispatch = useContext(DispatchContext)

  return (
    <div>
      <h3>Search for: {name}</h3>
      {/* output loading if loading */}

      {loading && <h2>Loading...</h2>}

      {error && <h2>Error displaying superhero</h2>}

      {/* ouput herosDetails.results if herosDetails */}

      {!loading && heroDetails && (
        <div className="search-result">
          <ul>
            {/* list the superhero names */}
            {heroDetails &&
              heroDetails.results.map((hero) => (
                <li key={hero.id}>
                  {hero.name}{' '}
                  <button
                    onClick={(event) =>
                      dispatch({ type: ADD_SUPERHERO, superhero: hero })
                    }
                  >
                    Add
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
