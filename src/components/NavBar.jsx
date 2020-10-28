import { Navbar, NavbarText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar className="bg-primary">
      <NavbarText href="#" className="h1 font-weight-bold">
        World Of Wildcraft
      </NavbarText>
      <FaSearch className="h2" />
    </Navbar>
  );
};

export default NavBar;
