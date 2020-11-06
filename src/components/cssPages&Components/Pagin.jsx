// import { useState } from 'react';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Pagin = ({ page, updatePage, totalPlayers, playerPerPage }) => {
  // const [currentPage] = useState(page);
  const totalPages = Math.ceil(totalPlayers / playerPerPage);
  const pageTab = [];
  for (let i = 0; i < totalPages; i += 1) {
    pageTab[i] = i + 1;
  }
  //   console.log(pageTab);
  return (
    // go to first page
    <Pagination className="pagination" size="lg clearfix">
      <PaginationItem className="paginationItem">
        <PaginationLink onClick={() => updatePage(1)}>
          <BsFillSkipBackwardFill />
        </PaginationLink>
      </PaginationItem>

      <PaginationItem className="paginationItem">
        <PaginationLink>{page}</PaginationLink>
      </PaginationItem>
      <PaginationItem className="paginationItem">
        <PaginationLink>{page}</PaginationLink>
      </PaginationItem>
      <PaginationItem className="paginationItem">
        <PaginationLink>{page}</PaginationLink>
      </PaginationItem>
      <PaginationItem className="paginationItem">
        <PaginationLink>{page}</PaginationLink>
      </PaginationItem>

      {/* go to last page */}
      <PaginationItem className="paginationItem">
        <PaginationLink onClick={() => updatePage(totalPages)}>
          <BsFillSkipForwardFill />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

Pagin.propTypes = {
  page: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
  totalPlayers: PropTypes.number.isRequired,
  playerPerPage: PropTypes.number.isRequired,
};
export default Pagin;
