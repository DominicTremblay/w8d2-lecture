import React, { useState, useContext } from 'react';
import Superhero from './Superhero';
import './Superheros.scss';
import StateContext from './contexts/StateContext';

export default function Superheros({ superheros, loading }) {

  const state = useContext(StateContext);

  const superheroList = state.superheros.map((hero) => <Superhero key={hero.id}  id={hero.id} image={hero.image} name={hero.name} />)

  return (
    <>
      <h1>Superheros</h1>

      {state.loading && <h3>Loading...</h3>}

      {!state.loading && <ul className="superheros">

        {superheroList};


      </ul>}
    </>
  );
}
