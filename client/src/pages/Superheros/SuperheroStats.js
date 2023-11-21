import React from 'react';
import { useParams } from 'react-router-dom';
import './SuperheroStat.scss';

function Superhero({ superheros }) {
  const { id } = useParams();

  const superhero = superheros.find((hero) => hero.id === id);

  const {
    name,
    image: { url },
    powerstats: { combat, durability, intelligence, power, speed, strength },
  } = superhero ?? {};

  return (
    <>
      <div>
        <h1>Superhero: {name}</h1>

        {superhero && (
          <div className="hero-details">
            <div className="avatar-image">
              <img src={url} alt={name} />
            </div>
            <div className="description">
              <h2>Power Stats</h2>

              <ul className="powerstats">
                <li>Combat: {combat}</li>
                <li>Intelligence: {intelligence}</li>
                <li>Strength: {strength}</li>
                <li>speed: {speed}</li>
                <li>Durability: {durability}</li>
                <li>Power: {power}</li>
              </ul>
            </div>
          </div>
        )}

        {!superhero && <h2>Superhero not found</h2>}
      </div>
    </>
  );
}

export default Superhero;
