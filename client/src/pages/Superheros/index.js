import React from 'react';

import './Superheros.scss';
import Superhero from './SuperheroStats';

function Superheros(props) {

  const superheroList = [<Superhero />];


  return (
    <>
    <h1>Superheros</h1>

    <h2>Loading...</h2>
    <ul className="superheros">{superheroList}</ul>
    

  </>
  );
}

export default Superheros;