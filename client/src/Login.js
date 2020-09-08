import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Login() {
  // Grab the history


  // Grab the state of the location
  // from retain the path it originated from

  return (
    <>
      <h1>Please Login</h1>

      <form>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />

        <input type="submit" value="Login" />
      </form>
    </>
  );
}
