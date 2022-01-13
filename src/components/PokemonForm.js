import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    }
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
