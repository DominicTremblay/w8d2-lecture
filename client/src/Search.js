import React, { useState, useEffect } from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import SearchResult from './SearchResult';
import './Search.scss';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');


  // history
  // allows to redirect to another path
  const history = useHistory();

  // extract the current path => /search
  const {path} = useRouteMatch();

  // Extract and parse query string (useLocation, queryString.parse )
  // install query-string

  const {search} = useLocation(); // ?name=batman

  const {name} = queryString.parse(search); // 'batman'




  const handleSubmit = (event) => {
    event.preventDefault();

    // push to history the query string
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
