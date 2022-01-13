import React, {useState} from "react";

function Search( {pokemon, setPokemon} ) {
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
    const searchedPokemon = pokemon.filter(poke => poke.name.includes(search))
    setPokemon(searchedPokemon)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={search}
          onChange={handleSearch} 
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
