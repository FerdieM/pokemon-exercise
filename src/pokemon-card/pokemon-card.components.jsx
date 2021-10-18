import React from 'react';

import './pokemon-card.styles.css';

const PokemonCard = (props) => {
  let id_length = props.pokemon.id.toString().length;
  // console.log(id_length);

  const x = id_length === 1 ? '00' : id_length === 2 ? '0' : '';
  const id = x + props.pokemon.id.toString();

  return (
    <div className="pokemon-container">
      <h2> {props.pokemon.name}</h2>
      <img
        className="pokemon-img"
        alt="pokemon"
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
      />
      <div className="pokemon-info">
        <h3> Type: {props.pokemon.type}</h3>
        <h3> Exp: {props.pokemon.base_experience}</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
