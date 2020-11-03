import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';

import DalApi from '../dal/DalApi';

import HordeFlag from './flags/HordeFlag';
import AllianceFlag from './flags/AllianceFlag';

import './cssPages&Components/ClassColor.css';

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

const displaysClass = (pjClass) => {
  switch (pjClass) {
    case 'Death Knight':
      return DalApi.getClassesAndSpecs()[0].image;
    case 'Demon Hunter':
      return DalApi.getClassesAndSpecs()[1].image;
    case 'Druid':
      return DalApi.getClassesAndSpecs()[2].image;
    case 'Hunter':
      return DalApi.getClassesAndSpecs()[3].image;
    case 'Mage':
      return DalApi.getClassesAndSpecs()[4].image;
    case 'Monk':
      return DalApi.getClassesAndSpecs()[5].image;
    case 'Paladin':
      return DalApi.getClassesAndSpecs()[6].image;
    case 'Priest':
      return DalApi.getClassesAndSpecs()[7].image;
    case 'Rogue':
      return DalApi.getClassesAndSpecs()[8].image;
    case 'Shaman':
      return DalApi.getClassesAndSpecs()[9].image;
    case 'Warlock':
      return DalApi.getClassesAndSpecs()[10].image;
    case 'Warrior':
      return DalApi.getClassesAndSpecs()[11].image;
    default:
      return 'error';
  }
};

const classColor = (pjClass) => {
  switch (pjClass) {
    case 'Death Knight':
      return 'DeathKnight';
    case 'Demon Hunter':
      return 'DemonHunter';
    case 'Druid':
      return 'Druid';
    case 'Hunter':
      return 'Hunter';
    case 'Mage':
      return 'Mage';
    case 'Monk':
      return 'Monk';
    case 'Paladin':
      return 'Paladin';
    case 'Priest':
      return 'Priest';
    case 'Rogue':
      return 'Rogue';
    case 'Shaman':
      return 'Shaman';
    case 'Warlock':
      return 'Warlock';
    case 'Warrior':
      return 'Warrior';
    default:
      return '';
  }
};

function PJRow(props) {
  const { name, pjClass, faction, rank, spec, realm, region } = props;
  return (
    <Link
      to={`/PlayerProfile/${name}/${region}/${realm}`}
      style={{ textDecoration: 'none' }}
    >
      <tr className="row w-100">
        <td className="col-1">{rank}</td>
        <td className="col-8">
          <strong className={classColor(pjClass)}>{name}</strong>
        </td>
        <td className="col-2">
          <img src={displaysClass(pjClass)} alt="" height="64px" width="64px" />{' '}
          <br />
          <p>{spec}</p>
        </td>
        <td className="col-1">{flag(faction)}</td>
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
