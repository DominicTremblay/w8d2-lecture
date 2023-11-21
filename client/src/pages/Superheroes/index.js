import React from 'react';

import './Superheroes.scss';
import Superhero from './SuperheroStats';

function Superheros(props) {

  const superheroList = [<Superhero />];


  return (
    <>
    <h1>Superheroes</h1>

    <h2>Loading...</h2>
    <ul className="superheros">{superheroList}</ul>
    

  </>
  );
}

export default Superheros;