'use client';

import React, { useCallback, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled, { css } from 'styled-components';

const OuterContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  width: 100%;

  .selected {
    text-decoration: underline;
    align-self: center;
  }
`;

const Container = styled.div`
  ${({ theme: { themeColors, mq } }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    overflow-x: hidden;

    ul {
      position: relative;
      list-style-type: none;
      padding-left: 0;
      display: flex;
      flex-flow: row nowrap;
      gap: 0.5rem;
      overflow-x: auto;
      margin-bottom: 0;
      align-items: center;
    }

    li {
      display: flex;
      height: 1.625rem;
      width: 1.625rem;
      justify-content: center;
      color: ${themeColors.primary};

      ${mq.md`
        &.previous {
          margin-right: 5rem;
        }

        &.next {
          margin-left: 5rem;
        }
      `}

      &.previous, &.next {
        border: 1px solid ${themeColors.primary};
        border-radius: 2.25rem;
        min-height: 1.8125rem;
        min-width: 1.8125rem;

        ${mq.md`
          min-height: 3.8125rem;
          min-width: 3.8125rem;
        `}
      }

      &.previous.disabled,
      &.next.disabled {
        color: ${themeColors.disabled};
        border-color: ${themeColors.disabled};
        pointer-events: none;
      }

      &:hover {
        color: ${themeColors.secondary};
        &.previous,
        &.next {
          background-color: transparent;
          border-color: ${themeColors.secondary};
          border-radius: 2.25rem;
        }
      }
    }

    a {
      display: flex;
      align-items: center;
    }
  `}
`;

const JumpArrow = styled.div<{ disabled?: boolean }>`
  ${({ theme: { themeColors, mq }, disabled }) => css`
    display: none;

    ${mq.md`
      min-height: 3.8125rem;
      min-width: 3.8125rem;
      margin: 0 1.125rem;
      border: 1px solid ${themeColors.primary};
      color: ${themeColors.primary};
      border-radius: 2.25rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      &:hover {
        border-color: ${themeColors.secondary};
      }

      ${
        disabled &&
        css`
          color: ${themeColors.disabled};
          border-color: ${themeColors.disabled};
          pointer-events: none;
        `
      }
    `}
  `}
`;

export type PaginationType = {
  skip?: number;
  limit?: number;
  total?: number;
  range?: number;
  updatePage?: (page: number) => void;
  showJump?: boolean;
};

function Pagination({
  skip = 0,
  limit = 10,
  total = 0,
  range = 5,
  updatePage,
  showJump = false
}: PaginationType) {
  const pageCount = Math.ceil(total / limit);
  const initialPage = useMemo(() => skip / limit, [skip, limit]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const lastPage = pageCount - 1;

  const onPageChange = useCallback(
    ({ selected }: { selected: number }) => {
      updatePage?.(selected);
      setCurrentPage(selected);
    },
    [updatePage]
  );

  return (
    <OuterContainer>
      <Container>
        {/* CUSTOMIZE: update labels to icons  */}
        {showJump && (
          <JumpArrow
            onClick={() => onPageChange({ selected: 0 })}
            disabled={currentPage === 0}
          >
            {'<<'}
          </JumpArrow>
        )}
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          pageCount={Math.ceil(pageCount)}
          onPageChange={onPageChange}
          marginPagesDisplayed={range}
          pageRangeDisplayed={range}
          forcePage={currentPage}
        />
        {showJump && (
          <JumpArrow
            onClick={() => onPageChange({ selected: lastPage })}
            disabled={currentPage === lastPage}
          >
            {'>>'}
          </JumpArrow>
        )}
      </Container>
    </OuterContainer>
  );
}

export default Pagination;
