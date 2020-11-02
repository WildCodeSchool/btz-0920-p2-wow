import PropTypes from 'prop-types';
import { GiWorld } from 'react-icons/gi';

import HordeFlag from './flags/HordeFlag';
import AllianceFlag from './flags/AllianceFlag';

import './cssPages&Components/PJRow.css';

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
  const { name, pjClass, faction, rank, spec } = props;
  return (
    <tr className="pjRow">
      <td className="rank">{rank}</td>
      <td className="pjNname">
        <strong style={{ fontSize: '21px' }}>{name}</strong>
      </td>
      <td className="classAndSpec">
        {pjClass} <br />
        {spec}
      </td>
      <td className="faction">{flag(faction)}</td>
    </tr>
  );
}

PJRow.propTypes = {
  name: PropTypes.string.isRequired,
  pjClass: PropTypes.string.isRequired,
  faction: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default PJRow;
