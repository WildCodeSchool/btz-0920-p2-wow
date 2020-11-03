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
  const [guildsToDisplay, setGuildsToDisplay] = useState(5);
  const [dropdownItems] = useState([5, 10, 15, 20]);

  useEffect(() => {
    DalApi.getTopGuild((data) => {
      setGuildResults(data.raidRankings.rankedGuilds);
      setLoadingGuilds(false);
    });
  }, []);

  useEffect(() => {
    DalApi.getTopPlayer((data) => {
      setPlayerResults(data.rankings.rankedCharacters);
      setLoadingPlayers(false);
    });
  }, []);

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
                {dropdownItems.map((item) => {
                  return (
                    <DropdownItem
                      onClick={(e) => {
                        setPlayersToDisplay(e.target.value);
                        setGuildsToDisplay(e.target.value);
                      }}
                      value={item}
                      key={uniqid()}
                    >
                      {item}
                    </DropdownItem>
                  );
                })}
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
                  .filter((_, index) => index < guildsToDisplay)}
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
