import PropTypes from 'prop-types';
import { useState } from 'react';
import { GiWorld } from 'react-icons/gi';

import { alliance, horde } from '../../img';

const Faction = ({ faction }) => {
  const [isNull, setIsNull] = useState(false);

  // eslint-disable-next-line consistent-return
  const selectFaction = () => {
    switch (faction) {
      case 'horde':
        return horde;
      case 'alliance':
        return alliance;
      default:
        setIsNull(true);
        break;
    }
  };

  if (isNull) return <GiWorld />;

  return (
    <img src={selectFaction()} alt={faction} style={{ height: '100px' }} />
  );
};

Faction.propTypes = {
  faction: PropTypes.oneOf(['horde', 'alliance']).isRequired,
};

export default Faction;
