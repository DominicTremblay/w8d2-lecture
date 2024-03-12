import React, { useState } from 'react';
import './Search.scss';
import SearchResult from './SearchResult';
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
  const [searchContent, setSearchContent] = useState('');

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // build the url /search?name=Batman
    const url = `${pathname}?name=${searchContent}`;

    // redirect to url
    navigate(url);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
