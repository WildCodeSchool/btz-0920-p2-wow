import { useState } from 'react';
import {
  Collapse,
  Button,
  Card,
  FormGroup,
  Label,
  CustomInput,
} from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';

import DalApi from '../dal/DalApi';

function ToolsFilters() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const classes = DalApi.getClassesAndSpecs();

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        <BsThreeDotsVertical />
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <Button color="secondary" style={{ marginBottom: '1rem' }}>
            {classes.map((classe) => {
              return (
                <>
                  <Button>
                    <img
                      src={classe.image}
                      alt={classe.name}
                      style={{ height: '50px' }}
                      title={classe.name}
                    />
                  </Button>
                  <Collapse isOpen={isOpen}>
                    <Card>
                      <FormGroup>
                        <Label for="exampleCheckbox">Specs</Label>
                        <div>
                          <CustomInput
                            type="checkbox"
                            id="exampleCustomCheckbox"
                            label="Check this custom checkbox"
                          />
                        </div>
                      </FormGroup>
                    </Card>
                  </Collapse>
                </>
              );
            })}
          </Button>
          {/* <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody> */}
        </Card>
      </Collapse>
    </div>
  );
}

export default ToolsFilters;
