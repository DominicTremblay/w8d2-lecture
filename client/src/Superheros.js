import React, { useContext, useState } from 'react';
import Superhero from './Superhero';
import './Superheros.scss';
import StateContext from './context/StateContext';

export default function Superheros() {

  const state = useContext(StateContext);

  const superheroList = state.superheros.map((hero) => (
    <Superhero key={hero.id} id={hero.id} name={hero.name} image={hero.image} />
  ));

  return (
    <>
      <h1>Superheros</h1>

      {state.loading && <h2>Loading...</h2>}
      {!state.loading && <ul className="superheros">{superheroList}</ul>}
    </>
  );
}
