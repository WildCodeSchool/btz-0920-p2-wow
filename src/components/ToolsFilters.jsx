import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Button,
  UncontrolledCollapse,
  ButtonToolbar,
  ButtonGroup,
  Table,
  CustomInput,
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
                </ButtonGroup>
              </td>
              <td>
                <ButtonToolbar className="d-flex flex-column flex-md-row flex-fill">
                  <div className="flex-fill mx-3">
                    <CustomInput
                      id="realmCustomSelect"
                      type="select"
                      name="select"
                      className="text-white bg-secondary"
                      style={{
                        maxHeight: '50px',
                      }}
                      onChange={(e) => setRealm(e.target.value)}
                    >
                      <option value="">All Realms</option>
                      {currentRealmsArray
                        .sort((a, b) =>
                          a.character.realm.name > b.character.realm.name
                            ? 1
                            : -1
                        )
                        .map((serv) => {
                          const { name, slug } = serv.character.realm;
                          return (
                            <option key={slug} value={slug}>
                              {name}
                            </option>
                          );
                        })}
                    </CustomInput>
                  </div>
                </ButtonToolbar>
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
CustomInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired, // radio, checkbox, select, range, switch, file.
  label: PropTypes.string, // used for checkbox and radios
  inline: PropTypes.bool,
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  bsSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.func,
  ]), // for type="select"
  // innerRef would be referenced to select node or input DOM node, depends on type property
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default ToolsFilters;
