import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
// import { useParams } from 'react-router-dom';

import PJRow from './PJRow';
import ToolsFilters from './ToolsFilters';
import DalApi from '../dal/DalApi';
import Pagin from './cssPages&Components/Pagin';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';

const PJArray = () => {
  // const params = useParams();
  const [results, setResults] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [loading, setLoading] = useState(true);
  // const [min, setMin] = useState(0);
  // const [max, setMax] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(5);

  useEffect(() => {
    DalApi.getTopPlayer('eu').then(({ data }) => {
      setResults(data.rankings.rankedCharacters);
      setRegionName(data.rankings.region.name);
      setLoading(false);
    });
  }, []);

  // function page1() {
  //   setMin(0);
  //   setMax(5);
  // }

  // function page2() {
  //   setMin(5);
  //   setMax(10);
  // }

  // function page3() {
  //   setMin(10);
  //   setMax(15);
  // }

  // function page4() {
  //   setMin(15);
  //   setMax(20);
  // }

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
              <div className="col-1 align-self-center">
                <ToolsFilters />
              </div>
              <Table className="col-10" w-auto text-nowrap hover>
                <tbody className="container">
                  {results
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
            totalPlayers={results.length}
            updatePage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default PJArray;
