import React from 'react';
import { Card, Metric, Text, Flex } from '@tremor/react';
import { capitalize, chooseTypeColor } from './Functions';

const BasicCard = ({ pokemon, arrayLoc, setPokemon }) => {
  return (
    <div className='pokemon-card' onClick={() => setPokemon(arrayLoc)}>
      <Card decoration='top' decorationColor='slate'>
        <Flex truncate={false}>
          <div
            className='pokemon-img-container'
            style={{
              backgroundColor: chooseTypeColor(pokemon.types[0].type.name),
            }}
          >
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className='pokemon-img'
            />
          </div>
          <div>
            <Text textAlignment='text-right'>No.{pokemon.id}</Text>
            <Metric>{capitalize(pokemon.name)}</Metric>
          </div>
        </Flex>
      </Card>
    </div>
  );
};

export default BasicCard;
