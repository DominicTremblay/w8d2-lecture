import React, { useContext } from 'react';

import './Superheros.scss';
import SuperheroItem from './SuperheroItem';
import StateContext from '../../context/StateContext';

function Superheros(props) {

  const state = useContext(StateContext)

  const superheroList = state.superheros.map(({id, name, image}) => (
    <SuperheroItem key={id} id={id} name={name} image={image} />
  ));

  return (
    <>
      <h1>Superheros</h1>

      {state.loading && <h2>Loading...</h2>}
      {!state.loading && <ul className="superheros">{superheroList}</ul>}
    </>
  );
}

export default Superheros;
