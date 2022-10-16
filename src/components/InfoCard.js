import React, { useState } from 'react';
import {
  Card,
  Metric,
  Text,
  Flex,
  ProgressBar,
  TabList,
  Tab,
  Block,
} from '@tremor/react';
import { capitalize, chooseTypeColor, defaultHighestValues } from './Functions';
import NewTable from './NewTable';

const InfoCard = ({ pokemon, moves }) => {
  const [tab, setTab] = useState(1);

  return (
    <Card decoration='top' decorationColor='slate'>
      <Flex truncate={true}>
        <div className='pokemon-img-container'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <Block textAlignment='text-right' maxWidth='max-w-fit'>
          <Metric>{capitalize(pokemon.name)}</Metric>
          <Flex
            marginTop='mt-1'
            justifyContent='justify-end'
            spaceX='space-x-2'
          >
            {pokemon.types.map((n) => (
              <Block maxWidth='max-w-fit'>
                <div
                  className='types'
                  style={{
                    backgroundColor: chooseTypeColor(n.type.name),
                  }}
                ></div>
                <p>{capitalize(n.type.name)}</p>
              </Block>
            ))}
          </Flex>
        </Block>
      </Flex>

      <TabList
        defaultValue={1}
        handleSelect={(value) => setTab(value)}
        marginTop='mt-6'
        color='slate'
      >
        <Tab value={1} text='Stats' />
        <Tab value={2} text='Moves' />
        <Tab value={3} text='HM/TM' />
        <Tab value={4} text='Tutors' />
      </TabList>

      {tab === 1 ? (
        <>
          {Object.keys(defaultHighestValues).map((n, index) => (
            <>
              <Flex marginTop='mt-8'>
                <Text>{defaultHighestValues[n][1]}</Text>
                <Text>{pokemon.stats[index].base_stat}</Text>
              </Flex>
              <ProgressBar
                percentageValue={
                  (100 * pokemon.stats[index].base_stat) /
                  defaultHighestValues[n][0]
                }
                color='slate'
                marginTop='mt-2'
              />
            </>
          ))}
        </>
      ) : tab === 2 ? (
        <NewTable filteredFor='level-up' pokemon={pokemon} moves={moves} />
      ) : tab === 3 ? (
        <NewTable filteredFor='machine' pokemon={pokemon} moves={moves} />
      ) : tab === 4 ? (
        <NewTable filteredFor='tutor' pokemon={pokemon} moves={moves} />
      ) : (
        <div />
      )}
    </Card>
  );
};

export default InfoCard;
