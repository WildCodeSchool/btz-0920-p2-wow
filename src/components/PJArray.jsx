import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Table,
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
} from 'reactstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';

import PJRow from './PJRow';
import DalApi from '../dal/DalApi';
import Pagin from './cssPages&Components/Pagin';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';
import FactionIcons from './flags/FactionIcons';

const PJArray = () => {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [regionName, setRegionName] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(5);
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    DalApi.getTopPlayer(
      params.region.toLowerCase(),
      params.class.toLowerCase()
    ).then(({ data }) => {
      setResults(data.rankings.rankedCharacters);
      setRegionName(data.rankings.region.name);
      setFilterRes(data.rankings.rankedCharacters);
      setLoading(false);
    });
  }, []);

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
                <Button
                  color="primary"
                  id="toggler"
                  style={{ marginBottom: '1rem' }}
                >
                  <BsThreeDotsVertical />
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card className="bg-transparent">
                    <CardBody className="p-0 bg-transparent">
                      <Button
                        type="button"
                        value="horde"
                        onClick={() =>
                          setFilterRes(
                            results.filter(
                              (elmt) => elmt.character.faction === 'horde'
                            )
                          )
                        }
                        color="secondary"
                        className="p-0 bg-transparent border-0 button-hover"
                      >
                        <FactionIcons faction="horde" />
                      </Button>
                      <Button
                        type="button"
                        value="alliance"
                        onClick={() =>
                          setFilterRes(
                            results.filter(
                              (elmt) => elmt.character.faction === 'alliance'
                            )
                          )
                        }
                        color="secondary"
                        className="p-0 bg-transparent border-0 button-hover"
                      >
                        <FactionIcons faction="alliance" />
                      </Button>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
              <Table className="col-8" w-auto text-nowrap hover>
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
