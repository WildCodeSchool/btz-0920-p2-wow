import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DalApi from '../../dal/DalApi';

import '../cssPages&Components/GuildPage.css';
import '../cssPages&Components/ClassColor.css';

const GuildRosterRow = (props) => {
  const {
    region,
    realm,
    player: {
      character: {
        name,
        class: { slug },
        race,
        itemLevelEquipped,
        spec,
        thumbnail,
      },
    },
  } = props;
  const classe = DalApi.getClassesAndSpecsBySlug(slug);
  const imgSrc = '//render-'
    .concat(region)
    .concat('.worldofwarcraft.com/character/');
  // console.log(player, classe);
  return (
    <Link
      to={`/player/${name}/${region}/${realm}/`}
      style={{ textDecoration: 'none' }}
    >
      <tr className="d-flex playerRow text-left align-items-center">
        <td className="col-md-4 font-weight-bold">
          <img
            // src={classe.image}
            src={imgSrc.concat(thumbnail)}
            alt="class icon"
            className=" classImage pr-2"
            style={{ height: '40px' }}
          />

          <span className={classe.name.replace(' ', '')}>{name}</span>
        </td>
        <td className="col-md-3">{spec.name}</td>
        <td className="col-md-3">{race.name}</td>
        <td className="col-md-2 text-center">{itemLevelEquipped}</td>
      </tr>
    </Link>
  );
};

export default GuildRosterRow;

GuildRosterRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  player: propTypes.object.isRequired,
  region: propTypes.string.isRequired,
  realm: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  // slug: propTypes.string.isRequired,
};
