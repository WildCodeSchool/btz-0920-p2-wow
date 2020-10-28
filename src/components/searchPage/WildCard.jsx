import './SearchPage.css';
import PropTypes from 'prop-types';

import guild from '../../img/guild.jpg';

const WildCard = ({ title, height, width }) => {
  const wildCardStyle = {
    backgroundImage: `url(${guild})`,
    height: `${height}`,
    width: `${width}`,
  };
  return (
    <div
      xs="6"
      className="opacity-50 d-flex align-items-center justify-content-center m-3 border border-primary"
      style={wildCardStyle}
    >
      <h3 className="display-4">{title}</h3>
    </div>
  );
};

export default WildCard;

WildCard.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
