import PropTypes from 'prop-types';
import { useState } from 'react';
import { GiWorld } from 'react-icons/gi';

import { allianceIcon, hordeIcon, allianceHordeIcon } from '../../img';

const FactionIcons = ({ faction }) => {
  const [isNull, setIsNull] = useState(false);

  // eslint-disable-next-line consistent-return
  const selectFaction = () => {
    switch (faction) {
      case 'horde':
        return hordeIcon;
      case 'alliance':
        return allianceIcon;
      case 'both':
        return allianceHordeIcon;
      default:
        setIsNull(true);
        break;
    }
  };

  if (isNull) return <GiWorld />;

  return <img src={selectFaction()} style={{ height: '60px' }} alt={faction} />;
};

FactionIcons.propTypes = {
  faction: PropTypes.oneOf(['horde', 'alliance', 'both']).isRequired,
};

export default FactionIcons;
