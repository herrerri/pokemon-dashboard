import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '@tremor/react';
import { capitalize, splitName, chooseTypeColor } from './Functions';

const NewTable = ({ filteredFor, moves, pokemon }) => {
  return (
    <Table marginTop='mt-5'>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Power</TableHeaderCell>
          <TableHeaderCell>Accuracy</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          {filteredFor === 'level-up' ? (
            <TableHeaderCell>Level</TableHeaderCell>
          ) : (
            <></>
          )}

          <TableHeaderCell>Class</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pokemon.moves
          .filter((move) => move.method === filteredFor)
          .sort((a, b) => {
            if (a.level > b.level) {
              return 1;
            }
            if (a.level < b.level) {
              return -1;
            }
            return 0;
          })
          .map((move) => (
            <>
              <TableRow>
                <TableCell>
                  {splitName(move.name).map((n) => {
                    return capitalize(n + ' ');
                  })}
                </TableCell>
                <TableCell>
                  {moves[move.id].power ? moves[move.id].power : 'N/A'}
                </TableCell>
                <TableCell>
                  {moves[move.id].accuracy ? moves[move.id].accuracy : 'N/A'}
                </TableCell>
                <TableCell>
                  <div
                    className='types'
                    style={{
                      backgroundColor: chooseTypeColor(moves[move.id].type),
                    }}
                  ></div>
                  {capitalize(moves[move.id].type)}
                  <div className='types'></div>
                </TableCell>
                {filteredFor === 'level-up' ? (
                  <TableCell>{move.level}</TableCell>
                ) : (
                  <></>
                )}
                <TableCell>{capitalize(moves[move.id].damage_class)}</TableCell>
              </TableRow>
            </>
          ))}
      </TableBody>
    </Table>
  );
};

export default NewTable;
