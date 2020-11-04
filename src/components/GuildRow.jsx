import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FactionIcons from './flags/FactionIcons';

function GuildRow({ name, faction, rank, region, realm }) {
  return (
    <Link
      to={`/Guild/${region}/${realm}/${name}`}
      style={{ textDecoration: 'none' }}
    >
      <tr className="row">
        <td className="col-2">{rank}</td>
        <th className="col-8">
          <strong style={{ fontSize: '21px' }}>{name}</strong>
        </th>
        <td className="col-2">
          <FactionIcons faction={faction} />
        </td>
      </tr>
    </Link>
  );
}

GuildRow.propTypes = {
  name: PropTypes.string.isRequired,
  faction: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
};

export default GuildRow;
