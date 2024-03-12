import React, { useContext } from 'react';

import './Superheros.scss';
import SuperheroItem from './SuperheroItem';
import StateContext from '../../context/StateContext';

function Superheros() {
  const { loading, superheros } = useContext(StateContext);

  const superheroList = superheros?.map(({ id, name, image }) => (
    <SuperheroItem key={id} id={id} name={name} image={image} />
  ));

  return (
    <>
      <h1>Superheros</h1>

      {loading && <h2>Loading...</h2>}
      {!loading && <ul className="superheros">{superheroList}</ul>}
    </>
  );
}

export default Superheros;
