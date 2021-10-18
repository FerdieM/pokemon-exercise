import React from 'react';
import POKEMON_DATA from './pokemon-data';
import PokemonList from './pokemon-list/pokemon-list.component';
import './App.css';

const _ = require('lodash');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: POKEMON_DATA,
    };
  }

  render() {
    const { pokemons } = this.state;
    const poketmp = _.shuffle(pokemons);
    const chunk = 4;

    const pokemon_array1 = poketmp.slice(0, chunk);
    const pokemon_array2 = poketmp.slice(chunk, chunk + poketmp.length);

    let p1_total = pokemon_array1.reduceRight((acc, curr) => {
      return acc + parseInt(curr.base_experience);
    }, 0);
    console.log(p1_total);

    let p2_total = pokemon_array2.reduceRight((acc, curr) => {
      return acc + parseInt(curr.base_experience);
    }, 0);
    console.log(p2_total);

    let player1 = p1_total > p2_total ? 'Winner' : 'Loser';
    let player2 = p2_total > p1_total ? 'Winner' : 'Loser';

    // console.log(pokemons);
    // console.log(poketmp);

    return (
      <div className="App">
        <h1>Pokemon Rolodex</h1>
        <PokemonList pokemons={pokemon_array1} player={player1} />
        <PokemonList pokemons={pokemon_array2} player={player2} />
      </div>
    );
  }
}
export default App;
