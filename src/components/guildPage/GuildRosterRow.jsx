import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import DalApi from '../../dal/DalApi';

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

  const history = useHistory();

  // link to player page
  const rowLink = () => {
    history.push(`/player/${region}/${realm}/${name}/`);
  };

  const classe = DalApi.getClassesAndSpecsBySlug(slug);

  // create avatar image source
  const imgSrc = '//render-'
    .concat(region)
    .concat('.worldofwarcraft.com/character/');

  return (
    <tr
      className="d-flex playerRow text-left align-items-center my-1 "
      onClick={rowLink}
    >
      <td className="col-md-4 p-0 d-md-flex text-center d-flex-xs-column align-items-center">
        <img
          // src={classe.image}
          src={imgSrc.concat(thumbnail)}
          alt="class icon"
          className=" classImage pr-2"
          style={{ height: '44px' }}
        />

        <p className={classe.name.replace(' ', '')}>{name}</p>
      </td>
      <td className="col-md-3 d-flex justify-content-center">{spec.name}</td>
      <td className="col-md-3 d-none d-md-flex justify-content-center">
        {race.name}
      </td>
      <td className="col-md-2 text-center">{itemLevelEquipped}</td>
    </tr>
  );
};

export default GuildRosterRow;

GuildRosterRow.propTypes = {
  region: propTypes.string.isRequired,
  realm: propTypes.string.isRequired,
  player: propTypes.shape({
    character: propTypes.shape({
      name: propTypes.string.isRequired,
      race: propTypes.shape({
        name: propTypes.string.isRequired,
      }).isRequired,
      spec: propTypes.objectOf(propTypes.string.isRequired).isRequired,
      itemLevelEquipped: propTypes.number.isRequired,
      thumbnail: propTypes.string.isRequired,
      class: propTypes.shape({
        slug: propTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};
