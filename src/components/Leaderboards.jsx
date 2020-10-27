import React from 'react';
import { Navbar, NavbarText, Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import Axios from 'axios';

const api =
  'https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=world';

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 'blabla',
      second: 'ljxfks',
    };
  }

  componentDidMount() {
    Axios.get(api)
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          first: data.raidRankings[0].guild,
          second: data.raidRankings[1].guild,
        })
      );
  }

  render() {
    const { first, second } = this.state;
    return (
      <div>
        <Navbar className="bg-primary">
          <NavbarText href="#" className="h1 font-weight-bold">
            World Of Wildcraft
          </NavbarText>
          <FaSearch className="h2" />
        </Navbar>
        <div className="leaderboard-container container d-flex mt-5 align-items-center">
          <Table className="table-striped mx-5">
            <thead>
              <tr>
                <th className="h2 font-weight-bold ">Top World Guilds</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary">
                <th>{first.name}</th>
                <th>Illidan</th>
                <th>US</th>
              </tr>
              <tr>
                <th>{second.name}</th>
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
          <Table className="table-striped mx-5">
            <thead>
              <tr>
                <th className="h2 font-weight-bold">Top World Players</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary">
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
