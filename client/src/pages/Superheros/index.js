import React from 'react';

import './Superheros.scss';
import SuperheroItem from './SuperheroItem';

function Superheros({ superheros, loading }) {
  const superheroList =
    superheros &&
    superheros.map(({ id, image: {url}, name }) => (
      <SuperheroItem key={id} id={id} url={url} name={name} />
    ));

  return (
    <>
      <h1>Superheros</h1>

      {loading && <h2>Loading...</h2>}
      {!loading && superheros && (
        <ul className="superheros">{superheroList}</ul>
      )}
    </>
  );
}

export default Superheros;
