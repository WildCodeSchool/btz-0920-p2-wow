import { useEffect, useState } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
// import { useParams } from 'react-router-dom';

import PJRow from './PJRow';
import ToolsFilters from './ToolsFilters';
import DalApi from '../dal/DalApi';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';

const PJArray = () => {
  // const params = useParams();
  const [results, setResults] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [loading, setLoading] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);

  useEffect(() => {
    DalApi.getTopPlayer('eu').then(({ data }) => {
      setResults(data.rankings.rankedCharacters);
      setRegionName(data.rankings.region.name);
      setLoading(false);
    });
  }, []);

  function page1() {
    setMin(0);
    setMax(5);
  }

  function page2() {
    setMin(5);
    setMax(10);
  }

  function page3() {
    setMin(10);
    setMax(15);
  }

  function page4() {
    setMin(15);
    setMax(20);
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="cssStyle d-flex flex-column text-center">
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
                    })
                    .filter((_, index) => index >= min && index < max)}
                </tbody>
              </Table>
            </div>
          </main>
          <Pagination className="align-self-center" size="lg clearfix">
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page1}>
                <BsFillSkipBackwardFill />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page1}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page2}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page3}>3</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page4}>4</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page4}>
                <BsFillSkipForwardFill />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      )}
    </>
  );
};

export default PJArray;
