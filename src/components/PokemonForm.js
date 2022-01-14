import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const [pokeName, setPokeName] = useState("")
  const [pokeHp, setPokeHp] = useState("")
  const [pokeFrontSprite, setPokeFrontSprite] = useState("")
  const [pokeBackSprite, setPokeBackSprite] = useState("")

  function handleSubmit() {
    const newPokemon = {
      id: "",
      name: pokeName,
      hp: parseInt(pokeHp),
      sprites: {
        front: pokeFrontSprite,
        back: pokeBackSprite
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPokemon)
    })
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={pokeName}
            onChange={(e) => setPokeName(e.target.value)}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={pokeHp}
            onChange={(e) => setPokeHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeFrontSprite}
            onChange={(e) => setPokeFrontSprite(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeBackSprite}
            onChange={(e) => setPokeBackSprite(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
