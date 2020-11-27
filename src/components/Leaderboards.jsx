import { useEffect, useState } from 'react';
import {
  ButtonDropdown,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from 'reactstrap';
import { AnimatePresence, motion } from 'framer-motion';

import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';
import GuildLeaderboardRow from './GuildLeaderboardRow';
import PlayerLeaderboardRow from './PlayerLeaderboardRow';
import Error from './Error';
import { enterBottom } from './animations';

const Leaderboards = () => {
  const [guildResults, setGuildResults] = useState([]);
  const [playerResults, setPlayerResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setOpen] = useState(false);
  const [playersToDisplay, setPlayersToDisplay] = useState(5);
  const [guildsToDisplay, setGuildsToDisplay] = useState(5);
  const [dropdownItems] = useState([5, 10, 15, 20]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const topGuilds = await DalApi.getTopGuild();
        const topPlayers = await DalApi.getTopPlayer();

        setGuildResults(topGuilds.data.raidRankings.rankedGuilds);
        setPlayerResults(topPlayers.data.rankings.rankedCharacters);
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getDatas();
  }, []);

  const toggle = () => setOpen(!dropdownOpen);

  if (isError) {
    return <Error msg={error.message} />;
  }

  return (
    <Container className="leaderboard-container d-flex flex-column flex-1 mt-5 justify-content-center overflow-hidden">
      {loading ? (
        <div className="d-flex flex-column align-items-center">
          <div style={{ height: '100px', minWidth: '100vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            className="container-fluid d-flex w-100 flex-wrap"
            variants={enterBottom}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div style={{ height: '100px', minWidth: '100vw' }} />
            <ButtonDropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              className="mb-5"
            >
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
                      key={item}
                    >
                      {item}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </ButtonDropdown>
            <Table className="w-100 border-none table-striped" hover borderless>
              <thead>
                <tr>
                  <th
                    className="h2 font-weight-bold table-primary"
                    colSpan={12}
                  >
                    Top World Guilds
                  </th>
                </tr>
              </thead>
              <tbody>
                {guildResults
                  .filter((_, index) => index < guildsToDisplay)
                  .map((result) => {
                    return (
                      <GuildLeaderboardRow
                        name={result.guild.name}
                        realm={result.guild.realm.name}
                        region={result.guild.region.slug}
                        key={result.guild.id}
                      />
                    );
                  })}
              </tbody>
            </Table>
            <Table
              className="w-100 border-none table-striped my-5"
              hover
              borderless
            >
              <thead>
                <tr>
                  <th
                    className="h2 font-weight-bold table-primary"
                    colSpan={12}
                  >
                    Top World Players
                  </th>
                </tr>
              </thead>
              <tbody>
                {playerResults
                  .filter((_, index) => index < playersToDisplay)
                  .map((result) => {
                    return (
                      <PlayerLeaderboardRow
                        name={result.character.name}
                        realm={result.character.realm.name}
                        region={result.character.region.slug}
                        playerClass={result.character.class.name}
                        key={result.character.id}
                      />
                    );
                  })}
              </tbody>
            </Table>
          </motion.div>
        </AnimatePresence>
      )}
    </Container>
  );
};
export default Leaderboards;
