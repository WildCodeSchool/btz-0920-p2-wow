import { Component } from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
import Hr from './Hr';
import DalApi from '../dal/DalApi';
import GuildRanking from './GuildRanking';

class GuildPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guild: null,
    };
    this.refreshState = this.refreshState.bind(this);
  }

  componentDidMount() {
    DalApi.getGuild(this.refreshState, 'us', 'illidan', 'Complexity Limit');
  }

  refreshState(data) {
    this.setState({ guild: data.guildDetails });
  }

  render() {
    const { guild } = this.state;
    // console.log(guild);
    if (!guild) return 'Loading ...';
    return (
      <div>
        <Navbar />
        <div>{guild.guild.name}</div>
        <Container>
          <Row>
            <Col sm={4}>{guild.guild.region.name}</Col>
            <Col sm={4}>{guild.guild.realm.name}</Col>
            <Col sm={4}>{guild.guild.faction}</Col>
          </Row>
        </Container>
        <Hr />
        <Container>
          <GuildRanking
            raidRankings={guild.raidRankings}
            raidProgress={guild.raidProgress}
          />
        </Container>
      </div>
    );
  }
}

export default GuildPage;
