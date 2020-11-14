import { Button, UncontrolledCollapse } from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';

import FactionIcons from './flags/FactionIcons';
import pjArrayContext from '../contexts/pjArray';
import DalApi from '../dal/DalApi';

function ToolsFilters({ results }) {
  const { setFilterRes } = useContext(pjArrayContext);
  const [activeFaction, setActiveFaction] = useState(null);

  // const [activeSpec, setActiveSpec] = useState(null);

  // if (filterRes.length === 0) setFilterRes(results);

  useEffect(() => {
    setFilterRes(
      results.filter((elmt) => {
        return activeFaction === null
          ? true
          : elmt.character.faction === activeFaction;
      })
    );
  }, [activeFaction]);

  return (
    <>
      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
        <BsThreeDotsVertical />
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        {/* choix faction */}
        {DalApi.getFactions().map((faction) => (
          <Button
            className="p-0 bg-transparent border-0 button-hover"
            onClick={() =>
              setActiveFaction(
                activeFaction === faction.slug ? null : faction.slug
              )
            }
          >
            <FactionIcons faction={faction.slug} />
          </Button>
        ))}
      </UncontrolledCollapse>
    </>
  );
}

ToolsFilters.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToolsFilters;
