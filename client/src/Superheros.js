import React, { useContext, useState } from 'react';
import Superhero from './Superhero';
import { Link, useRouteMatch } from 'react-router-dom';
import './Superheros.scss';
import StateContext from './context/StateContext';

export default function Superheros() {
  const { superheros, loading } = useContext(StateContext);

  // extract the current path from the url
  const { path } = useRouteMatch();

  const herosList = superheros.map((hero) => (
    <Link to={`${path}/${hero.id}`}>
      <Superhero key={hero.id} {...hero} />
    </Link>
  ));

  return (
    <>
      <h1>Superheros</h1>

      {loading && <h2>Loading superheros...</h2>}
      {!loading && <ul className="superheros">{herosList}</ul>}
    </>
  );
}
