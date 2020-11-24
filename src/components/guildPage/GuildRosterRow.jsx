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
      className="d-flex playerRow text-left align-items-center my-1"
      onClick={rowLink}
    >
      <td className="col-md-6 col-5 p-0 d-flex text-center align-items-center">
        <img
          // src={classe.image}
          src={imgSrc.concat(thumbnail)}
          alt="class icon"
          className=" classImage pr-2"
          style={{ height: '44px' }}
        />

        <span className={`h5 mb-0 ${classe.name.replace(' ', '')}`}>
          {name}
        </span>
      </td>
      <td className="col-md-2 col-4 d-flex justify-content-center">
        {spec.name}
      </td>
      <td className="col-md-2 col-0 d-none d-md-flex justify-content-center">
        {race.name}
      </td>
      <td className="col-md-2 col-3 text-center">{itemLevelEquipped}</td>
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
