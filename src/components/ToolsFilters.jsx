// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
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

//  il faut arriver à permettre de conserver les précédent paramettre de filtre et d'en rajouter de nouveau.

// import DalApi from '../dal/DalApi';
import FactionIcons from './flags/FactionIcons';

function ToolsFilters({ results, setFilterRes }) {
  // const params = useParams();
  // const [classArray] = useState(DalApi.getClassesAndSpecsByName(params.class));

  // const [currentResult, setCurrentResult] = useState(results);

  const factionFilter = (faction) => {
    return faction === ''
      ? setFilterRes(results) // replace setFilterRes by setCurrentResult
      : setFilterRes(
          // replace setFilterRes by setCurrentResult
          results.filter((fact) => fact.character.faction === faction)
        );
  };

  // const classFilter = (parm) => {
  //   currentResult.splice(
  //     1,
  //     0,
  //     results.filter(
  //       (cl) => cl.character.class.slug === parm.toLowerCase().replace(' ', '-')
  //     )
  //   );
  //   setFilterRes(currentResult);
  // };

  return (
    <>
      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
        <BsThreeDotsVertical />
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card className="bg-transparent">
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
  setFilterRes: PropTypes.func.isRequired,
};

export default ToolsFilters;
