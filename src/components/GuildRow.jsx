import PropTypes from 'prop-types';
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
  const { name, faction, rank } = props;
  return (
    <tr className="guildRow">
      <td>{rank}</td>
      <th>
        <strong style={{ fontSize: '21px' }}>{name}</strong>
      </th>
      <td>{flag(faction)}</td>
    </tr>
  );
}

GuildRow.propTypes = {
  name: PropTypes.string.isRequired,
  faction: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default GuildRow;
