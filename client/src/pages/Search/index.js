import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Search.scss';
import SearchResult from './SearchResult';

function Search() {
  const [searchContent, setSearchContent] = useState('');



  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name')


  const handleSubmit = (event) => {
    event.preventDefault();

    // http://localhost:3000/search?name=Kool-aid

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

      <SearchResult name={name}/>
    </>
  );
}

export default Search;
