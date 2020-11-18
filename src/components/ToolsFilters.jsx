import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Button,
  UncontrolledCollapse,
  CardBody,
  Card,
  // Input,
} from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';

import DalApi from '../dal/DalApi';
// import realms from '../dal/realms.json';
import FactionIcons from './flags/FactionIcons';

function ToolsFilters({ results, setFilterRes, setCurrentPage }) {
  const params = useParams();
  const [classArray] = useState(DalApi.getClassesAndSpecsByName(params.class));
  // const [realmsArray] = useState(realms);
  const [faction, setFaction] = useState('');
  const [spec, setSpec] = useState('');

  useEffect(() => {
    let currentResult = results;
    currentResult = currentResult.filter((fact) =>
      faction === '' ? true : fact.character.faction === faction
    );
    currentResult = currentResult.filter((elmt) =>
      spec === '' ? true : elmt.character.spec.slug === spec
    );
    setFilterRes(currentResult);
    setCurrentPage(1);
  }, [faction, spec]);

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
              onClick={() => setFaction('horde')}
              color="secondary"
              className="p-0  border-0 button-hover"
            >
              <FactionIcons faction="horde" />
            </Button>
            <Button
              onClick={() => setFaction('alliance')}
              color="secondary"
              className="p-0  border-0 button-hover"
            >
              <FactionIcons faction="alliance" />
            </Button>
            <Button
              onClick={() => setFaction('')}
              color="secondary"
              className="p-0  border-0 button-hover"
            >
              <FactionIcons faction="both" />
            </Button>
          </CardBody>
          <CardBody>
            {classArray.specs.map((res) => {
              const { name } = res;
              return (
                <Button onClick={() => setSpec(name.toLocaleLowerCase())}>
                  {name}
                </Button>
              );
            })}
            <Button onClick={() => setSpec('')}>Reset</Button>
          </CardBody>
          {/* <CardBody>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </CardBody> */}
        </Card>
      </UncontrolledCollapse>
    </>
  );
}

ToolsFilters.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setFilterRes: PropTypes.func.isRequired,
};

export default ToolsFilters;
