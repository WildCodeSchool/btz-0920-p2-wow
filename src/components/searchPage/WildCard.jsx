import './SearchPage.css';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

import guild from '../../img/guild.jpg';

const WildCard = ({ url, title }) => {
  const wildCardStyle = {
    backgroundImage: `url(${guild})`,
    height: '20rem',
  };

  return (
    <Col
      xs="4"
      className="opacity-50 d-flex align-items-center justify-content-center m-3 border border-primary"
      style={wildCardStyle}
    >
      <a href={url}>
        <h3 className="display-3">{title}</h3>
      </a>
    </Col>
  );
};

export default WildCard;

WildCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
