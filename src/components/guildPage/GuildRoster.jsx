import { Table } from 'reactstrap';
import propTypes from 'prop-types';
import { useState } from 'react';
import GuildRosterRow from './GuildRosterRow';
import Pagin from '../cssPages&Components/Pagin';

const GuildRoster = (props) => {
  const { roster, region, realm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(10);

  return (
    <div className="d-flex flex-column align-items-center">
      <Table className="d-flex flex-column" hover>
        <thead>
          <tr className="d-flex" hover style={{ fontSize: '24px' }}>
            <td className="col-md-4">Player</td>
            <td className="col-md-3">Spec</td>
            <td className="col-md-3">Race</td>
            <td className="col-md-2">I-Level</td>
          </tr>
        </thead>
        <tbody>
          {roster
            .sort((a, b) => {
              return (
                a.character.itemLevelEquipped - b.character.itemLevelEquipped
              );
            })
            .reverse()
            .filter(
              (elmt, index) =>
                index >= (currentPage - 1) * playerPerPage &&
                index < currentPage * playerPerPage
            )
            .map((player) => (
              <GuildRosterRow
                player={player}
                s
                key={player.character.name}
                region={region}
                realm={realm}
              />
            ))}
        </tbody>
      </Table>
      <Pagin
        page={currentPage}
        playerPerPage={playerPerPage}
        totalPlayers={roster.length}
        updatePage={setCurrentPage}
      />
    </div>
  );
};

GuildRoster.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  roster: propTypes.array.isRequired,
  region: propTypes.string.isRequired,
  realm: propTypes.string.isRequired,
};
export default GuildRoster;
