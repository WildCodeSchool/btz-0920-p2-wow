import React from 'react';
import uniqid from 'uniqid';
import { Table } from 'reactstrap';
import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';
import GuildLeaderboardRow from './GuildLeaderboardRow';
import PlayerLeaderboardRow from './PlayerLeaderboardRow';

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guildResults: [],
      loadingGuilds: true,
      loadingPlayers: true,
    };
  }

  componentDidMount() {
    DalApi.getTopGuild((data) => {
      this.setState({
        guildResults: data.raidRankings.rankedGuilds,
        loadingGuilds: false,
      });
    });
    DalApi.getTopPlayer((data) => {
      this.setState({
        playerResults: data.rankings.rankedCharacters,
        loadingPlayers: false,
      });
    });
  }

  render() {
    const {
      guildResults,
      playerResults,
      loadingGuilds,
      loadingPlayers,
    } = this.state;
    return (
      <div>
        <div className="leaderboard-container container d-flex mt-5 justify-content-center">
          {loadingGuilds || loadingPlayers ? (
            <LoadingSpinner />
          ) : (
            <div className="d-flex w-100">
              <Table className="mx-5" w-50 hover>
                <thead>
                  <tr>
                    <th className="h2 font-weight-bold" colSpan={12}>
                      Top World Guilds
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {guildResults
                    .map((result) => {
                      return (
                        <GuildLeaderboardRow
                          name={result.guild.name}
                          realm={result.guild.realm.name}
                          region={result.guild.region.name}
                          key={uniqid()}
                        />
                      );
                    })
                    .filter((_, index) => index < 5)}
                </tbody>
              </Table>
              <Table className="mx-5" w-auto text-nowrap hover>
                <thead>
                  <tr>
                    <th className="h2 font-weight-bold" colSpan={12}>
                      Top World Players
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {playerResults
                    .map((result) => {
                      return (
                        <PlayerLeaderboardRow
                          name={result.character.name}
                          realm={result.character.realm.name}
                          region={result.character.region.name}
                          key={uniqid()}
                        />
                      );
                    })
                    .filter((_, index) => index < 5)}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Leaderboards;
