import { useContext } from 'react';
import Table from 'reactstrap/lib/Table';
import Pagin from '../cssPages&Components/Pagin';
import GuildRow from './GuildRow';

import arrayContext from '../../contexts/array';

const GildsArrayLists = () => {
  const { currentPage, setCurrentPage, playerPerPage, filterRes } = useContext(
    arrayContext
  );
  return (
    <>
      <Table className="col-10 w-100 text-wrap" hover borderless>
        <tbody className="container">
          {filterRes
            .filter(
              (_, index) =>
                index >= (currentPage - 1) * playerPerPage &&
                index < currentPage * playerPerPage
            )
            .map((result) => {
              return (
                <GuildRow
                  name={result.guild.name}
                  faction={result.guild.faction}
                  slug={result.guild.region.slug}
                  rank={result.rank}
                  region={result.guild.region.name}
                  realm={result.guild.realm.name}
                  key={result.rank}
                />
              );
            })}
        </tbody>
      </Table>
      <Pagin
        page={currentPage}
        playerPerPage={playerPerPage}
        totalPlayers={filterRes.length}
        updatePage={setCurrentPage}
      />
    </>
  );
};

export default GildsArrayLists;
