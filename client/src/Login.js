import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Login() {
  const { state } = useLocation();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('token', 123);
    console.log("state.from", state.from)
    history.push((state && state.from) || '/');
  };

  return (
    <>
      <h1>Please Login</h1>

      <form onSubmit={handleSubmit}>
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
