import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'reactstrap';

import PJRow from './PJRow';
import DalApi from '../dal/DalApi';
import Pagin from './cssPages&Components/Pagin';
import ToolsFilters from './ToolsFilters';
import Error from './Error';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';

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
          setFilterRes(data.rankings.rankedCharacters);
          setLoading(false);
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
              <div className="col-3 align-self-center">
                <ToolsFilters
                  results={results}
                  filterRes={filterRes}
                  setFilterRes={setFilterRes}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              <Table className="col-8 text-nowrap" hover borderless>
                <tbody className="container">
                  {filterRes
                    .filter(
                      (_, index) =>
                        index >= (currentPage - 1) * playerPerPage &&
                        index < currentPage * playerPerPage
                    )
                    .map((result) => {
                      return (
                        <PJRow
                          name={result.character.name}
                          pjClass={result.character.class.name}
                          faction={result.character.faction}
                          rank={result.rank}
                          spec={result.character.spec.name}
                          realm={result.character.realm.name}
                          region={regionName}
                          key={result.rank}
                        />
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </main>
          <Pagin
            page={currentPage}
            playerPerPage={playerPerPage}
            totalPlayers={filterRes.length}
            updatePage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default PJArray;
