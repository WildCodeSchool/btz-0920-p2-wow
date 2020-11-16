import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  Button,
  UncontrolledCollapse,
  CardBody,
  Card,
  // Form,
  // FormGroup,
  // Label,
  // Input,
} from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';

import DalApi from '../dal/DalApi';
import FactionIcons from './flags/FactionIcons';

function ToolsFilters({ results, setFilterRes }) {
  const params = useParams();
  const [classArray] = useState(DalApi.getClassesAndSpecsByName(params.class));

  // const [currentResult, setCurrentResult] = useState([]);
  //   console.log(currentResult);

  // useEffect(() => {
  //   setCurrentResult(results);
  // }, []);

  const factionFilter = (faction) => {
    return faction === ''
      ? setFilterRes(results)
      : setFilterRes(
          results.filter((fact) => fact.character.faction === faction)
        );
  };

  const classFilter = (parm) => {
    setFilterRes(
      results.filter(
        (cl) => cl.character.spec.slug === parm.toLowerCase().replace(' ', '-')
      )
    );
  };

  // setFilterRes(currentResult);
  return (
    <>
      <Button
        color="primary"
        id="toggler"
        style={{ marginBottom: '1rem', height: '60px', width: '60px' }}
      >
        <BsThreeDotsVertical />
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody className="p-0 ">
            <Button
              onClick={() => factionFilter('horde')}
              color="secondary"
              className="p-0  border-0 button-hover"
            >
              <FactionIcons faction="horde" />
            </Button>
            <Button
              onClick={() => factionFilter('alliance')}
              color="secondary"
              className="p-0  border-0 button-hover"
            >
              <FactionIcons faction="alliance" />
            </Button>
            <Button
              onClick={() => factionFilter('')}
              color="secondary"
              className="p-0  border-0 button-hover"
            >
              <FactionIcons faction="both" />
            </Button>
          </CardBody>
          <CardBody>
            {classArray.specs.map((res) => {
              const { name } = res;
              return <Button onClick={() => classFilter(name)}>{name}</Button>;
            })}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </>
  );
}

ToolsFilters.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilterRes: PropTypes.func.isRequired,
};

export default ToolsFilters;
