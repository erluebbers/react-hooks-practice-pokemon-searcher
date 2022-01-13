import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemon} ) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map(poke => {
        return <PokemonCard pokemon={poke} key={pokemon.id}/>
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
