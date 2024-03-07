import React, { useContext } from 'react';

import './Superheroes.scss';
import SuperheroItem from './SuperheroItem';
import StateContext from '../../context/StateContext';

function Superheros() {

  const {superheros, loading} = useContext(StateContext)


  const superheroList = superheros?.map(({ id, name, image }) => (
    <SuperheroItem key={id} id={id} name={name} image={image} />
  ));

  return (
    <>
      <h1>Superheroes</h1>

      {loading && <h2>Loading...</h2>}
      {!loading && superheros && (
        <ul className="superheros">{superheroList}</ul>
      )}
    </>
  );
}

export default Superheros;
