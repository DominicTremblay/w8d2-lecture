import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SuperheroItem({ id, url, name }) {
  const { pathname } = useLocation();

  return (
    <>
      {/* adding images and links on the name */}
      {/* link to an url parameter on the id */}
      <li>
        <Link to={`${pathname}/${id}`}>
          <img src={url} alt={name} />
        </Link>
        <Link to={`${pathname}/${id}`}>{name}</Link>
      </li>
    </>
  );
}

export default SuperheroItem;
