import propTypes from 'prop-types';
import { Table } from 'reactstrap';
import DalApi from '../../dal/DalApi';
import GuildRankingRow from './GuildRankingRow';

export default function GuildRanking(props) {
  const { raidRankings, raidProgress } = props;

  return (
    <Table className="d-flex flex-column" borderless>
      <thead>
        <tr className="d-flex" style={{ fontSize: '24px' }}>
          <td className="col-md-6">Raid</td>
          <td className="col-md-3">Progress</td>
          <td className="col-md-3">Rank</td>
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
