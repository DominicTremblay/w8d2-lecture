import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import './SuperheroPage.scss';

export default function SuperheroPage({ superheros }) {

  
  // extract the urlParameter with useParams
  const {id} = useParams();



  // find the superhero with the corresponding id
  const superhero = superheros.find(hero => hero.id === id);
  
  // if you want to destructure superhero
  // const {id, image, name, powerstats} = superhero;
  
  return (
    <>
      {superhero && (
        <div>
          <h1>{superhero.name}</h1>

          <div className="hero-details">
            <div className="avatar-image">
              <img src={superhero.image.url} alt={superhero.name} />
            </div>
            <div className="description">
              <h2>Power Stats</h2>

              <ul className='powerstats'>
                <li>Combat: {superhero.powerstats.combat}</li>
                <li>Intelligence: {superhero.powerstats.intelligence}</li>
                <li>Strength: {superhero.powerstats.strength}</li>
                <li>speed: {superhero.powerstats.speed}</li>
                <li>Durability:{superhero.powerstats.durability}</li>
                <li>Power: {superhero.powerstats.power}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
