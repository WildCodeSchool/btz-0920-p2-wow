import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';

import DalApi from '../../dal/DalApi';
import ToolsFilters from '../ToolsFilters';
import Error from '../Error';

import Hr from '../cssPages&Components/Hr';
import LoadingSpinner from '../LoadingSpinner';
import '../cssPages&Components/GuildsArray.css';
import PjArrayList from './PjArrayList';
import arrayContext from '../../contexts/array';

const PJArray = () => {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const [regionName, setRegionName] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(5);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const getDatas = async () => {
      try {
        DalApi.getTopPlayer(
          params.region.toLowerCase(),
          params.class.toLowerCase().replace(' ', '-')
        ).then(({ data }) => {
          setResults(data.rankings.rankedCharacters);
          setRegionName(data.rankings.region.name);
          setFilterRes(data.rankings.rankedCharacters);
          setLoading(false);
          // console.log(data.rankings.rankedCharacters);
        });
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
          <div style={{ height: '100px', minWidth: '100vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <div className="cssStyle d-flex flex-column align-items-center text-center">
          <div style={{ height: '100px', minWidth: '100vw' }} />
          <div>
            <h2>
              Top <span>{regionName}</span> Characters
            </h2>
            <Hr />
          </div>
          <Container className="d-flex flex-row">
            <arrayContext.Provider
              value={{
                filterRes,
                setFilterRes,
                regionName,
                currentPage,
                setCurrentPage,
                playerPerPage,
              }}
            >
              <div className="col-3 d-flex align-items-center">
                <ToolsFilters
                  type="players"
                  results={results}
                  playerClass={params.class || ''}
                />
              </div>

              <div className="col-9">
                <PjArrayList />
              </div>
            </arrayContext.Provider>
          </Container>
        </div>
      )}
    </>
  );
};

export default PJArray;
