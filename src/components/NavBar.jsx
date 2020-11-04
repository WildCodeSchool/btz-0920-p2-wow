import { Navbar, NavbarText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import WoWildCraftLogo from './flags/WoWildCraftLogo';

const NavBar = () => {
  return (
    <Navbar className="bg-primary">
      <NavbarText href="#" className="h1 font-weight-bold">
        <Link to="/">
          <WoWildCraftLogo />
        </Link>
      </NavbarText>
      <Link to="/SearchPage">
        <FaSearch className="h2" />
      </Link>
    </Navbar>
  );
};

export default NavBar;
