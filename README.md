# React Router V6 and React Context

Our app is pulling data from a Superhero API to display a list of superheros and display their stats:

As a user, I want to:

- See a list of the superheros
- See the power stats of a superhero
- Search for a superhero by name
- Add a new superhero to the list


## Plan

- Front-End Routing vs Back-End Routing
- Creating Links
- Adding Routes
- How to use params
- How to use query params
- React context vs props drilling


## Front-End Routing

- Front-End Routing

Front-end:
How to navigate between our views. It's the same page being rebuilt by React

Back-End Routing:
- get the data only => not about navigating between pages




### Links

- regular a href => reloads the page => reinitialize the state
- <Link to=''>

### Router and Routes

`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';`

```js
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superheros" element={<Superheros />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

```

### Params


- get the current path

` const { pathname } = useLocation();`

- we use `useParams` to extract the param from the URL:

`const { id } = useParams();`


### Query Params

- getting the query `?name=Kool-aid`

`const { pathname, search } = useLocation();`

```js
// Extracting the query params
const searchParams = new URLSearchParams(search);
const name = searchParams.get('name');
```

### React Context

- create a context

```js
import { createContext } from 'react';
const StateContext = createContext();

export default StateContext;

```

- Use it in `app`

```js
 <StateContext.Provider value={state}>
          <Router>
            <Navbar />
            <Routes>
...
```

- How to get the state back in a child component

`  const state = useContext(StateContext)`