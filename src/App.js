import '@tremor/react/dist/esm/tremor.css';
import './css/main.css';

import { useState, useEffect } from 'react';
import monData from './data/pokemon.json';
import monMoves from './data/moves.json';
import BasicCard from './components/BasicCard';
import InfoCard from './components/InfoCard';
import { capitalize } from './components/Functions';
import {
  ColGrid,
  Col,
  Block,
  Title,
  Text,
  SelectBox,
  SelectBoxItem,
} from '@tremor/react';

const App = () => {
  const [pokemon, setPokemon] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <main className='main'>
      <Title>Pokemon Dashboard</Title>
      <Text>View stats and moves for Pokemon from Black 2 White 2</Text>

      {width > 768 ? (
        <ColGrid
          numColsMd={2}
          numColsLg={5}
          gapX='gap-x-6'
          gapY='gap-y-6'
          marginTop='mt-10'
        >
          <Col numColSpanLg={2}>
            <Block spaceY='space-y-6'>
              {monData.pokemon.map((mon, index) => (
                <BasicCard
                  pokemon={mon}
                  key={mon.id}
                  arrayLoc={index}
                  setPokemon={setPokemon}
                />
              ))}
            </Block>
          </Col>
          <Col numColSpanLg={3}>
            <InfoCard pokemon={monData.pokemon[pokemon]} moves={monMoves} />
          </Col>
        </ColGrid>
      ) : (
        <Block marginTop='mt-10'>
          <SelectBox
            handleSelect={(value) => setPokemon(value)}
            defaultValue={0}
          >
            {monData.pokemon.map((mon, index) => (
              <SelectBoxItem value={index} text={capitalize(mon.name)} />
            ))}
          </SelectBox>
          <Block marginTop='mt-4'>
            <InfoCard pokemon={monData.pokemon[pokemon]} moves={monMoves} />
          </Block>
        </Block>
      )}
    </main>
  );
};

export default App;
