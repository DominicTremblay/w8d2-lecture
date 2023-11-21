import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Search.scss';
import SearchResult from './SearchResult';

function Search(props) {
  const [searchContent, setSearchContent] = useState('');

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // name=Kool-aid
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');

  const handleSubmit = (event) => {
    event.preventDefault();

    // build the query string
    // currentPath?name=searchContent
    const url = `${pathname}?name=${searchContent}`;

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

      {name && <SearchResult name={name} />}
    </>
  );
}

export default Search;
