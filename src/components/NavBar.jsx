import { Navbar } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import WoWildCraftLogo from './flags/WoWildCraftLogo';

const NavBar = () => {
  return (
    <Navbar className="bg-secondary py-0 fixed-top">
      <Link to="/">
        <WoWildCraftLogo />
      </Link>
      <Link to="/search">
        <FaSearch className="h2" />
      </Link>
    </Navbar>
  );
};

export default NavBar;
