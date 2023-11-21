import React from 'react';

function SuperheroItem({id, name, image}) {
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

export default SuperheroItem;
