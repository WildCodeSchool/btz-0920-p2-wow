import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import GuildsArrayList from './GuildsArrayList';
import ToolsFilters from '../ToolsFilters';
import DalApi from '../../dal/DalApi';
import Error from '../Error';

import Hr from '../cssPages&Components/Hr';
import LoadingSpinner from '../LoadingSpinner';
import '../cssPages&Components/GuildsArray.css';
import ArrayContext from '../../contexts/array';

const GuildsArray = () => {
  const params = useParams();

  const [results, setResults] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(5);

  const [loading, setLoading] = useState(true);
  const [serverSlug, setServerSlug] = useState('');
  const [realmName, setRealmName] = useState('');
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

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
            <ArrayContext.Provider
              value={{
                filterRes,
                setFilterRes,
                currentPage,
                setCurrentPage,
                playerPerPage,
              }}
            >
              <div className="row align-self-center">
                <div className="col-1 d-flex align-items-center">
                  <ToolsFilters
                    type="guilds"
                    results={results}
                    className="col-3 align-self-center"
                  />
                </div>
                <GuildsArrayList />
              </div>
            </ArrayContext.Provider>
          </Container>
        </div>
      )}
    </>
  );
};

export default GuildsArray;
