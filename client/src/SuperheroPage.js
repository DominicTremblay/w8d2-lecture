import React from 'react';
import { useParams } from 'react-router-dom';
import './SuperheroPage.scss';

export default function SuperheroPage() {
  // extract the urlParameter with useParams

  // find the superhero with the corresponding id

  return (
    <>
      {'superhero' && (
        <div>
          <h1>name</h1>

          <div className="hero-details">
            <div className="avatar-image">{/* image */}</div>
            <div className="description">
              <h2>Power Stats</h2>

              <ul className="powerstats">
                <li>Combat: </li>
                <li>Intelligence: </li>
                <li>Strength: </li>
                <li>speed: </li>
                <li>Durability:</li>
                <li>Power: </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
