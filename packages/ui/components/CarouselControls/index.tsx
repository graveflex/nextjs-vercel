'use client';

import React from 'react';
import styled, { css } from 'styled-components';

const Arrow = styled.button`
  ${({ theme: { themeColors, mq } }) => css`
    border: 1px solid ${themeColors.secondary};
    border-radius: 2.25rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease-in-out;
    width: 2rem;
    height: 2rem;
    color: ${themeColors.secondary};

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &:hover {
      background-color: ${themeColors.info};
      border-color: ${themeColors.info};
      color: ${themeColors.primary};
      border-radius: 0.5rem;
    }

    &:focus {
      outline: 2px solid ${themeColors.info};
    }

    ${mq.md`
      width: 3.8125rem;
      height: 3.8125rem;
      padding: 0;
      margin: 0;
    `}
  `}
`;

const ArrowsContainer = styled.div`
  display: flex;
  gap: 1.125rem;
  max-width: 100%;
  width: 100%;
`;

type NavContainerProps = {
  $hasMargin?: boolean;
};

const NavContainer = styled.div<NavContainerProps>`
  ${({ theme: { themeColors }, $hasMargin }) => css`
    display: flex;
    background-color: ${themeColors.primary};
    padding: 1.125rem;
    border-radius: 1.125rem;

    ${$hasMargin &&
    css`
      margin: 1.125rem;
    `}
  `}
`;

const PaginationContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

type DotTypes = {
  $isActive?: boolean;
};

const PaginationDot = styled.li<DotTypes>`
  ${({ $isActive, theme: { themeColors, mq } }) => css`
    background-color: ${$isActive
      ? themeColors.secondary
      : themeColors.primary};
    border: 1px solid ${themeColors.secondary};
    border-radius: 0.75rem;
    flex: 0 0 0.8125rem;
    list-style-type: none;
    transition: background 0.15s ease-in-out;
    height: 0.5rem;
    min-width: 1.25rem;

    &:not(:last-child) {
      margin-right: 0.375rem;
    }

    ${mq.md`
      height: .5rem;
      min-width: 2.25rem;
    `}
  `}
`;

export type CarouselControlsType = {
  activeDotIndex?: number;
  carouselLength?: number;
  isNextButtonEnabled?: boolean;
  isPreviousButtonEnabled?: boolean;
  showDots?: boolean;
  hasMargin?: boolean;
  slideNext?: () => void;
  slidePrevious?: () => void;
};

function CarouselControls({
  activeDotIndex = 0,
  carouselLength = 0,
  isNextButtonEnabled = true,
  isPreviousButtonEnabled = false,
  showDots = false,
  // ECF Variant - remove in other projects
  hasMargin = false,
  slideNext,
  slidePrevious
}: CarouselControlsType) {
  return (
    <NavContainer $hasMargin={hasMargin}>
      {/* CUSTOMIZE: Update Arrow Icons */}
      <ArrowsContainer>
        <Arrow
          onClick={slidePrevious}
          disabled={!isPreviousButtonEnabled}
          tabIndex={0}
        >
          {'<'}
        </Arrow>
        {showDots && (
          <PaginationContainer>
            {[...Array(carouselLength)].map((_, index) => (
              <PaginationDot
                key={`slide-'${_}`}
                $isActive={activeDotIndex === index}
              />
            ))}
          </PaginationContainer>
        )}
        <Arrow onClick={slideNext} disabled={!isNextButtonEnabled} tabIndex={0}>
          {'>'}
        </Arrow>
      </ArrowsContainer>
    </NavContainer>
  );
}

export default CarouselControls;
