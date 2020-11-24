import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FactionIcons from './flags/FactionIcons';

function GuildRow({ name, faction, rank, realm, slug }) {
  const history = useHistory();

  // link to guild page
  const rowLink = () => {
    history.push(`/guild/${slug}/${realm}/${name}/`);
  };
  return (
    <tr className="row clickable" onClick={rowLink}>
      <td className="col-2 d-flex align-items-center">{rank}</td>
      <td className="col-8 d-flex align-items-center">
        <strong className="h4">{name}</strong>
      </td>
      <td className="col-2 d-flex align-items-center">
        <FactionIcons faction={faction} />
      </td>
    </tr>
  );
}

GuildRow.propTypes = {
  name: PropTypes.string.isRequired,
  faction: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  // region: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default GuildRow;
