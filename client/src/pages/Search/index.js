import React, { useState } from 'react';
import './Search.scss';
import SearchResult from './SearchResult';

function Search(props) {
  const [searchContent, setSearchContent] = useState('');

  return (
    <>
      <form>
        <input
          name="name"
          type="search"
          value={searchContent}
          onChange={(event) => setSearchContent(event.target.value)}
        />

        <input type="submit" value="Search" />
      </form>

      <SearchResult />
    </>
  );
}

export default Search;
