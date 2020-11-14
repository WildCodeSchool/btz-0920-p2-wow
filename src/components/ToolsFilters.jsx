import { Button, UncontrolledCollapse } from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';

import FactionIcons from './flags/FactionIcons';
import pjArrayContext from '../contexts/pjArray';
import DalApi from '../dal/DalApi';

function ToolsFilters({ results, playerClass }) {
  const { setFilterRes, setCurrentPage } = useContext(pjArrayContext);
  const [activeFaction, setActiveFaction] = useState(null);
  const [activeSpecs, setActiveSpecs] = useState([]);

  const { specs } = DalApi.getClassesAndSpecsByName(playerClass);

  useEffect(() => {
    setFilterRes(
      results
        .filter((elmt) => {
          return activeFaction === null
            ? true
            : elmt.character.faction === activeFaction;
        })
        .filter((elmt) => {
          // search for active spec
          return (
            activeSpecs.indexOf(elmt.character.spec.name) !== -1 ||
            activeSpecs.length === 0
          );
        })
    );
    setCurrentPage(1);
  }, [activeFaction, activeSpecs]);

  return (
    <>
      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
        <BsThreeDotsVertical />
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        {/* choix faction */}
        <div>
          {DalApi.getFactions().map((faction) => (
            <Button
              className="p-0 bg-transparent border-0 button-hover"
              onClick={() =>
                setActiveFaction(
                  activeFaction === faction.slug ? null : faction.slug
                )
              }
              title={faction.name}
            >
              <FactionIcons faction={faction.slug} />
            </Button>
          ))}
        </div>
        <div>
          {specs.map((spec) => {
            return (
              <Button
                className="p-0 bg-transparent border-0 button-hover"
                onClick={() => {
                  const index = activeSpecs.indexOf(spec.name);
                  return setActiveSpecs(
                    index === -1
                      ? activeSpecs.concat(spec.name)
                      : activeSpecs.filter((specName) => specName !== spec.name)
                  );
                }}
              >
                <img src={spec.image} alt={spec.name} title={spec.name} />
              </Button>
            );
          })}
        </div>
      </UncontrolledCollapse>
    </>
  );
}

ToolsFilters.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  playerClass: PropTypes.string.isRequired,
};

export default ToolsFilters;
