import PropTypes from 'prop-types';
import { GiWorld } from 'react-icons/gi';

import HordeFlag from './HordeFlag';
import AllianceFlag from './AllianceFlag';

import './GuildRow.css';

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

function PJRow(props) {
  const { name, faction, rank, spec } = props;
  return (
    <tr className="guildRow">
      <td>{rank}</td>
      <th>
        <strong style={{ fontSize: '21px' }}>{name}</strong>
      </th>
      <td>{spec}</td>
      <td>{flag(faction)}</td>
    </tr>
  );
}

PJRow.propTypes = {
  name: PropTypes.string.isRequired,
  faction: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default PJRow;
