import PropTypes from 'prop-types';
import FactionIcons from './flags/FactionIcons';

function GuildRow({ name, faction, rank, region, realm, slug }) {
  return (
    <tr className="row" to={`/Guild/${region}/${realm}/${slug}`}>
      <td className="col-2 d-flex align-items-center">{rank}</td>
      <th className="col-8 d-flex align-items-center">
        <strong style={{ fontSize: '21px' }}>{name}</strong>
      </th>
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
  region: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default GuildRow;
