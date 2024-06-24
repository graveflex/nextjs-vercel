'use client';

import React, { useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import Button from '@mono/ui/components/Button';
import styled, { css } from 'styled-components';

const OuterContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  width: 100%;
  justify-content: center;

  .selected {
    text-decoration: underline;
    align-self: center;
  }
`;

const Container = styled.div`
  ${({ theme: { allColors, mq } }) => css`
    display: flex;
    gap: 1rem;
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
      justify-content: center;
      color: ${allColors.primary};
      
      ${mq.md`
        &.previous {
          margin-right: 5rem;
        }

        &.next {
          margin-left: 5rem;
        }
      `}
      }
    }
  `}
`;

export type PaginationType = {
  currentPage: number;
  limit?: number;
  total?: number;
  range?: number;
  blogRef?: React.RefObject<HTMLDivElement>;
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
    <OuterContainer>
      <Container>
        {showJump && (
          <Button
            onClick={() => onPageChange({ selected: 0 })}
            $variant="outline"
            $color="primary"
            element="button"
            type="button"
            disabled={currentPage === 0}
            icon={{ name: 'DoubleCaretLeft' }}
          />
        )}
        <ReactPaginate
          previousLabel={
            <Button
              $variant="outline"
              $color="primary"
              element="button"
              type="button"
              disabled={currentPage === 0}
              icon={{ name: 'ArrowLeft' }}
            />
          }
          nextLabel={
            <Button
              $variant="outline"
              $color="primary"
              element="button"
              type="button"
              disabled={currentPage === lastPage}
              icon={{ name: 'ArrowRight' }}
            />
          }
          breakLabel="..."
          pageCount={Math.ceil(pageCount)}
          onPageChange={onPageChange}
          marginPagesDisplayed={range}
          pageRangeDisplayed={range}
          forcePage={currentPage}
        />
        {showJump && (
          <Button
            onClick={() => onPageChange({ selected: lastPage })}
            $variant="outline"
            $color="primary"
            element="button"
            type="button"
            disabled={currentPage === lastPage}
            icon={{ name: 'DoubleCaretRight' }}
          />
        )}
      </Container>
    </OuterContainer>
  );
}

export default Pagination;
