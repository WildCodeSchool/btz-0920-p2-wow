import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const Error = ({ msg }) => {
  return (
    <Alert color="danger" style={{ marginTop: '100px' }}>
      <h4 className="alert-heading">Oups</h4>
      <p>{msg}</p>
      <hr />
      <p className="mb-0">Try reloading the page</p>
    </Alert>
  );
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
