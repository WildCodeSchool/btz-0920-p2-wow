import React from 'react';
import { Table } from 'reactstrap';
import { GiEuropeanFlag, GiUsaFlag, GiEarthAsiaOceania } from 'react-icons/gi';
import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';

// Display flag image per region
const displaysFlag = (region) => {
  switch (region) {
    case 'Europe':
      return <GiEuropeanFlag />;
    case 'United States & Oceania':
      return <GiUsaFlag />;
    case 'China':
      return <GiEarthAsiaOceania />;
    case 'Russian':
      return <GiEuropeanFlag />;
    default:
      return 'error';
  }
};

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingGuilds: true,
      loadingPlayers: true,
    };
  }

  componentDidMount() {
    DalApi.getTopGuild((data) => {
      const { raidRankings } = data;
      this.setState({
        firstName: raidRankings.rankedGuilds[0].guild.name,
        firstRegion: raidRankings.rankedGuilds[0].guild.region.name,
        firstRealm: raidRankings.rankedGuilds[0].guild.realm.name,
        secondName: raidRankings.rankedGuilds[1].guild.name,
        secondRegion: raidRankings.rankedGuilds[1].guild.region.name,
        secondRealm: raidRankings.rankedGuilds[1].guild.realm.name,
        thirdName: raidRankings.rankedGuilds[2].guild.name,
        thirdRegion: raidRankings.rankedGuilds[2].guild.region.name,
        thirdRealm: raidRankings.rankedGuilds[2].guild.realm.name,
        fourthName: raidRankings.rankedGuilds[3].guild.name,
        fourthRegion: raidRankings.rankedGuilds[3].guild.region.name,
        fourthRealm: raidRankings.rankedGuilds[3].guild.realm.name,
        fifthName: raidRankings.rankedGuilds[4].guild.name,
        fifthRegion: raidRankings.rankedGuilds[4].guild.region.name,
        fifthRealm: raidRankings.rankedGuilds[4].guild.realm.name,
        loadingGuilds: false,
      });
    });
    DalApi.getTopPlayer((data) => {
      const { rankings } = data;
      this.setState({
        firstPlayerName: rankings.rankedCharacters[0].character.name,
        secondPlayerName: rankings.rankedCharacters[1].character.name,
        thirdPlayerName: rankings.rankedCharacters[2].character.name,
        fourthPlayerName: rankings.rankedCharacters[3].character.name,
        fifthPlayerName: rankings.rankedCharacters[4].character.name,
        firstPlayerRealm:
          data.rankings.rankedCharacters[0].character.realm.name,
        secondPlayerRealm:
          data.rankings.rankedCharacters[1].character.realm.name,
        thirdPlayerRealm:
          data.rankings.rankedCharacters[2].character.realm.name,
        fourthPlayerRealm:
          data.rankings.rankedCharacters[3].character.realm.name,
        fifthPlayerRealm:
          data.rankings.rankedCharacters[4].character.realm.name,
        firstPlayerRegion:
          data.rankings.rankedCharacters[0].character.region.name,
        secondPlayerRegion:
          data.rankings.rankedCharacters[1].character.region.name,
        thirdPlayerRegion:
          data.rankings.rankedCharacters[2].character.region.name,
        fourthPlayerRegion:
          data.rankings.rankedCharacters[3].character.region.name,
        fifthPlayerRegion:
          data.rankings.rankedCharacters[4].character.region.name,
        loadingPlayers: false,
      });
    });
  }

  render() {
    const {
      firstName,
      secondName,
      thirdName,
      fourthName,
      fifthName,
      firstRegion,
      secondRegion,
      thirdRegion,
      fourthRegion,
      fifthRegion,
      firstRealm,
      secondRealm,
      thirdRealm,
      fourthRealm,
      fifthRealm,
      firstPlayerName,
      secondPlayerName,
      thirdPlayerName,
      fourthPlayerName,
      fifthPlayerName,
      firstPlayerRealm,
      secondPlayerRealm,
      thirdPlayerRealm,
      fourthPlayerRealm,
      fifthPlayerRealm,
      firstPlayerRegion,
      secondPlayerRegion,
      thirdPlayerRegion,
      fourthPlayerRegion,
      fifthPlayerRegion,
      loadingGuilds,
      loadingPlayers,
    } = this.state;
    return (
      <div>
        <div className="leaderboard-container container d-flex mt-5 align-items-center justify-content-center">
          {loadingGuilds || loadingPlayers ? (
            <LoadingSpinner />
          ) : (
            <div className="d-flex mt-5 align-items-center justify-content-center">
              <Table className="table-striped mx-5">
                <thead>
                  <tr>
                    <th className="h2 font-weight-bold col-md-6">
                      Top World Guilds
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-primary">
                    <th>{firstName}</th>
                    <th>{firstRealm}</th>
                    <th>{displaysFlag(firstRegion)}</th>
                  </tr>
                  <tr>
                    <th>{secondName}</th>
                    <th className="px-0">{secondRealm}</th>
                    <th>{displaysFlag(secondRegion)}</th>
                  </tr>
                  <tr>
                    <th>{thirdName}</th>
                    <th>{thirdRealm}</th>
                    <th>{displaysFlag(thirdRegion)}</th>
                  </tr>
                  <tr>
                    <th>{fourthName}</th>
                    <th>{fourthRealm}</th>
                    <th>{displaysFlag(fourthRegion)}</th>
                  </tr>
                  <tr>
                    <th>{fifthName}</th>
                    <th>{fifthRealm}</th>
                    <th>{displaysFlag(fifthRegion)}</th>
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
              </Table>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Leaderboards;
