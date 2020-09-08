import React, { useState, useEffect } from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import './Search.scss';
import SearchResult from './SearchResult';

export default function Search() {
  const [searchContent, setSearchContent] = useState('');
    // history

  // Extract and parse query string (useLocation, queryString.parse )
  
  const handleSubmit = (event) => {

    event.preventDefault();

    // push to history the query string

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

      {/* {name && <SearchResult name={name} />} */}
    </>
  );
}
