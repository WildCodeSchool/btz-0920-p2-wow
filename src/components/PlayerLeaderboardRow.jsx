import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EuroFlag from './flags/EuroFlag';
import ChinaFlag from './flags/ChinaFlag';
import UsFlag from './flags/UsFlag';

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

const PlayerLeaderboardRow = (props) => {
  const { name, realm, region } = props;
  return (
    <tr className="d-flex">
      <th className="col-md-5">
        <Link
          to={`/PlayerProfile/${name}/${region}/${realm}`}
          style={{ textDecoration: 'none' }}
        >
          {name}
        </Link>
      </th>
      <th className="col-md-5">{realm}</th>
      <th className="col-md-2">{displaysFlag(region)}</th>
    </tr>
  );
};

PlayerLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default PlayerLeaderboardRow;
