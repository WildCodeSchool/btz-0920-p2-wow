import PropTypes from 'prop-types';
import EuroFlag from './flags/EuroFlag';
import ChinaFlag from './flags/ChinaFlag';
import UsFlag from './flags/UsFlag';
import KoreaFlag from './flags/KoreaFlag';

// Display flag image per region
const displaysFlag = (region) => {
  switch (region) {
    case 'Europe':
      return <EuroFlag />;
    case 'German':
      return <EuroFlag />;
    case 'United States & Oceania':
      return <UsFlag />;
    case 'China':
      return <ChinaFlag />;
    case 'Russian':
      return <EuroFlag />;
    case 'Korea':
      return <KoreaFlag />;
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
