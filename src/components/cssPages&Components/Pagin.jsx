import { useState, useEffect } from 'react';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Pagin = ({ page, updatePage, totalPlayers, playerPerPage }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const totalPages = Math.ceil(totalPlayers / playerPerPage);
  const pageTab = [];
  const btnQty = totalPages > 5 ? 5 : totalPages;
  const [isStartDisabled, setIsStartDisabled] = useState(false);
  const [isEndDisabled, setIsEndDisabled] = useState(false);
  for (let i = 0; i < totalPages; i += 1) {
    pageTab[i] = i + 1;
  }
  const [btnMin, setBtnMin] = useState(1);
  const [btnMax, setBtnMax] = useState(btnQty);
  //   console.log(pageTab);

  useEffect(() => {
    if (btnQty <= 5) {
      setIsStartDisabled(false);
      setIsEndDisabled(false);
    } else {
      setIsStartDisabled(true);
      setIsEndDisabled(true);
    }

    if (currentPage === 1) {
      setBtnMin(currentPage);
      setBtnMax(currentPage + 4);
    } else if (currentPage === totalPages) {
      setBtnMin(currentPage - 4);
      setBtnMax(currentPage);
    } else if (currentPage === btnMax) {
      setBtnMin(currentPage - 2);
      setBtnMax(currentPage + 2);
    } else if (currentPage === btnMin) {
      if (btnMax - 4 === 1) {
        setBtnMin(1);
        setBtnMax(5);
      } else {
        setBtnMin(currentPage - 2);
        setBtnMax(currentPage + 2);
      }
    }
    if (currentPage === totalPages) setIsEndDisabled(true);
    if (currentPage === 1) setIsStartDisabled(true);

    updatePage(currentPage);
  }, [currentPage]);

  return (
    // go to first page
    <Pagination className="pagination" size="lg clearfix">
      <PaginationItem className="paginationItem" disabled={isStartDisabled}>
        <PaginationLink onClick={() => setCurrentPage(1)}>
          <BsFillSkipBackwardFill />
        </PaginationLink>
      </PaginationItem>
      {pageTab
        .filter((p) => {
          return p >= btnMin && p <= btnMax;
        })
        .map((elmt) => (
          <PaginationItem
            className="paginationItem"
            active={currentPage === elmt}
          >
            <PaginationLink onClick={() => setCurrentPage(elmt)}>
              {elmt}
            </PaginationLink>
          </PaginationItem>
        ))}
      {/* go to last page */}
      <PaginationItem className="paginationItem" disabled={isEndDisabled}>
        <PaginationLink onClick={() => setCurrentPage(totalPages)}>
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
