import React from 'react';

import './Superheros.scss';
import SuperheroItem from './SuperheroItem';

function Superheros({superheros, loading}) {

  const superheroList = superheros.map(({id, name, image}) => <SuperheroItem key={id} id={id} name={name} image={image} />);


  return (
    <>
    <h1>Superheros</h1>

    {loading && <h2>Loading...</h2>}

    {!loading && <ul className="superheros">{superheroList}</ul>}
    

  </>
  );
}

export default Superheros;