import React, { useState, useEffect } from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import SearchResult from './SearchResult';
import './Search.scss';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');


  // extract the current path
  const {path} = useRouteMatch();

  // Browser History
  const history = useHistory();

  // Extract and parse query string (useLocation, queryString.parse )
  // install query-string

  // extracting the query string => ?name=batman
  const {search} = useLocation();

  // extract the value out of the query string => batman
  const {name} = queryString.parse(search);



  const handleSubmit = (event) => {
    event.preventDefault();
    // implement a redirect
    // push to history the query string
    // adding a new url to history, redirecting the browser to that path: `/search?name=batman`

    history.push(`${path}?name=${searchContent}`)

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
