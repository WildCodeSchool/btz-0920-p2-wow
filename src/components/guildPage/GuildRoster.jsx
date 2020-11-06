import { Table } from 'reactstrap';
import propTypes from 'prop-types';
import { useState } from 'react';
import GuildRosterRow from './GuildRosterRow';
import Pagin from '../cssPages&Components/Pagin';

const GuildRoster = (props) => {
  const { roster, region, realm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(2);

  return (
    <>
      <Table className="d-flex flex-column">
        <thead>
          <tr className="d-flex" hover style={{ fontSize: '24px' }}>
            <th className="col-md-5">Player</th>
            <th className="col-md-3">Spec</th>
            <th className="col-md-2">Race</th>
            <th className="col-md-2">I-Level</th>
          </tr>
        </thead>
        {roster
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
      </Table>
      <Pagin
        page={currentPage}
        playerPerPage={playerPerPage}
        totalPlayers={roster.length}
        updatePage={setCurrentPage}
      />
    </>
  );
};

GuildRoster.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  roster: propTypes.array.isRequired,
  region: propTypes.string.isRequired,
  realm: propTypes.string.isRequired,
};
export default GuildRoster;
