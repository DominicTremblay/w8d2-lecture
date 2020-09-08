import React from 'react';
import './SuperheroStat.scss';

function Superhero(props) {
  return (
    <>
      <div>
        <h1>Superhero Name</h1>

        <div className="hero-details">
          <div className="avatar-image">
            <img src='' alt='' /> 
          </div>
          <div className="description">
            <h2>Power Stats</h2>

            <ul className="powerstats">
              <li>Combat: </li>
              <li>Intelligence:</li>
              <li>Strength:</li>
              <li>speed:</li>
              <li>Durability:</li>
              <li>Power:</li>
            </ul>
          </div>
        </div>
      </div>
  </>
  );
}

export default Superhero;