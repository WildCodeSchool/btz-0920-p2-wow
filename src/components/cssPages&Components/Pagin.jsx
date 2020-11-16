import { useState, useEffect } from 'react';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Pagin = ({ page, totalPlayers, playerPerPage, updatePage }) => {
  const totalPages = Math.ceil(totalPlayers / playerPerPage);
  const pageTab = [];
  const btnQty = totalPages > 5 ? 5 : totalPages;
  const [isStartDisabled, setIsStartDisabled] = useState(true);
  const [isEndDisabled, setIsEndDisabled] = useState(true);
  const [btnMin, setBtnMin] = useState(1);
  const [btnMax, setBtnMax] = useState(btnQty);

  for (let i = 0; i < totalPages; i += 1) pageTab[i] = i + 1;

  useEffect(() => {
    setIsStartDisabled(btnQty < 5 || page === 1);
    setIsEndDisabled(btnQty < 5 || page === totalPages);

    if (page === 1) {
      setBtnMin(page);
      setBtnMax(page + 4);
    } else if (page === totalPages) {
      setBtnMin(page - 4);
      setBtnMax(page);
    } else if (page === btnMax) {
      setBtnMin(page - 2);
      setBtnMax(page + 2);
    } else if (page === btnMin) {
      if (btnMax - 4 === 1) {
        setBtnMin(1);
        setBtnMax(5);
      } else {
        setBtnMin(page - 2);
        setBtnMax(page + 2);
      }
    }

    updatePage(page);
  }, [page]);

  return (
    // go to first page
    <Pagination className="pagination" size="lg clearfix">
      <PaginationItem className="paginationItem" disabled={isStartDisabled}>
        <PaginationLink onClick={() => updatePage(1)}>
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
            active={page === elmt}
            key={elmt}
          >
            <PaginationLink onClick={() => updatePage(elmt)}>
              {elmt}
            </PaginationLink>
          </PaginationItem>
        ))}
      {/* go to last page */}
      <PaginationItem className="paginationItem" disabled={isEndDisabled}>
        <PaginationLink onClick={() => updatePage(totalPages)}>
          <BsFillSkipForwardFill />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

Pagin.propTypes = {
  page: PropTypes.number.isRequired,
  totalPlayers: PropTypes.number.isRequired,
  playerPerPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
};
export default Pagin;
