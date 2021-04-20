import React, { useContext, useState } from 'react';
import Superhero from './Superhero';
import './Superheros.scss';
import StateContext from './context/StateContext';

export default function Superheros() {


  const state = useContext(StateContext);

  const superheroList = state.superheros.map((hero) => (
    <Superhero key={hero.id} {...hero} />
  ));

  return (
    <>
      <h1>Superheros</h1>
      <ul className="superheros">
        {state.loading && <h1>Loading...</h1>}
        {!state.loading && superheroList}
      </ul>
    </>
  );
}
