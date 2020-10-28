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
      href="http:/test.com"
      xs="4"
      className="opacity-50 d-flex align-items-center justify-content-center m-3 border border-primary"
      style={wildCardStyle}
    >
      <h3 className="display-3">Title</h3>
    </Col>
  );
};

export default WildCard;
