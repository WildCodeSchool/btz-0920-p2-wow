import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import Flag from './flags/Flag';

const GuildLeaderboardRow = ({ realm, region, name }) => {
  const history = useHistory();

  const rowLink = () => {
    history.push(`/guild/${region}/${realm}/${name}/`);
  };
  return (
    <tr className="d-flex" onClick={rowLink}>
      <td
        className="col-md-5 d-flex align-items-center"
        style={{ fontSize: 21 }}
      >
        {name}
      </td>
      <td className="col-md-5 d-flex align-items-center">{realm}</td>
      <td className="col-md-2 d-flex align-items-center">
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
