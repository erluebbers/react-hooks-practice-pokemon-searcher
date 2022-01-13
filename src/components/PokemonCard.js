import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon} ) {
  const { hp, name, sprites } = pokemon
  const [sprite, setSprite] = useState(true)

  function handleSprite() {
    setSprite(!sprite)
  }

  return (
    <Card>
      <div onClick={handleSprite}>
        <div className="image">
          <img alt="oh no!" src={sprite ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
