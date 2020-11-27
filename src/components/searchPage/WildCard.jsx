import PropTypes from 'prop-types';

import './SearchPage.css';

// START COMPONENT
const WildCard = ({ title, image, height, width, handleClick, next }) => {
  const wildCardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)),url(${image})`,
    height: `${height}`,
    width: `${width}`,
    color: 'white',
  };

  // RETURN COMPONENT
  return (
    <button
      onClick={(e) => {
        handleClick(e);
        next();
      }}
      id={title}
      type="button"
      className="wildCard d-flex align-items-center justify-content-center m-3 border border-primary"
      style={wildCardStyle}
    >
      {title}
    </button>
  );
};

// EXPORT COMPONENT
export default WildCard;

// PROPTYPES
WildCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
