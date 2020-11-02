import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from 'reactstrap';
import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';
import GuildLeaderboardRow from './GuildLeaderboardRow';
import PlayerLeaderboardRow from './PlayerLeaderboardRow';

const Leaderboards = () => {
  const [guildResults, setGuildResults] = useState([]);
  const [playerResults, setPlayerResults] = useState([]);
  const [loadingGuilds, setLoadingGuilds] = useState(true);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [dropdownOpen, setOpen] = useState(false);
  const [playersToDisplay, setPlayersToDisplay] = useState(5);

  useEffect(() => {
    return (
      DalApi.getTopGuild((data) => {
        setGuildResults(data.raidRankings.rankedGuilds);
        setLoadingGuilds(false);
      }),
      []
    );
  });

  useEffect(() => {
    return (
      DalApi.getTopPlayer((data) => {
        setPlayerResults(data.rankings.rankedCharacters);
        setLoadingPlayers(false);
      }),
      []
    );
  });

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div>
      <div className="leaderboard-container container d-flex mt-5 justify-content-center overflow-hidden">
        {loadingGuilds || loadingPlayers ? (
          <LoadingSpinner />
        ) : (
          <div className="d-flex w-100 flex-wrap">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Show more</DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={(e) => setPlayersToDisplay(e.target.value)}
                >
                  5
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => setPlayersToDisplay(e.target.value)}
                >
                  10
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => setPlayersToDisplay(e.target.value)}
                >
                  15
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => setPlayersToDisplay(e.target.value)}
                >
                  20
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Table className="mx-5 w-100" hover>
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
            <Table className="mx-5 w-100 text-nowrap" hover>
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
                  .filter((_, index) => index < playersToDisplay)}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};
export default Leaderboards;
// class Leaderboards extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       guildResults: [],
//       loadingGuilds: true,
//       loadingPlayers: true,
//       dropdownOpen: false,
//       playersToDisplay: 5,
//     };
//     this.toggle = this.toggle.bind(this);
//   }

//   componentDidMount() {
//     DalApi.getTopGuild((data) => {
//       this.setState({
//         guildResults: data.raidRankings.rankedGuilds,
//         loadingGuilds: false,
//       });
//     });
//     DalApi.getTopPlayer((data) => {
//       this.setState({
//         playerResults: data.rankings.rankedCharacters,
//         loadingPlayers: false,
//       });
//     });
//   }

//   toggle() {
//     const { dropdownOpen } = this.state;
//     this.setState({ dropdownOpen: !dropdownOpen });
//   }

//   render() {
//     const {
//       guildResults,
//       playerResults,
//       loadingGuilds,
//       loadingPlayers,
//       dropdownOpen,
//       playersToDisplay,
//     } = this.state;
//     return (
//       <div>
//         <div className="leaderboard-container container d-flex mt-5 justify-content-center overflow-hidden">
//           {loadingGuilds || loadingPlayers ? (
//             <LoadingSpinner />
//           ) : (
//             <div className="d-flex w-100 flex-wrap">
//               <ButtonDropdown isOpen={dropdownOpen} onClick={this.toggle}>
//                 <DropdownToggle caret>5</DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem>10</DropdownItem>
//                   <DropdownItem>15</DropdownItem>
//                   <DropdownItem>20</DropdownItem>
//                 </DropdownMenu>
//               </ButtonDropdown>
//               <Table className="mx-5 w-100" hover>
//                 <thead>
//                   <tr>
//                     <th className="h2 font-weight-bold" colSpan={12}>
//                       Top World Guilds
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {guildResults
//                     .map((result) => {
//                       return (
//                         <GuildLeaderboardRow
//                           name={result.guild.name}
//                           realm={result.guild.realm.name}
//                           region={result.guild.region.name}
//                           key={uniqid()}
//                         />
//                       );
//                     })
//                     .filter((_, index) => index < 5)}
//                 </tbody>
//               </Table>
//               <Table className="mx-5 w-100 text-nowrap" hover>
//                 <thead>
//                   <tr>
//                     <th className="h2 font-weight-bold" colSpan={12}>
//                       Top World Players
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {playerResults
//                     .map((result) => {
//                       return (
//                         <PlayerLeaderboardRow
//                           name={result.character.name}
//                           realm={result.character.realm.name}
//                           region={result.character.region.name}
//                           key={uniqid()}
//                         />
//                       );
//                     })
//                     .filter((_, index) => index < playersToDisplay)}
//                 </tbody>
//               </Table>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default Leaderboards;
