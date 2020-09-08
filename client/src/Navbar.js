import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
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
