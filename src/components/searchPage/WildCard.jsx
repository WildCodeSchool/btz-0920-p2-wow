import './SearchPage.css';
import PropTypes from 'prop-types';

const WildCard = ({ title, image, height, width }) => {
  const wildCardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(255, 255,255, 0.25)),url(${image})`,
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
  image: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
