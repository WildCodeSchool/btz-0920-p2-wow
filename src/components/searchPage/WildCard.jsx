import './SearchPage.css';
import { Col } from 'reactstrap';

import guild from '../../img/guild.jpg';

const WildCard = () => {
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
      <a href="http:/test.com" className="display-3">
        Title
      </a>
    </Col>
  );
};

export default WildCard;
