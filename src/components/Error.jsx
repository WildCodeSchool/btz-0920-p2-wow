import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom';

const Error = ({ msg }) => {
  return (
    <Alert color="danger" style={{ marginTop: '100px' }}>
      <h4 className="alert-heading">Oups</h4>
      <p>{msg}</p>
      <hr />
      <p className="mb-0">
        Try reloading the page or call the debugger by clicking on the button
      </p>
      <Button tag={Link} to="/debugger" className="mt-2 text-decoration-none">
        Leeeroyyyy Jenkins
      </Button>
    </Alert>
  );
};

Error.defaultProps = {
  msg: '',
};

Error.propTypes = {
  msg: PropTypes.string,
};

export default Error;
