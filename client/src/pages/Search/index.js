import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './Search.scss';
import SearchResult from './SearchResult';

function Search() {
  const [searchContent, setSearchContent] = useState('');
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const url = `${pathname}?name=${searchContent}`;
    navigate(url);
  }


  return (
    <>
      <form onSumbit={handleSubmit}>
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
