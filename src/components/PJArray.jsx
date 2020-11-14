import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DalApi from '../dal/DalApi';
import Pagin from './cssPages&Components/Pagin';
// import ToolsFilters from './ToolsFilters';
import Error from './Error';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';
import PjArrayList from './PjArrayList';
import pjArrayContext from '../contexts/pjArray';

const PJArray = () => {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(5);
  const [filterRes, setFilterRes] = useState([]);
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
          // setFilterRes(data.rankings.rankedCharacters);
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
          <main className="container min-vw-100">
            <div className="row w-100">
              <pjArrayContext.Provider
                value={{
                  filterRes,
                  setFilterRes,
                  regionName,
                  currentPage,
                  setCurrentPage,
                  playerPerPage,
                  results,
                }}
              >
                {/* <ToolsFilters
                  results={results}
                  className="col-3 align-self-center"
                /> */}
                <PjArrayList />

                <Pagin playerPerPage={playerPerPage} />
              </pjArrayContext.Provider>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default PJArray;
