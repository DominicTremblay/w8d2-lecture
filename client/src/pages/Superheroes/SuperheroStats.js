import React from 'react';
import './SuperheroStat.scss';
import { useParams } from 'react-router-dom';

function Superhero({superheroes}) {

// extract the id from the url

const {id} = useParams();

// find the the superhero with the id from the array
const superhero = superheroes?.find(hero=> hero.id === id);


  return (
    <>
      <div>
        <h1>{superhero?.name}</h1>

        <div className="hero-details">
          <div className="avatar-image">
            <img src={superhero?.image?.url} alt={superhero?.name} /> 
          </div>
          <div className="description">
            <h2>Power Stats</h2>

            <ul className="powerstats">
              <li>Combat: {superhero?.powerstats?.combat}</li>
              <li>Intelligence: {superhero?.powerstats?.intelligence}</li>
              <li>Strength: {superhero?.powerstats?.strength}</li>
              <li>speed:{superhero?.powerstats?.speed}</li>
              <li>Durability: {superhero?.powerstats?.durability}</li>
              <li>Power: {superhero?.powerstats?.power}</li>
            </ul>
          </div>
        </div>
      </div>
  </>
  );
}

export default Superhero;