import PropTypes from 'prop-types';
import { useState } from 'react';
import { GiWorld } from 'react-icons/gi';

import { usa, europe, korea, taiwan, china } from '../../img';

function Flag({ slug, alt }) {
  const [isNull, setIsNull] = useState(false);

  // eslint-disable-next-line consistent-return
  const selectFlag = () => {
    switch (slug) {
      case 'us':
        return usa;
      case 'eu':
        return europe;
      case 'kr':
        return korea;
      case 'cn':
        return china;
      case 'tw':
        return taiwan;
      default:
        setIsNull(true);
        break;
    }
  };
  if (isNull) return <GiWorld />;

  return <img src={selectFlag()} alt={alt} height="40px" width="60px" />;
}

Flag.defaultProps = {
  alt: '',
};

Flag.propTypes = {
  slug: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Flag;
