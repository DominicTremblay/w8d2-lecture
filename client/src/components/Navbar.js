import React from 'react';
import './Navbar.scss';

function Navbar(props) {
  return (
    <nav>
      <div>Super Hero API</div>

      <ul className="menu">
        <li>Home</li>
        <li>Superheros</li>
        <li>Search</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
