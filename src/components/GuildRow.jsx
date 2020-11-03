import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';

import HordeFlag from './flags/HordeFlag';
import AllianceFlag from './flags/AllianceFlag';

import './cssPages&Components/GuildRow.css';

const flag = (faction) => {
  switch (faction) {
    case 'horde':
      return <HordeFlag />;
    case 'alliance':
      return <AllianceFlag />;
    default:
      return <GiWorld />;
  }
};

function GuildRow(props) {
  const { name, faction, rank, region, realm } = props;
  return (
    <Link
      to={`/GuildPage/${name}/${region}/${realm}`}
      style={{ textDecoration: 'none' }}
    >
      <tr className="guildRow">
        <td>{rank}</td>
        <th>
          <strong style={{ fontSize: '21px' }}>{name}</strong>
        </th>
        <td>{flag(faction)}</td>
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
