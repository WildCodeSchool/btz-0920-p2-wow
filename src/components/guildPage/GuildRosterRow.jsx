import propTypes from 'prop-types';

const GuildRosterRow = (props) => {
  const {
    // player,
    player: {
      character: { name },
    },
  } = props;
  //   console.log(player);
  return (
    <tr className="d-flex">
      <td className="col-md-4">
        <h4>{name}</h4>
      </td>
      {/* <td className="col-md-2">
        {mythic.length.toString().concat('/').concat(currentRaid.bossQty)}
      </td>
      <td className="col-md-3" />
      <td className="col-md-3">{raid.factionRanks.mythic.world}</td> */}
    </tr>
  );
};

export default GuildRosterRow;

GuildRosterRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  player: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
};
