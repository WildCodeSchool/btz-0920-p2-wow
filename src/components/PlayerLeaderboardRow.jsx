import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Flag from './flags/Flag';

const PlayerLeaderboardRow = ({ name, realm, region }) => {
  return (
    <tr className="d-flex">
      <th className="col-md-5">
        <Link
          to={`/player/${name}/${region}/${realm}`}
          style={{ textDecoration: 'none' }}
        >
          {name}
        </Link>
      </th>
      <th className="col-md-5">{realm}</th>
      <th className="col-md-2">
        <Flag slug={region} />
      </th>
    </tr>
  );
};

PlayerLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default PlayerLeaderboardRow;
