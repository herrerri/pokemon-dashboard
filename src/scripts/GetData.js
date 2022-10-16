// import Pokedex from 'pokedex-promise-v2';
import Pokedex from 'pokedex-promise-v2';
import * as fs from 'fs';
import { moveNames, moveIds } from '../data/names';

// Moves 0 - 559
// Pokemon 0 - 649
const moveMax = 559;
const pokemonMax = 649;

const getPokemon = async () => {
  const P = new Pokedex();
  let moveArray = [];
  let moveObject = {};

  await P.getMoveByName(moveNames) // with Promise
    .then((response) => {
      moveArray.push(response);

      moveArray.flat().forEach((move) => {
        moveObject[move.id] = {
          accuracy: move.accuracy,
          damage_class: move.damage_class.name,
          effect_chance: move.effect_chance,
          effect_entry: move.effect_entries[0].effect,
          name: move.name,
          power: move.power,
          pp: move.pp,
          type: move.type.name,
        };
      });
    })
    .catch((error) => {
      console.log('There was an ERROR: ', error);
    });

  const jsonContent = JSON.stringify(moveObject);

  fs.writeFile('./moves.json', jsonContent, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });
};

getPokemon();
