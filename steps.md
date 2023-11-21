
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

> Disable Strict Mode in App

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

- add useLocation

`import { Link, useLocation } from 'react-router-dom';`

`const { pathname } = useLocation();`

- Add the path to the Link

`<Link to={`${pathname}/${id}`}>{name}</Link>`

## Add the route with url parameter

```js
<Route path="/superheros/:id" element={<SuperheroStats />} />
```

- add the superheros state to it

```js
<Route path="/superheros/:id" element={<SuperheroStats superheros={state.superheros} />} />
```

- Extract the id is superheorpage

```js
  // extract the urlParameter with useParams

  const { id } = useParams();

  // find the superhero with the corresponding id

  const superhero = superheros.find(hero => hero.id === id);
  ```

  - destructure the values we need from superhero

  ```js
    const {
    name,
    image: { url },
    powerstats: { combat, durability, intelligence, power, speed, strength },
  } = superhero ?? {};
  ```

  - fill out the values

```js
{superhero && (
    <div>
      <h1>{name}</h1>

      <div className="hero-details">
        <div className="avatar-image">
          <img src={url} alt={name} />
        </div>
        <div className="description">
          <h2>Power Stats</h2>

          <ul className='powerstats'>
            <li>Combat: {combat}</li>
            <li>Intelligence: {intelligence}</li>
            <li>Strength: {strength}</li>
            <li>speed: {speed}</li>
            <li>Durability: {durability}</li>
            <li>Power: {power}</li>
          </ul>
        </div>
      </div>
    </div>
  )}
```

## Search


1. Add the handleSubmit

```js
const handleSubmit = (event) => {
  event.preventDefault();

  // implement a redirect
};
```

2. Implement the redirect in `handleSubmit`

- hooks: useNavigate, useLocation

```js
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchContent, setSearchContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // build query string
    const url = `${pathname}?name=${searchContent}`;
    // implement a redirect
    navigate(url);
  };
```

3. Extract the query string


`const { pathname, search } = useLocation();`

```js
// Extracting the query params
const searchParams = new URLSearchParams(search);
const name = searchParams.get('name');
```

4. Add <SearchResult /> after the `form`

- conditional rendering
- pass the name prop

```js
{name && <SearchResult name={name} />}
```

5. Add `useSearch` in `<SearchResult />`

` const { heroDetails, loading, error } = useSearch(name);`

6. add map function to SearchResult

```js
<div className="search-result">
  <ul>
    {heroDetails && heroDetails.results.map(hero => <li>{hero.name}</li>)}
  </ul>
</div>
```

7. Add a Button to the search results

- pass down `dispatch` to `<SearchResult />`

- update the map function

```js
  const herosList = heroDetails?.results?.map((superhero) => <li key={superhero.id}>{superhero.name} <button onClick={event => dispatch({type: ADD_SUPERHERO, superhero})}>Add</button></li>);
```


8. Full `<SearchResult />`

```js
import React from 'react';
import useSearch from '../../hooks/useSearch';
import { ADD_SUPERHERO } from '../../reducers/dataReducer';

function SearchResult({ name, dispatch }) {
  const { heroDetails, loading, error } = useSearch(name);

  const herosList = heroDetails?.results?.map((superhero) => <li key={superhero.id}>{superhero.name} <button onClick={event => dispatch({type: ADD_SUPERHERO, superhero})}>Add</button></li>);

  return (
    <div>
      <h3>Search for: {name}</h3>
      {/* output loading if loading */}

      {error && <h2>{error}</h2>}

      {loading && <h2>Loading...</h2>}

      {/* ouput herosDetails.results if herosDetails */}

      {heroDetails && (
        <div className="search-result">
          <ul>
            {/* list the superhero names */}
            {herosList}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
```

8. Full `<Search />`

```js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Search.scss';
import SearchResult from './SearchResult';

function Search({dispatch}) {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [searchContent, setSearchContent] = useState('');
  
  // Extracting the query params
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');

  const handleSubmit = (event) => {
    event.preventDefault();

    // build query string
    const url = `${pathname}?name=${searchContent}`;

    // reset the form
    setSearchContent('');

    // implement a redirect
    navigate(url);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="search"
          value={searchContent}
          onChange={(event) => setSearchContent(event.target.value)}
        />

        <input type="submit" value="Search" />
      </form>

      {name && <SearchResult name={name} dispatch={dispatch} />}
    </>
  );
}

export default Search;
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