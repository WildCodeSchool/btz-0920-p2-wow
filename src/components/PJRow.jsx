import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import DalApi from '../dal/DalApi';

import './cssPages&Components/ClassColor.css';
import FactionIcons from './flags/FactionIcons';

function PJRow({ name, pjClass, faction, rank, spec, realm, region }) {
  // get class form api static data
  const classOfApi = DalApi.getClassesAndSpecs().filter(
    (elmt) => elmt.name === pjClass
  )[0];

  // get selected spec of classOfApi
  const specOfClass = classOfApi.specs.filter((cl) => cl.name === spec)[0];

  const history = useHistory();

  // link to player page
  const rowLink = () => {
    history.push(`/player/${region}/${realm}/${name}/`);
  };
  return (
    <tr className="row w-100" onClick={rowLink}>
      <td className="col-1 d-flex align-items-center">{rank}</td>
      <td className="col-1 d-flex align-items-center">
        <FactionIcons faction={faction} />
      </td>
      <td className="col-3 d-flex align-items-center">
        <strong className={classOfApi.name.replace(' ', '')}>{name}</strong>
      </td>
      <td className="col-2 d-flex align-items-center">{realm}</td>
      <td className="col-2 d-flex align-items-center">
        <img src={specOfClass.image} alt={name} />
        <span className="ml-2">{spec}</span>
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
