import React, { useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  const searchedPokemon = pokemon.filter(poke => poke.name.includes(search))


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(data => setPokemon(data))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
