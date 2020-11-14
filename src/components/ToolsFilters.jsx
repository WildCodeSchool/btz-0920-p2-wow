import { Button, UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import FactionIcons from './flags/FactionIcons';
import pjArrayContext from '../contexts/pjArray';

function ToolsFilters({ results }) {
  const { setFilterRes } = useContext(pjArrayContext);
  // const [activeFaction, setActiveFaction] = useState(null);
  // const [activeSpec, setActiveSpec] = useState(null);

  const factionFilter = (faction) => {
    return faction === ''
      ? setFilterRes(results)
      : setFilterRes(
          results.filter((fact) => fact.character.faction === faction)
        );
  };
  // setFilterRes(results);
  return (
    <>
      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
        <BsThreeDotsVertical />
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card className="bg-transparent border-0">
          <CardBody className="p-0 bg-transparent">
            <Button
              onClick={() => factionFilter('horde')}
              color="secondary"
              className="p-0 bg-transparent border-0 button-hover"
            >
              <FactionIcons faction="horde" />
            </Button>
            <Button
              onClick={() => factionFilter('alliance')}
              color="secondary"
              className="p-0 bg-transparent border-0 button-hover"
            >
              <FactionIcons faction="alliance" />
            </Button>
            <Button
              onClick={() => factionFilter('')}
              color="secondary"
              className="p-0 bg-transparent border-0 button-hover"
            >
              <FactionIcons faction="both" />
            </Button>
          </CardBody>
          {/* <CardBody>
            <Form>
              {classArray.specs.map((res) => {
                const { name } = res;
                return (
                  <FormGroup check inline>
                    <Label check>
                      <Input
                        type="checkbox"
                        onChange={() => classFilter(name)}
                      />
                      {name}
                    </Label>
                  </FormGroup>
                );
              })}
            </Form>
          </CardBody> */}
        </Card>
      </UncontrolledCollapse>
    </>
  );
}

ToolsFilters.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToolsFilters;
