'use client';

import React, { useMemo, useCallback } from 'react';
import styled, { css } from 'styled-components';
import ReactPaginate from 'react-paginate';

const OuterContainer = styled.div`
  ${({ theme: { box, themeColors } }) => css`
    display: grid;
    margin: 1rem 0;
    width: 100%;

    .selected {
      text-decoration: underline;
      align-self: center;
    }
  `}
`;

const Container = styled.div`
  ${({ theme: { box, themeColors } }) => css`
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
      display: inline-flex;
      height: 1.625rem;
      width: 1.625rem;
      justify-content: center;
      color: ${themeColors.primary};

      &.previous, &.next {
        border: 1px solid ${themeColors.primary};
        border-radius: 2.25rem;
        height: 3.8125rem;
        width: 3.8125rem;
      }

      &.previous {
        margin-right: 5rem;
      }

      &.next {
        margin-left: 5rem;
      }

      &:hover {
        color: ${themeColors.secondary};
        &.previous, &.next {
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

const JumpArrow = styled.li`
  ${({ theme: { themeColors } }) => css`
    border: 1px solid ${themeColors.primary};
    border-radius: 2.25rem;
    min-height: 3.8125rem;
    min-width: 3.8125rem;
    display: flex;
    align-items: center;
    margin: 0 1.125rem;

    &:hover {
      border-color: ${themeColors.secondary};
    }
  `}
`;

export type PaginationType = {
  skip?: number;
  limit?: number;
  total?: number;
  range?: number;
  updatePage?: (page: number) => void;
  className?: string;
};

function Pagination({ skip = 0, limit = 10, total = 0, range = 5, updatePage, className }: PaginationType) {
  const pageCount = Math.ceil(total / limit);
  const currentPage = useMemo(() => skip / limit, [skip, limit]);

   const onPageChange = useCallback(
    ({ selected }: { selected: number }) => {
      console.log('selected', selected)
      updatePage?.(selected);
    },
    [updatePage]
  );

  console.log({skip, limit}, skip / limit)

  console.log('currentPage', currentPage)

  return (
    <OuterContainer>
      <Container>
        <JumpArrow
          onClick={() => onPageChange({ selected: 0 })}
        > back </JumpArrow>
        <ReactPaginate
          // update labels to icons 
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={Math.ceil(pageCount)}
          onPageChange={onPageChange}
          marginPagesDisplayed={range}
          pageRangeDisplayed={range}
          forcePage={currentPage}
        />
        <JumpArrow onClick={() => onPageChange({selected: pageCount })}> next </JumpArrow>
      </Container>
    </OuterContainer>
  );
}

export default Pagination;
