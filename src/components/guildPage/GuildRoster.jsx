import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import GuildRosterRow from './GuildRosterRow';

const GuildRoster = (props) => {
  const { roster } = props;

  return (
    <>
      <Table className="d-flex flex-column">
        <thead>
          <tr className="d-flex" hover style={{ fontSize: '24px' }}>
            <th className="col-md-5">Player</th>
            <th className="col-md-3">Spec</th>
            <th className="col-md-2">rank</th>
            <th className="col-md-1">Level</th>
            <th className="col-md-1">rank</th>
          </tr>
        </thead>
        {roster
          .filter((elmt, index) => index >= 0 && index < 5)
          .map((player) => (
            <GuildRosterRow player={player} key={player.character.name} />
          ))}
      </Table>
      <Pagination className="pagination" size="lg clearfix">
        <PaginationItem className="paginationItem">
          <PaginationLink>
            <BsFillSkipBackwardFill />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>4</PaginationLink>
        </PaginationItem>
        <PaginationItem className="paginationItem">
          <PaginationLink>
            <BsFillSkipForwardFill />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </>
  );
};

GuildRoster.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  roster: propTypes.array.isRequired,
};
export default GuildRoster;
