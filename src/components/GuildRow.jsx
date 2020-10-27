//	import React from 'react';
import PropTypes from 'prop-types';

function GuildRow(props) {
  const { name, realm, flag, raidRank } = props;
  return (
    <tr>
      <td>
        <strong>{name}</strong>
      </td>
      <td>
        {name} raid score : {raidRank}
      </td>
      <td>
        <p>{realm}</p> <img src={flag} alt={name} />
      </td>
    </tr>
  );
}

GuildRow.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  raidRank: PropTypes.number.isRequired,
};

//	GuildRow.defaultProps = {
//	  name: '',
//	  realm: '',
//	  flag: '',
//	  raidRank: 0,
//	};

export default GuildRow;
