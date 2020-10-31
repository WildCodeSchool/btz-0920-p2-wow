import { GiEuropeanFlag, GiUsaFlag, GiEarthAsiaOceania } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Display flag image per region
const displaysFlag = (region) => {
  switch (region) {
    case 'Europe':
      return <GiEuropeanFlag />;
    case 'United States & Oceania':
      return <GiUsaFlag />;
    case 'China':
      return <GiEarthAsiaOceania />;
    case 'Russian':
      return <GiEuropeanFlag />;
    default:
      return 'error';
  }
};

const PlayerLeaderboardRow = (props) => {
  const { name, realm, region } = props;
  return (
    <tr>
      <Link to={`/PlayerProfile/${name}/${region}/${realm}`}>{name}</Link>
      <th>{realm}</th>
      <th>{displaysFlag(region)}</th>
    </tr>
  );
};

PlayerLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default PlayerLeaderboardRow;
