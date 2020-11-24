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
  Table,
} from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';

import { resetIcon } from '../img';
import DalApi from '../dal/DalApi';
import FactionIcons from './flags/FactionIcons';

function ToolsFilters({ results, setFilterRes, setCurrentPage }) {
  const params = useParams();
  const [classArray] = useState(DalApi.getClassesAndSpecsByName(params.class));
  const [faction, setFaction] = useState('');
  const [spec, setSpec] = useState('');
  const [realm, setRealm] = useState('');
  const [currentRealmsArray, setCurrentRealmsArray] = useState([]);

  useEffect(() => {
    let currentResult = results;
    currentResult = currentResult.filter((fact) =>
      faction === '' ? true : fact.character.faction === faction
    );
    currentResult = currentResult.filter((elmt) =>
      spec === '' ? true : elmt.character.spec.slug === spec
    );

    const tempArray = [];
    setCurrentRealmsArray(
      currentResult.filter((realmSlug) => {
        if (tempArray.indexOf(realmSlug.character.realm.slug) === -1) {
          tempArray.push(realmSlug.character.realm.slug);
          return true;
        }
        return false;
      })
    );

    currentResult = currentResult.filter((serv) =>
      realm === '' ? true : serv.character.realm.slug === realm
    );
    setFilterRes(currentResult);
    setCurrentPage(1);
  }, [faction, spec, realm, results]);

  return (
    <div className="d-flex flex-column w-100 col-12 wrap-nowrap">
      <Button
        color="primary"
        id="toggler"
        style={{ marginBottom: '1rem', height: '50px', width: '50px' }}
        className="align-self-center p-0"
      >
        <BsThreeDotsVertical style={{ height: '30px', width: '30px' }} />
      </Button>
      <UncontrolledCollapse className="w-100" toggler="#toggler">
        {/* <Card> */}
        <Table borderless>
          <thead>
            <tr className="table-primary">
              <th>Factions</th>
              <th>Specs</th>
              <th>Realms</th>
              <th>Reset</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-secondary">
              <td>
                <ButtonGroup className="d-flex flex-column flex-md-row flex-fill">
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
                    className="p-0 m-1 border-0 bg-transparent"
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
              </td>
              <td>
                <ButtonGroup className="d-flex flex-column flex-md-row flex-fill">
                  {classArray.specs.map((res) => {
                    const { name, image } = res;
                    return (
                      <Button
                        className="py-0 m-1 px-1 border-0 bg-transparent"
                        key={image}
                        onClick={() =>
                          setSpec(name.toLocaleLowerCase().replace(' ', '-'))
                        }
                      >
                        <img
                          src={image}
                          alt={name}
                          title={name}
                          height="40px"
                        />
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </td>
              <td>
                <ButtonToolbar className="d-flex flex-column flex-md-row flex-fill">
                  <div className="flex-fill mx-3">
                    <Input
                      type="select"
                      name="select"
                      className="bg-secondary text-white"
                      style={{ maxHeight: '50px' }}
                    >
                      <option onClick={() => setRealm('')}>All Realms</option>
                      {currentRealmsArray.map((serv) => {
                        const { name, slug } = serv.character.realm;
                        return (
                          <option onClick={() => setRealm(slug)}>{name}</option>
                        );
                      })}
                    </Input>
                  </div>
                </ButtonToolbar>
              </td>
              <td>
                <Button
                  className="py-0 px-1 border-0 bg-transparent"
                  onClick={() => setSpec('')}
                >
                  <img
                    src={resetIcon}
                    alt="reset button"
                    title="Reset Class Spec"
                    height="40px"
                  />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
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
