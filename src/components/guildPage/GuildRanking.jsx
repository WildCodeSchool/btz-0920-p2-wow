import propTypes from 'prop-types';
import { Table } from 'reactstrap';
import GuildRankingRow from './GuildRankingRow';

// const { Container } = require('reactstrap');

export default function GuildRanking(props) {
  // eslint-disable-next-line react/prop-types
  const { raidRankings, raidProgress } = props;
  return (
    <Table className="d-flex flex-column">
      <thead>
        <tr className="d-flex" style={{ fontSize: '24px' }}>
          <th className="col-md-5">Raid</th>
          <th className="col-md-4">Progress</th>
          <th className="col-md-3">rank</th>
        </tr>
      </thead>
      {raidRankings.map((ranking, index) => (
        <GuildRankingRow
          raid={ranking}
          raidProgress={raidProgress[index]}
          key={ranking.raid}
        />
      ))}
    </Table>
  );
}

GuildRanking.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // raidProgress: propTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  raidRankings: propTypes.array.isRequired,
};
