import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Superhero({ id, name, image }) {

  // Extract the current path
  const {path} = useRouteMatch();


  return (
    <>
    {/* adding images and links on the name */}
      <li>
        {/* link to an url parameter on the id */}
        <Link to={`${path}/${id}`}><img src={image.url} alt={name} /></Link> <Link to={`${path}/${id}`}>{name}</Link>
      </li>
    </>
  );
}
