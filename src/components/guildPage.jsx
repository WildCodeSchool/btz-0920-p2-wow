import { Component } from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
import Hr from './Hr';
import DalApi from '../dal/DalApi';

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
    this.setState({ guild: data });
  }

  render() {
    const { guild } = this.state;
    if (!guild) return 'Loading ...';
    return (
      <div>
        <Navbar />
        <div>{guild.guildDetails.guild.name}</div>
        <Container>
          <Row>
            <Col sm={4}>{guild.guildDetails.guild.region.name}</Col>
            <Col sm={4}>{guild.guildDetails.guild.realm.name}</Col>
            <Col sm={4}>{guild.guildDetails.guild.faction}</Col>
          </Row>
        </Container>
        <Hr />
      </div>
    );
  }
}

export default GuildPage;
