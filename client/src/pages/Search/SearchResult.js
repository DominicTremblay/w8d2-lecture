import React from 'react';

function SearchResult(props) {
  return (
    <div>
       <h3>Search for: name</h3>
      {/* output loading if loading */}

      <h2>Loading...</h2>

      {/* ouput herosDetails.results if herosDetails */}

       <div className="search-result">
          <ul>
            {/* list the superhero names */}
            <li>Superhero Name</li>
          </ul>
        </div>
      
    </div>
  );
}

export default SearchResult;