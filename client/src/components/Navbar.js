import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

function Navbar(props) {
  return (
    <nav>
      <div>Super Hero API</div>

      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/superheros'>Superheros</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
