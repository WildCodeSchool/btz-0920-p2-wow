import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Flag from './flags/Flag';

import './cssPages&Components/ClassColor.css';

const PlayerLeaderboardRow = ({ name, realm, region, playerClass }) => {
  return (
    <Link
      to={`/player/${name}/${region}/${realm}`}
      style={{ textDecoration: 'none' }}
    >
      <tr className="d-flex">
        <th className="col-md-5">
          <p className={playerClass}>{name}</p>
        </th>
        <th className="col-md-5">{realm}</th>
        <th className="col-md-2">
          <Flag slug={region} />
        </th>
      </tr>
    </Link>
  );
};

PlayerLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  playerClass: PropTypes.string.isRequired,
};

export default PlayerLeaderboardRow;
