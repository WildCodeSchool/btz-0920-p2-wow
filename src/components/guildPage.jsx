import { Component } from 'react';
import { Navbar } from 'reactstrap';
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
    // console.log(data);
    this.setState({ guild: data });
  }

  render() {
    const { guild } = this.state;
    return (
      <div>
        <Navbar />
        <div>{guild ? guild.guildDetails.guild.name : 'Loading ...'}</div>
      </div>
    );
  }
}

export default GuildPage;
