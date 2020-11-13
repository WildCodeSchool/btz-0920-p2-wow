import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Flag from './flags/Flag';

import './cssPages&Components/ClassColor.css';

const PlayerLeaderboardRow = ({ name, realm, region, playerClass }) => {
  const history = useHistory();

  // link to player page
  const rowLink = () => {
    history.push(`/player/${region}/${realm}/${name}/`);
  };

  return (
    <tr className="d-flex" onClick={rowLink}>
      <td className="col-md-5 d-flex align-items-center">
        <p className={playerClass}>{name}</p>
      </td>
      <td className="col-md-5 d-flex align-items-center">{realm}</td>
      <td className="col-md-2 d-flex align-items-center">
        <Flag slug={region} />
      </td>
    </tr>
  );
};

PlayerLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  playerClass: PropTypes.string.isRequired,
};

export default PlayerLeaderboardRow;
