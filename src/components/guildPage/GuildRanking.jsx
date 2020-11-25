import propTypes from 'prop-types';
import { Table } from 'reactstrap';
import DalApi from '../../dal/DalApi';
import GuildRankingRow from './GuildRankingRow';

export default function GuildRanking(props) {
  const { raidRankings, raidProgress } = props;

  return (
    <Table className="d-flex flex-column table-striped " borderless>
      <thead className="table-primary">
        <tr
          className="d-flex justify-content-center"
          style={{ fontSize: '24px' }}
        >
          <th className="col-md-4">Raid</th>
          <th
            className="col-md-4 
              d-none d-md-block"
          >
            Progress
          </th>
          <th className="col-md-4">Rank</th>
        </tr>
      </thead>
      <tbody>
        {DalApi.getRaids()
          .map((raid) => {
            return raidRankings.find((r) => r.raid === raid.slug) ? (
              <GuildRankingRow
                raid={raidRankings.find((r) => r.raid === raid.slug)}
                raidProgress={raidProgress.find((r) => r.raid === raid.slug)}
                key={raid.slug}
              />
            ) : null;
          })
          .filter((elmt, index) => index < 5)}
      </tbody>
    </Table>
  );
}

GuildRanking.propTypes = {
  raidProgress: propTypes.arrayOf(propTypes.object).isRequired,
  raidRankings: propTypes.arrayOf(propTypes.object).isRequired,
};
