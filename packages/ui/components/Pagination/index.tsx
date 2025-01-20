import type React from 'react';
import { useCallback } from 'react';
import ReactPaginate from 'react-paginate';

export type PaginationType = {
  currentPage: number;
  limit?: number;
  total?: number;
  range?: number;
  blogRef?: React.RefObject<HTMLDivElement | null>;
  updatePage?: (page: number) => void;
  showJump?: boolean;
};

function Pagination({
  limit = 10,
  total = 0,
  range = 5,
  currentPage,
  blogRef,
  updatePage,
  showJump = false
}: PaginationType) {
  const pageCount = Math.ceil(total / limit);
  const lastPage = pageCount - 1;
  const onPageChange = useCallback(
    ({ selected }: { selected: number }) => {
      updatePage?.(selected);
      blogRef?.current?.scrollIntoView({ behavior: 'instant' });
    },
    [updatePage, blogRef]
  );

  return (
    <div>
      <div>
        {showJump && (
          <button
            onClick={() => onPageChange({ selected: 0 })}
            type="button"
            disabled={currentPage === 0}
          />
        )}
        <ReactPaginate
          previousLabel={
            <button type="button" disabled={currentPage === 0}>
              Previous{' '}
            </button>
          }
          nextLabel={
            <button type="button" disabled={currentPage === lastPage}>
              Next
            </button>
          }
          breakLabel="..."
          pageCount={Math.ceil(pageCount)}
          onPageChange={onPageChange}
          marginPagesDisplayed={range}
          pageRangeDisplayed={range}
          forcePage={currentPage}
        />
        {showJump && (
          <button
            onClick={() => onPageChange({ selected: lastPage })}
            type="button"
            disabled={currentPage === lastPage}
          />
        )}
      </div>
    </div>
  );
}

export default Pagination;
