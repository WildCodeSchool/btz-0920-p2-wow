import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Flag from './flags/Flag';

const GuildLeaderboardRow = ({ realm, region, name }) => {
  return (
    <Link
      to={`/guild/${region}/${realm}/${name}/`}
      style={{ textDecoration: 'none' }}
    >
      <tr className="d-flex">
        <th className="col-md-5" style={{ fontSize: 21 }}>
          {name}
        </th>
        <th className="col-md-5">{realm}</th>
        <th className="col-md-2">
          <Flag slug={region} />
        </th>
      </tr>
    </Link>
  );
};

GuildLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default GuildLeaderboardRow;
