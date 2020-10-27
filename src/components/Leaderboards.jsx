import React from 'react';
import { Navbar, NavbarText, Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar className="bg-primary">
          <NavbarText href="#" className="h1">
            World Of Wildcraft
          </NavbarText>
          <FaSearch className="h2" />
        </Navbar>
        <div className="container d-flex">
          <Table dark className="table-striped">
            <thead>
              <tr>
                <th>Top World Guilds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
            </tbody>
          </Table>
          <Table className="table-striped">
            <thead>
              <tr>
                <th>Top World Players</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>Complexity Limit</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Leaderboards;
