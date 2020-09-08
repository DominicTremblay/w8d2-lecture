import React from 'react';
import useSearch from './hooks/useSearch';

const SearchResult = ({ name }) => {
  // using the custom hook to get the data
  const { heroDetails, loading, error } = useSearch(name);

  return (
    <div>
      <h3>Search for: name</h3>
      {/* output loading if loading */}
      {/* ouput herosDetails.results if herosDetails */}
      <div className="search-result">
        <ul></ul>
      </div>
    </div>
  );
};

export default SearchResult;
