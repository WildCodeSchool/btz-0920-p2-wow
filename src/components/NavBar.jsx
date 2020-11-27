import { Navbar } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import WoWildCraftLogo from './flags/WoWildCraftLogo';

const NavBar = () => {
  return (
    <Navbar className="bg-secondary py-0 fixed-top" style={{ height: '100px' }}>
      <Link to="/">
        <WoWildCraftLogo />
      </Link>
      <Link to="/Search">
        <FaSearch className="h2" style={{ color: 'white' }} />
      </Link>
    </Navbar>
  );
};

export default NavBar;
