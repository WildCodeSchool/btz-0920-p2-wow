import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Table } from 'reactstrap';

import { motion } from 'framer-motion';
import PJRow from './PJRow';
import DalApi from '../dal/DalApi';
import Pagin from './cssPages&Components/Pagin';
import ToolsFilters from './ToolsFilters';
import Error from './Error';
import NoResults from './NoResults';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';
import { enterBottom } from './animations';

const PJArray = () => {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [regionSlug, setRegionSlug] = useState('');
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
          setRegionSlug(data.rankings.region.slug);
          setFilterRes(data.rankings.rankedCharacters);
          setLoading(false);
        });
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        // setLoading(false);
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
          <div style={{ height: '100px', minWidth: '100vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <motion.div
          className="cssStyle d-flex flex-column flex-1 align-items-center text-center"
          variants={enterBottom}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div style={{ height: '100px', minWidth: '100vw' }} />
          <div style={{ margin: '48px 48px 0 48px' }}>
            <h2>
              Top {regionName} {params.class} Characters
            </h2>
            <Hr />
          </div>
          <Container
            fluid
            className="d-flex flex-column flex-1 align-items-center"
          >
            <Row>
              <div className="col-12 d-flex justify-content-start p-0 m-2">
                <ToolsFilters
                  results={results}
                  filterRes={filterRes}
                  setFilterRes={setFilterRes}
                  setCurrentPage={setCurrentPage}
                />
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
                  {filterRes.length === 0 ? (
                    <NoResults />
                  ) : (
                    filterRes
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
                            region={regionSlug}
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
            totalPlayers={filterRes.length}
            updatePage={setCurrentPage}
          />
        </motion.div>
      )}
    </>
  );
};

export default PJArray;
