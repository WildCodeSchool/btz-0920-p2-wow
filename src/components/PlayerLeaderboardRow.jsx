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
        <td className="col-md-5 d-flex align-items-center">
          <p className={`d-flex align-items-center m-0 ${playerClass}`}>
            {name}
          </p>
        </td>
        <td className="col-md-5 d-flex align-items-center">{realm}</td>
        <td className="col-md-2 d-flex align-items-center">
          <Flag slug={region} />
        </td>
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
