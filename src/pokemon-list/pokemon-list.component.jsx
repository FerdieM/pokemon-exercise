import React from 'react';
import PokemonCard from '../pokemon-card/pokemon-card.components';

import './pokemon-list.styles.css';

const PokemonList = ({ pokemons, player }) => {
  // console.log(pokemons);
  return (
    <div>
      <h2 className="player-status">Your Team is the: {player}</h2>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
