import { useContext } from 'react';
import Table from 'reactstrap/lib/Table';
import arrayContext from '../../contexts/array';
import PJRow from './PJRow';
import Pagin from '../cssPages&Components/Pagin';

const PjArrayList = () => {
  const {
    currentPage,
    setCurrentPage,
    playerPerPage,
    regionName,
    filterRes,
  } = useContext(arrayContext);

  // console.log('results', results, currentPage, playerPerPage, 'end');

  return (
    <Table className="" hover borderless>
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
        <Pagin
          page={currentPage}
          playerPerPage={playerPerPage}
          totalPlayers={filterRes.length}
          updatePage={setCurrentPage}
        />
      </tbody>
    </Table>
  );
};

export default PjArrayList;
