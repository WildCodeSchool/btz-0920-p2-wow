import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import Flag from './flags/Flag';

const GuildLeaderboardRow = ({ realm, region, name }) => {
  const history = useHistory();

  // link to guild page
  const rowLink = () => {
    history.push(`/Guild/${region}/${realm}/${name}/`);
  };
  return (
    <tr className="d-flex justify-content-between clickable" onClick={rowLink}>
      <td className="col-xs-6 d-flex align-items-center justify-content-end h5">
        {name}
      </td>
      <td className="col-xs-3 d-flex flex-1 align-items-center justify-content-end">
        {realm}
      </td>
      <td className="col-xs-3 d-flex align-items-center justify-content-end">
        <Flag slug={region} />
      </td>
    </tr>
  );
};

GuildLeaderboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default GuildLeaderboardRow;
