import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  // eslint-disable-next-line no-console
  console.log(`GuildLeaderBoardRow : ${name}, ${realm}, ${region}`);
  return (
    <tr>
      <th>
        {' '}
        <Link
          to={`/GuildPage/${name}/${region}/${realm}`}
          style={{ textDecoration: 'none' }}
        >
          {name}
        </Link>
      </th>
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
