import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Superhero({ id, image, name }) {
  // extract the current path

  return (
    <>
      {/* adding images and links on the name */}
      {/* link to an url parameter on the id */}
      <li>
        <img src={image.url} alt={name} /> {name}
      </li>
    </>
  );
}
