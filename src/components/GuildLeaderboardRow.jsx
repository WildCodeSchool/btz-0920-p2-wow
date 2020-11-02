import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EuroFlag from './EuroFlag';
import ChinaFlag from './ChinaFlag';
import UsFlag from './UsFlag';

// Display flag image per region
const displaysFlag = (region) => {
  switch (region) {
    case 'Europe':
      return <EuroFlag />;
    case 'United States & Oceania':
      return <UsFlag />;
    case 'China':
      return <ChinaFlag />;
    case 'Russian':
      return <EuroFlag />;
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
