import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Flag from './flags/Flag';

import './cssPages&Components/ClassColor.css';

const PlayerLeaderboardRow = ({ name, realm, region, playerClass }) => {
  const history = useHistory();

  // link to player page
  const rowLink = () => {
    history.push(`/Player/${region}/${realm}/${name}/`);
  };

  return (
    <tr className="d-flex justify-content-between clickable" onClick={rowLink}>
      <td className="col-xs-6 d-flex align-items-center justify-content-end h5">
        <span className={playerClass}>{name}</span>
      </td>
      <td className="col-xs-3 d-flex flex-1 align-items-center justify-content-end">
        {realm}
      </td>
      <td className="col-xs-6 d-flex align-items-center justify-content-end">
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
