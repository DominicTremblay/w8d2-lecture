import React, { useState, useEffect } from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import './Search.scss';
import SearchResult from './SearchResult';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');
  // history
  const history = useHistory();
  const { path } = useRouteMatch();

  // ?name=batman
  const {search} = useLocation();


  // Extract and parse query string (useLocation, queryString.parse )

  const {name} = queryString.parse(search); // => the string 'batman'

  const handleSubmit = (event) => {
    event.preventDefault();

    // push to history the query string
    history.push(`${path}?name=${searchContent}`);
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
