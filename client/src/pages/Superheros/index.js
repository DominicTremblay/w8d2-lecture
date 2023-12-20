import React, { useContext } from 'react';

import './Superheros.scss';
import SuperheroItem from './SuperheroItem';
import StateContext from '../../context/StateContext';

function Superheros() {

  const state = useContext(StateContext)


  const superheroList =
    state.superheros &&
    state.superheros.map(({ id, image: {url}, name }) => (
      <SuperheroItem key={id} id={id} url={url} name={name} />
    ));

  return (
    <>
      <h1>Superheros</h1>

      {state.loading && <h2>Loading...</h2>}
      {!state.loading && state.superheros && (
        <ul className="superheros">{superheroList}</ul>
      )}
    </>
  );
}

export default Superheros;
