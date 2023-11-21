
# Setup

## Update to React Router V6

React Router V6 introduced several changes and improvements over V5:

1. **`Switch` Replaced With `Routes`**: In V6, the `Switch` component is replaced by `Routes`. This means where you previously wrapped your route definitions with `Switch`, you now use `Routes`【8†source】.

2. **Changes in Route Definition**: Instead of defining the component to be rendered as children of the `Route` component, V6 uses an `element` prop where you pass the component as a JSX element【8†source】.

3. **`exact` Prop Removed**: The `exact` prop is no longer necessary due to improved path matching algorithms, making route matching more intuitive and flexible【8†source】.

4. **No Separate `react-router-config`**: The functionalities of `react-router-config` are included in the core of React Router V6, removing the need for separate installation【9†source】.

5. **`useHistory` Replaced by `useNavigate`**: The `useNavigate` API replaces `useHistory`, providing navigation functionality【10†source】.

6. **`activeStyle` and `activeClassName` Removed**: These props are removed from `<NavLink />`. Instead, `className` and `style` props now accept a function that provides information about the link's active state【11†source】.

7. **Replace `Redirect` with `Navigate`**: The `Redirect` component is removed. The `Navigate` component is used instead to redirect users【12†source】.



## Sass

- `npm install sass`

- add .env with REACT_APP_API_TOKEN

- make sure to have the proxy in `package.json`

`"proxy": "https://superheroapi.com/"`

## Add Link Tags to Menus

- Add Link tags to NavBar

`yarn add react-router-dom`
`import {Link} from react-router-dom`

```js
  <ul className="menu">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/superheros'>Superheros</Link></li>
    <li><Link to='/search'>Search</Link></li>
    <li><Link to='/login'>Login</Link></li>
  </ul>
```

## Add Routes in App

- import `BrowserRouter as Router`, `Routes`, and `Route`

`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';`

- Add the Router, Routes, and Route

```js
<div className="App">
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/superheros" element={<Superheros />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
</div>
```

- Add 404

```js
<Route path='*' element={<h1>404 - not Found</h1>} />
```

## Hooks

- Go over the hooks to explain the request
- Go over the reducer

## Superheros

- Add the state in `app` from `useSuperheros` custom hook

`const {state, dispatch} = useSuperheros();`

- pass superheros props in App

`<Superhero superheros={state.superheros} loading={state.loading} />`


- In Superheros

- checked if loading

- Add Map function

```js
  <ul className='superheros'>

    {superheros.map(superhero => <Superhero id={hero.id} name={hero.name} image={hero.image} />)}

  </ul>
```

## Superhero Component

- Add image and name

```js
<>
  {/* adding images and links on the name */}
  <li>
    <img src={image.url} alt={name} />
    {/* link to an url parameter on the id */}
    <Link to=''>{name}</Link>
  </li>
</>
```

## Nested Route

- Add url parameter

- add useRouteMatch

`import { Link, useRouteMatch } from 'react-router-dom';`

`const { path } = useRouteMatch();`

- Add the path to the Link

`<Link to={`${path}/${id}`}>{name}</Link>`

## Add the route with url parameter

```js
<Route path="/superhero/:id">
  <SuperheroPage superheros={state.superheros} />
</Route>
```

- Extract the id is superheorpage

```js
  // extract the urlParameter with useParams

  const { id } = useParams();

  // find the superhero with the corresponding id

  const superhero = superheros.find(hero => hero.id === id);
  ```

  - fill out the values

```js
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
            <li>Durability: {superhero.powerstats.durability}</li>
            <li>Power: {superhero.powerstats.power}</li>
          </ul>
        </div>
      </div>
    </div>
  )}
```

## Search

** Make sure useHistory and useRouteMatch are not inside the SearchResult component **

- useHistory

`import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';`

`const history = useHistory();`

- add the path

`const {path} = useRouteMatch();`

- add redirect to handleSubmit

`history.push(`${path}/name=${searchContent}`)`

- Extract the query string from SearchResult

`const { search } = useLocation();`

- Parse the query string

`yarn add query-string`

- add map function to SearchResult

```js
<div className="search-result">
  <ul>
    {heroDetails && heroDetails.results.map(hero => <li>{hero.name}</li>)}
  </ul>
</div>
```

## Add Context

- Create the StateContext

- create `context/StateContext.js`

```js
import {createContext} from 'react';

const stateContext = createContext();

export default stateContext;
```

- Consume the StateContext in Superheros

```js
import StateContext from './StateContext';

export default function Home() {
  const state = useContext(StateContext);
...
```

- Add StateContext to app

`import { StateContext } from './context/StateContext'`

```js
return (
  <div className="App">
    <Router>
      <StateContext.Provider value={state}>
        <Navbar />
...
```

- Create DispatchContext

```js
import {createContext} from 'react';

const DispatchContext = createContext();

export default DispatchContext;
```

- use DispatchContext in Search

## Protected Route

- Create a protected Route Component

```js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
}
```

- In login

```js
export default function Login() {
  const history = useHistory();
  const { state } = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('token', 123);
    history.push((state && state.from) || `/`);
  };
```

- Add PrivateRoute in App

```js
<PrivateRoute exact path='/superheros'>
  <Superheros superheros={state.superheros} loading={state.loading} />
</PrivateRoute>
```