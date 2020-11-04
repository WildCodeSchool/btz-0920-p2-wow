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
      <Link to="/SearchPage">
        <FaSearch className="h2" />
      </Link>
    </Navbar>
  );
};

export default NavBar;
