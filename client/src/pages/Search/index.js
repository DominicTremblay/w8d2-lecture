import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Search.scss';
import SearchResult from './SearchResult';

function Search({dispatch}) {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [searchContent, setSearchContent] = useState('');
  
  // Extracting the query params
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');

  const handleSubmit = (event) => {
    event.preventDefault();

    // build query string
    const url = `${pathname}?name=${searchContent}`;

    // reset the form
    setSearchContent('');

    // implement a redirect
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

      {name && <SearchResult name={name} dispatch={dispatch} />}
    </>
  );
}

export default Search;
