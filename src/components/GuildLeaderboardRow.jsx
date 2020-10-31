import { GiEuropeanFlag, GiUsaFlag, GiEarthAsiaOceania } from 'react-icons/gi';
import PropTypes from 'prop-types';

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

const GuildLeaderboardRow = (props) => {
  const { name, realm, region } = props;
  return (
    <tr>
      <th>{name}</th>
      <th>{realm}</th>
      <th>{displaysFlag(region)}</th>
    </tr>
  );
};

GuildLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default GuildLeaderboardRow;
