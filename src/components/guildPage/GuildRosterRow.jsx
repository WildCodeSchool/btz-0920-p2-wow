import propTypes from 'prop-types';
import DalApi from '../../dal/DalApi';

const GuildRosterRow = (props) => {
  const {
    // player,
    player: {
      character: {
        name,
        class: { slug },
      },
    },
  } = props;
  const classe = DalApi.getClassesAndSpecsBySlug(slug);
  // console.log(player, classe);
  return (
    <tr className="d-flex">
      <td className="col-md-4 font-weight-bold">
        <img src={classe.image} alt="class icon" className="w-25" />
        {name}
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
  // slug: propTypes.string.isRequired,
};
