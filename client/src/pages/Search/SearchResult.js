import React from 'react';
import { useLocation } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import { ADD_SUPERHERO } from '../../reducers/dataReducer';
import { useContext } from 'react';
import DispatchContext from '../../context/DispatchContext';

function SearchResult() {
  // extract the seach query > name

  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');

  // do a request to get the search results
  const { heroDetails, loading, error } = useSearch(name);

  // get dispatch from context

  const dispatch = useContext(DispatchContext);

  return (
    <div>
      {name && <h3>Search for: {name}</h3>}
      {/* output loading if loading */}

      {loading && name && <h2>Searching...</h2>}

      {/* ouput herosDetails.results if herosDetails */}

      <div className="search-result">
        <ul>
          {/* list the superhero names */}
          {heroDetails?.results?.map((hero) => (
            <li key={hero.id}>{hero.name} <button onClick={() => dispatch({type: ADD_SUPERHERO, superhero: hero})}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
