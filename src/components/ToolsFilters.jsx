import { useEffect, useState } from 'react';
import { Collapse, Button } from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import FactionIcons from './flags/FactionIcons';

function ToolsFilters(results) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [factionState] = useState(results);

  // console.log(factionState.results[0].character.faction);

  const handleClick = () => {
    useEffect(() => {
      factionState.results.filter(
        (elmt) => elmt.character.faction === Button.target.value
      );
    }, []);
  };

  // const toto = factionState.results.filter(
  //   (pjFaction) => pjFaction.character.faction === 'horde'
  // );

  // console.log(toto);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        <BsThreeDotsVertical />
      </Button>
      <Collapse isOpen={isOpen}>
        <Button
          value="horde"
          onClick={handleClick}
          color="secondary"
          className="p-0"
        >
          <FactionIcons faction="horde" />
        </Button>
        <Button
          value="alliance"
          onClick={handleClick}
          color="secondary"
          className="p-0"
        >
          <FactionIcons faction="alliance" />
        </Button>
      </Collapse>
    </div>
  );
}

export default ToolsFilters;
