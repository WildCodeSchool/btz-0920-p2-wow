import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Button,
  UncontrolledCollapse,
  // CardBody,
  // Card,
  ButtonToolbar,
  ButtonGroup,
  Input,
} from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';

import { resetIcon } from '../img';
import DalApi from '../dal/DalApi';
// import realms from '../dal/realms.json';
import FactionIcons from './flags/FactionIcons';

function ToolsFilters({ results, setFilterRes, setCurrentPage }) {
  const params = useParams();
  const [classArray] = useState(DalApi.getClassesAndSpecsByName(params.class));
  // const [realmsArray] = useState(realms);
  const [faction, setFaction] = useState('');
  const [spec, setSpec] = useState('');
  const [realm, setRealm] = useState('');

  useEffect(() => {
    let currentResult = results;
    currentResult = currentResult.filter((fact) =>
      faction === '' ? true : fact.character.faction === faction
    );
    currentResult = currentResult.filter((elmt) =>
      spec === '' ? true : elmt.character.spec.slug === spec
    );
    currentResult = currentResult.filter((serv) =>
      realm === '' ? true : serv.character.realm.slug === realm
    );
    setFilterRes(currentResult);
    setCurrentPage(1);
  }, [faction, spec, realm]);

  return (
    <div
      className="d-flex flex-column w-100 col-12 wrap-nowrap"
      style={{ height: '138px' }}
    >
      <Button
        color="primary"
        id="toggler"
        style={{ marginBottom: '1rem', height: '60px', width: '60px' }}
        className="align-self-center p-0 rounded-circle"
      >
        <BsThreeDotsVertical style={{ height: '50px', width: '50px' }} />
      </Button>
      <UncontrolledCollapse className="w-100" toggler="#toggler">
        {/* <Card> */}
        <ButtonToolbar className="d-flex w-100">
          <ButtonGroup className="flex-fill">
            <h6 className="px-0 mb-0 col-5 d-flex align-items-center justify-content-center">
              Factions :
            </h6>
            {/* <CardBody className="p-0 "> */}
            <Button
              onClick={() => setFaction('horde')}
              color="secondary"
              className="p-0 border-0 bg-transparent"
              height="10px"
            >
              <FactionIcons faction="horde" />
            </Button>
            <Button
              onClick={() => setFaction('alliance')}
              color="secondary"
              className="p-0 border-0 bg-transparent"
              height="10px"
            >
              <FactionIcons faction="alliance" />
            </Button>
            <Button
              onClick={() => setFaction('')}
              color="secondary"
              className="p-0 border-0 bg-transparent"
              height="10px"
            >
              <FactionIcons faction="both" />
            </Button>
          </ButtonGroup>
          {/* </CardBody> */}
          <ButtonGroup className="flex-fill">
            {/* <CardBody> */}
            <h6 className="px-0 mb-0 col-4 d-flex align-items-center justify-content-center">
              Class Specs :
            </h6>
            {classArray.specs.map((res) => {
              const { name, image } = res;
              return (
                <Button
                  className="py-0 px-1 border-0 bg-transparent"
                  onClick={() =>
                    setSpec(name.toLocaleLowerCase().replace(' ', '-'))
                  }
                >
                  <img src={image} alt={name} title={name} height="50px" />
                </Button>
              );
            })}
            <Button
              className="py-0 px-1 border-0 bg-transparent"
              onClick={() => setSpec('')}
            >
              <img
                src={resetIcon}
                alt="reset button"
                title="Reset Class Spec"
              />
            </Button>
            {/* </CardBody> */}
          </ButtonGroup>
          <div className="flex-fill mx-3">
            <h6 className="px-0 mb-0 col-4 d-flex align-items-center justify-content-center">
              Realms :
            </h6>
            <Input
              // className="col-8"
              type="select"
              name="select"
              className="bg-secondary text-white"
              style={{ maxHeight: '50px' }}
            >
              <option onClick={() => setRealm('')}>All Realms</option>
              {results.map((serv) => {
                const { name, slug } = serv.character.realm;
                return <option onClick={() => setRealm(slug)}>{name}</option>;
              })}
            </Input>
          </div>
        </ButtonToolbar>
        {/* </Card> */}
      </UncontrolledCollapse>
    </div>
  );
}

ToolsFilters.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setFilterRes: PropTypes.func.isRequired,
};

export default ToolsFilters;
