import propTypes from 'prop-types';
import DalApi from '../../dal/DalApi';

export default function GuildRankingRow(props) {
  const {
    raid,
    raidProgress: {
      encountersDefeated: { mythic },
    },
  } = props;

  // get the raid object from staticData by DalApi
  // to find bossQty
  const currentRaid = DalApi.getRaidBySlug(raid.raid);

  return (
    <tr className="d-flex" style={{ fontSize: '20px' }}>
      <td className="col-md-5 text-left font-weight-bold">
        {currentRaid.name}
      </td>
      <td className="col-md-4">
        {mythic.length.toString().concat('/').concat(currentRaid.bossQty)}
      </td>
      <td className="col-md-3">{raid.factionRanks.mythic.world}</td>
    </tr>
  );
}

GuildRankingRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  raidProgress: propTypes.object.isRequired,
  raid: propTypes.string.isRequired,
  length: propTypes.number.isRequired,
  world: propTypes.string.isRequired,
};
