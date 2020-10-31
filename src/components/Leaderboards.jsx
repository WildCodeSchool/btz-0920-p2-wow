import React from 'react';
import { Table } from 'reactstrap';
import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';
import GuildLeaderboardRow from './GuildLeaderboardRow';

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guildResults: [],
      loadingGuilds: true,
      // loadingPlayers: true,
    };
  }

  componentDidMount() {
    DalApi.getTopGuild((data) => {
      this.setState({
        guildResults: data.raidRankings.rankedGuilds,
        loadingGuilds: false,
      });
    });
    // DalApi.getTopPlayer((data) => {
    //   const { rankings } = data;
    //   this.setState({
    //     firstPlayerName: rankings.rankedCharacters[0].character.name,
    //     secondPlayerName: rankings.rankedCharacters[1].character.name,
    //     thirdPlayerName: rankings.rankedCharacters[2].character.name,
    //     fourthPlayerName: rankings.rankedCharacters[3].character.name,
    //     fifthPlayerName: rankings.rankedCharacters[4].character.name,
    //     firstPlayerRealm:
    //       data.rankings.rankedCharacters[0].character.realm.name,
    //     secondPlayerRealm:
    //       data.rankings.rankedCharacters[1].character.realm.name,
    //     thirdPlayerRealm:
    //       data.rankings.rankedCharacters[2].character.realm.name,
    //     fourthPlayerRealm:
    //       data.rankings.rankedCharacters[3].character.realm.name,
    //     fifthPlayerRealm:
    //       data.rankings.rankedCharacters[4].character.realm.name,
    //     firstPlayerRegion:
    //       data.rankings.rankedCharacters[0].character.region.name,
    //     secondPlayerRegion:
    //       data.rankings.rankedCharacters[1].character.region.name,
    //     thirdPlayerRegion:
    //       data.rankings.rankedCharacters[2].character.region.name,
    //     fourthPlayerRegion:
    //       data.rankings.rankedCharacters[3].character.region.name,
    //     fifthPlayerRegion:
    //       data.rankings.rankedCharacters[4].character.region.name,
    //     loadingPlayers: false,
    //   });
    // });
  }

  render() {
    const {
      guildResults,
      // firstPlayerName,
      // secondPlayerName,
      // thirdPlayerName,
      // fourthPlayerName,
      // fifthPlayerName,
      // firstPlayerRealm,
      // secondPlayerRealm,
      // thirdPlayerRealm,
      // fourthPlayerRealm,
      // fifthPlayerRealm,
      // firstPlayerRegion,
      // secondPlayerRegion,
      // thirdPlayerRegion,
      // fourthPlayerRegion,
      // fifthPlayerRegion,
      loadingGuilds,
      // loadingPlayers,
    } = this.state;
    return (
      <div>
        <div className="leaderboard-container container d-flex mt-5 justify-content-center">
          {loadingGuilds ? (
            <LoadingSpinner />
          ) : (
            <div className="d-flex mt-5 align-items-center justify-content-center">
              <Table className="mx-5" hover>
                <thead>
                  <tr>
                    <th className="h2 font-weight-bold col-md-6">
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
                        />
                      );
                    })
                    .filter((_, index) => index < 5)}
                </tbody>
              </Table>
              {/* <Table className="mx-5" hover>
                <thead>
                  <tr>
                    <th className="h2 font-weight-bold col-md-6">
                      Top World Players
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-primary">
                    <th>{firstPlayerName}</th>
                    <th>{firstPlayerRealm}</th>
                    <th>{displaysFlag(firstPlayerRegion)}</th>
                  </tr>
                  <tr>
                    <th>{secondPlayerName}</th>
                    <th>{secondPlayerRealm}</th>
                    <th>{displaysFlag(secondPlayerRegion)}</th>
                  </tr>
                  <tr>
                    <th>{thirdPlayerName}</th>
                    <th>{thirdPlayerRealm}</th>
                    <th>{displaysFlag(thirdPlayerRegion)}</th>
                  </tr>
                  <tr>
                    <th>{fourthPlayerName}</th>
                    <th>{fourthPlayerRealm}</th>
                    <th>{displaysFlag(fourthPlayerRegion)}</th>
                  </tr>
                  <tr>
                    <th>{fifthPlayerName}</th>
                    <th>{fifthPlayerRealm}</th>
                    <th>{displaysFlag(fifthPlayerRegion)}</th>
                  </tr>
                </tbody>
              </Table> */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Leaderboards;
