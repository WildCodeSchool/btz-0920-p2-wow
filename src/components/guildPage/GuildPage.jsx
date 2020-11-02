import { Component } from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Hr from '../Hr';
import DalApi from '../../dal/DalApi';
import GuildRanking from './GuildRanking';

class GuildPage extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-console
    console.log(props);
    this.state = {
      guild: null,
    };
    this.refreshState = this.refreshState.bind(this);
  }

  componentDidMount() {
    const {
      match: { name, realm, region },
    } = this.props;
    // eslint-disable-next-line no-console
    console.log(`${name}, ${realm}, ${region}`);

    DalApi.getGuild(this.refreshState, region, realm, name);
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

GuildPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default GuildPage;
