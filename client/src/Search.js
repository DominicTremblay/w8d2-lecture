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

  // Extract and parse query string (useLocation, queryString.parse )
  const { search } = useLocation();

  const { name } = queryString.parse(search);

  const handleSubmit = (event) => {
    event.preventDefault();

    // push to history the query string
    // another way to do a redirect
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
