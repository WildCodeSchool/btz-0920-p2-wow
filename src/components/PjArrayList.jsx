import { useContext } from 'react';
import Table from 'reactstrap/lib/Table';
import pjArrayContext from '../contexts/pjArray';
import PJRow from './PJRow';

const PjArrayList = () => {
  const { currentPage, playerPerPage, regionName, results } = useContext(
    pjArrayContext
  );
  // console.log('results', results, currentPage, playerPerPage, 'end');

  return (
    <Table className="col-8 text-nowrap" hover borderless>
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
  );
};

export default PjArrayList;
