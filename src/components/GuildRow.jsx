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

function GuildRow(props) {
  const { name, faction, rank, bckgrdStyle } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <tr className="guildRow" {...bckgrdStyle}>
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
  slug: PropTypes.string.isRequired,
  bckgrdStyle: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default GuildRow;
