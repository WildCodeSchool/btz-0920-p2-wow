import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  const { name, pjClass, faction, rank, spec, realm, region } = props;
  return (
    <Link
      to={`/PlayerProfile/${name}/${region}/${realm}`}
      style={{ textDecoration: 'none' }}
    >
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
    </Link>
  );
}

PJRow.propTypes = {
  name: PropTypes.string.isRequired,
  pjClass: PropTypes.string.isRequired,
  faction: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  spec: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default PJRow;
