import propTypes from 'prop-types';
import DalApi from '../../dal/DalApi';
import '../cssPages&Components/GuildPage.css';
import '../cssPages&Components/ClassColor.css';

const GuildRosterRow = (props) => {
  const {
    // player,
    player: {
      character: {
        level,
        name,
        class: { slug },
        race,
        itemLevelEquipped,
        spec,
      },
    },
  } = props;
  const classe = DalApi.getClassesAndSpecsBySlug(slug);
  // console.log(player, classe);
  return (
    <tr className="d-flex playerRow text-left align-items-center">
      <td className="col-md-5 font-weight-bold">
        <img
          src={classe.image}
          alt="class icon"
          className="w-25 classImage pr-2"
        />
        <span className={classe.name.replace(' ', '')}>{name}</span>
      </td>
      <td className="col-md-3">{spec.name}</td>
      <td className="col-md-2">{race.name}</td>
      <td className="col-md-1">{level}</td>
      <td className="col-md-1">{itemLevelEquipped}</td>
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
