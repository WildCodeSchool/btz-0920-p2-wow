import { Navbar, NavbarText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className="bg-primary">
      <NavbarText href="#" className="h1 font-weight-bold">
        <Link to="/">
          <h1>World Of Wildcraft</h1>
        </Link>
      </NavbarText>
      <NavbarText href="#" className="h1 font-weight-bold">
        <Link to="/SearchPage">
          <h1>test search</h1>
        </Link>
      </NavbarText>
      <FaSearch className="h2" />
    </Navbar>
  );
};

export default NavBar;
