import PropTypes from 'prop-types';

import EuroFlag from './EuroFlag';
import ChinaFlag from './ChinaFlag';
import UsFlag from './UsFlag';

const flag = (slug) => {
  switch (slug) {
    case 'eu':
      return <EuroFlag />;
    case 'us':
      return <UsFlag />;
    case 'ch':
      return <ChinaFlag />;
    default:
      return 'error';
  }
};

function GuildRow(props) {
  const { name, realm, slug } = props;
  return (
    <tr>
      <td>
        <strong>{name}</strong>
      </td>
      <td>
        <p>{realm}</p>
      </td>
      <td>{flag(slug)}</td>
    </tr>
  );
}

GuildRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default GuildRow;
