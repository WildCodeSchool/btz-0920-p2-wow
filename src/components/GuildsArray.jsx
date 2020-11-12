import { useEffect, useState } from 'react';
import { Table, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import GuildRow from './GuildRow';
import ToolsFilters from './ToolsFilters';
import DalApi from '../dal/DalApi';
import Pagin from './cssPages&Components/Pagin';
import Error from './Error';

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
          params.realm.toLowerCase()
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
        <div className="cssStyle d-flex flex-column align-items-center">
          <div style={{ height: '100px', minWidth: '95vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className="cssStyle d-flex flex-column align-items-center text-center"
          style={{ maxWidth: '100vw' }}
        >
          <div style={{ height: '100px', minWidth: '99vw' }} />
          <div>
            <h2>
              Top <span>{serverSlug}</span> {realmName} Guilds
            </h2>
            <Hr />
          </div>
          <Container>
            <div className="row align-self-center">
              <div className="col-1 d-flex align-items-center">
                <ToolsFilters />
              </div>
              <Table className="col-10 w-auto text-wrap" hover borderless>
                <tbody className="container">
                  {results
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
                    })}
                </tbody>
              </Table>
            </div>
          </Container>
          <Pagin
            page={currentPage}
            playerPerPage={playerPerPage}
            totalPlayers={results.length}
            updatePage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default GuildsArray;
