import propTypes from 'prop-types';
import DalApi from '../../dal/DalApi';

export default function GuildRankingRow(props) {
  const {
    raid: {
      raid,
      factionRanks: {
        mythic: { world },
      },
    },
    raidProgress: {
      encountersDefeated: { mythic },
    },
  } = props;

  // get the raid object from staticData by DalApi
  // to find bossQty
  const currentRaid = DalApi.getRaidBySlug(raid);

  return (
    <tr className="d-flex" style={{ fontSize: '20px' }}>
      <td className="col-md-5 text-left font-weight-bold">
        {currentRaid.name}
      </td>
      <td className="col-md-4">
        {mythic.length.toString().concat('/').concat(currentRaid.bossQty)}
      </td>
      <td className="col-md-3">{world}</td>
    </tr>
  );
}

GuildRankingRow.propTypes = {
  raidProgress: propTypes.shape({
    encountersDefeated: propTypes.shape({
      mythic: propTypes.arrayOf(propTypes.object),
    }),
  }).isRequired,
  raid: propTypes.shape({
    raid: propTypes.string.isRequired,
    factionRanks: propTypes.shape({
      mythic: propTypes.shape({
        world: propTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};
