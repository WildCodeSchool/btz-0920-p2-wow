import './SearchPage.css';
import PropTypes from 'prop-types';

import guild from '../../img/guild.jpg';

const WildCard = ({ title, height, width }) => {
  const wildCardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.35)),url(${guild})`,
    height: `${height}`,
    width: `${width}`,
  };
  return (
    <div>
      <a
        href="test.com"
        className="wildCard d-flex align-items-center justify-content-center m-3 border border-primary"
        style={wildCardStyle}
      >
        <h2>{title}</h2>
      </a>
    </div>
  );
};

export default WildCard;

WildCard.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
