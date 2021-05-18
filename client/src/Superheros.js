import React, { useState, useContext } from 'react';
import StateContext from './context/StateContext';
import Superhero from './Superhero';
import './Superheros.scss';

export default function Superheros() {

  const state = useContext(StateContext);

  const herosList = state.superheros.map((hero) => (
    <Superhero key={hero.id} {...hero} />
  ));

  return (
    <>
      <h1>Superheros</h1>

      {state.loading && <h2>Loading...</h2>}

      {!state.loading && <ul className="superheros">{herosList}</ul>}
    </>
  );
}
