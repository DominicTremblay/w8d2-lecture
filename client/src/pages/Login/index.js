import React from 'react';

function Login(props) {
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

export default Login;
