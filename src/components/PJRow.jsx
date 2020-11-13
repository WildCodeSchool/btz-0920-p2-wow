import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import DalApi from '../dal/DalApi';

import './cssPages&Components/ClassColor.css';
import FactionIcons from './flags/FactionIcons';

// const displaysClass = (pjClass) => {
//   switch (pjClass) {
//     case 'Death Knight':
//       return DalApi.getClassesAndSpecs()[0].image;
//     case 'Demon Hunter':
//       return DalApi.getClassesAndSpecs()[1].image;
//     case 'Druid':
//       return DalApi.getClassesAndSpecs()[2].image;
//     case 'Hunter':
//       return DalApi.getClassesAndSpecs()[3].image;
//     case 'Mage':
//       return DalApi.getClassesAndSpecs()[4].image;
//     case 'Monk':
//       return DalApi.getClassesAndSpecs()[5].image;
//     case 'Paladin':
//       return DalApi.getClassesAndSpecs()[6].image;
//     case 'Priest':
//       return DalApi.getClassesAndSpecs()[7].image;
//     case 'Rogue':
//       return DalApi.getClassesAndSpecs()[8].image;
//     case 'Shaman':
//       return DalApi.getClassesAndSpecs()[9].image;
//     case 'Warlock':
//       return DalApi.getClassesAndSpecs()[10].image;
//     case 'Warrior':
//       return DalApi.getClassesAndSpecs()[11].image;
//     default:
//       return 'error';
//   }
// };

// const classColor = (pjClass) => {
//   switch (pjClass) {
//     case 'Death Knight':
//       return 'DeathKnight';
//     case 'Demon Hunter':
//       return 'DemonHunter';
//     case 'Druid':
//       return 'Druid';
//     case 'Hunter':
//       return 'Hunter';
//     case 'Mage':
//       return 'Mage';
//     case 'Monk':
//       return 'Monk';
//     case 'Paladin':
//       return 'Paladin';
//     case 'Priest':
//       return 'Priest';
//     case 'Rogue':
//       return 'Rogue';
//     case 'Shaman':
//       return 'Shaman';
//     case 'Warlock':
//       return 'Warlock';
//     case 'Warrior':
//       return 'Warrior';
//     default:
//       return '';
//   }
// };

function PJRow({ name, pjClass, faction, rank, spec, realm, region }) {
  const classOfApi = DalApi.getClassesAndSpecs().filter(
    (elmt) => elmt.name === pjClass
  )[0];
  const specOfClass = classOfApi.specs.filter((cl) => cl.name === spec)[0];

  const history = useHistory();

  // link to player page
  const rowLink = () => {
    history.push(`/player/${region}/${realm}/${name}/`);
  };
  return (
    <tr className="row w-100" onClick={rowLink}>
      <td className="col-1 d-flex align-items-center">{rank}</td>
      <td className="col-5 d-flex align-items-center">
        <strong className={classOfApi.name.replace(' ', '')}>{name}</strong>
      </td>
      <td className="col-2 d-flex align-items-center">{realm}</td>
      <td className="col-3 d-flex align-items-center">
        <img src={classOfApi.image} alt="" height="64px" width="64px" />
        <p>
          <img src={specOfClass.image} alt={name} />
          {spec}
        </p>
      </td>
      <td className="col-1 d-flex align-items-center">
        <FactionIcons faction={faction} />
      </td>
    </tr>
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
