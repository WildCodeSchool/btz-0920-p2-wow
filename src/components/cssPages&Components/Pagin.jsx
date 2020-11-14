import { useState, useEffect, useContext } from 'react';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import pjArrayContext from '../../contexts/pjArray';

const Pagin = ({ playerPerPage }) => {
  const { currentPage, setCurrentPage, results } = useContext(pjArrayContext);
  const totalPages = Math.ceil(results.length / playerPerPage);
  const pageTab = [];
  const btnQty = totalPages > 5 ? 5 : totalPages;
  const [isStartDisabled, setIsStartDisabled] = useState(true);
  const [isEndDisabled, setIsEndDisabled] = useState(true);
  const [btnMin, setBtnMin] = useState(1);
  const [btnMax, setBtnMax] = useState(btnQty);

  for (let i = 0; i < totalPages; i += 1) pageTab[i] = i + 1;

  useEffect(() => {
    setIsStartDisabled(btnQty < 5 || currentPage === 1);
    setIsEndDisabled(btnQty < 5 || currentPage === totalPages);

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

    setCurrentPage(currentPage);
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
            key={elmt}
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
  playerPerPage: PropTypes.number.isRequired,
};
export default Pagin;
