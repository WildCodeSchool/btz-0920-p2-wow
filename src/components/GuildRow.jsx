import PropTypes from 'prop-types';
import { GiWorld } from 'react-icons/gi';

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
      return <GiWorld />;
  }
};

function GuildRow(props) {
  const { name, realm, slug, rank } = props;
  return (
    <tr>
      <td>{rank}</td>
      <th>
        <strong>{name}</strong>
      </th>
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
  rank: PropTypes.number.isRequired,
};

export default GuildRow;
