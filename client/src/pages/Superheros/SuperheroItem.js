import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SuperheroItem({ id, name, image }) {
  const { pathname } = useLocation();

  return (
    <>
      {/* adding images and links on the name */}
      {/* link to an url parameter on the id */}
      <li>
        <Link to={`${pathname}/${id}`}>
          <img src={image.url} alt={name} />
        </Link>{' '}
        <Link to={`${pathname}/${id}`}>{name}</Link>
      </li>
    </>
  );
}

export default SuperheroItem;
