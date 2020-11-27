import { useEffect, useState } from 'react';
import { Table, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import GuildRow from './GuildRow';
// import ToolsFilters from './ToolsFilters';
import DalApi from '../dal/DalApi';
import Pagin from './cssPages&Components/Pagin';
import Error from './Error';
import NoResults from './NoResults';
import { enterBottom } from './animations';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';

const GuildsArray = () => {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverSlug, setServerSlug] = useState('');
  const [realmName, setRealmName] = useState('');
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(5);
  useEffect(() => {
    const getDatas = async () => {
      try {
        const guild = await DalApi.getTopGuild(
          params.region.toLowerCase(),
          params.realm.toLowerCase(),
          params.faction.toLowerCase()
        );
        setResults(guild.data.raidRankings.rankedGuilds);
        setServerSlug(params.region);
        setRealmName(params.realm);
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getDatas();
  }, []);

  if (isError) {
    return <Error msg={error.message} />;
  }

  return (
    <>
      {loading ? (
        <div className="cssStyle d-flex flex-column flex-1 align-items-center">
          <div style={{ height: '100px', minWidth: '95vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <motion.div
          variants={enterBottom}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="cssStyle d-flex flex-column flex-1 align-items-center text-center"
          style={{ maxWidth: '100vw' }}
        >
          <div style={{ height: '100px', minWidth: '99vw' }} />
          <div className="m-5">
            <h2 className="h1">
              Top {serverSlug} {realmName} {params.faction} Guilds
            </h2>
            <Hr />
          </div>
          <Container
            fluid
            className="d-flex flex-column flex-1 align-items-center"
          >
            <Row className="w-75">
              <div className="col-12 d-flex justify-content-start p-0 m-2">
                {/* <ToolsFilters /> */}
              </div>
            </Row>
            <Row className="align-self-center">
              <Table
                className="col-12 text-wrap table-striped"
                style={{ width: '75vw' }}
                hover
                borderless
              >
                <tbody>
                  {results.length === 0 ? (
                    <NoResults />
                  ) : (
                    results
                      .filter(
                        (_, index) =>
                          index >= (currentPage - 1) * playerPerPage &&
                          index < currentPage * playerPerPage
                      )
                      .map((result) => {
                        return (
                          <GuildRow
                            name={result.guild.name}
                            faction={result.guild.faction}
                            slug={result.guild.region.slug}
                            rank={result.rank}
                            region={result.guild.region.name}
                            realm={result.guild.realm.name}
                            key={result.rank}
                          />
                        );
                      })
                  )}
                </tbody>
              </Table>
            </Row>
          </Container>
          <Pagin
            page={currentPage}
            playerPerPage={playerPerPage}
            totalPlayers={results.length}
            updatePage={setCurrentPage}
          />
        </motion.div>
      )}
    </>
  );
};

export default GuildsArray;
