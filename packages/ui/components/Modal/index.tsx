'use client';

import React, { useEffect } from 'react';
import styled from '@refract-ui/sc';

export type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({ theme: { allColors } }) => allColors.fg};
  opacity: 0.5;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100;
  display: grid;
  height: auto;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow: auto;
  place-items: end;

  ${({ theme: { mq } }) => mq.sm`
    top: 0;
    width: auto;
    left: 50%;
    transform: translate(-50%, 0);
    place-items: center;
  `}
`;

export const ModalContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 100vw;
  background-color: ${({ theme: { allColors } }) => allColors.bg};
  bottom: 0;
  padding: 1.5rem;
  padding-top: 3.75rem;

  ${({ theme: { mq } }) => mq.sm`
    padding: 3.75rem;
    padding-top: 4.375rem;
    bottom: auto;
    width: 33.5rem;
  `}
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.75rem;
  right: 1.75rem;
  border: none;
  background-color: transparent;
  width: 25px;
  height: 25px;
  padding: 0;
  transition: opacity 0.25s;

  &:hover,
  &:focus {
    opacity: 0.4;
    background-color: transparent;
    box-shadow: none;
  }

  ${({ theme: { mq } }) => mq.sm`
    top: 2.0625rem;
    right: 2.0625rem;
  `}
`;

function ModalC({ isOpen, onClose, children, ...props }: ModalType) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  function handleOverlayClick() {
    onClose();
  }

  function handleModalClick(event: { stopPropagation: () => void }) {
    event.stopPropagation();
  }
  return isOpen ? (
    <>
      <Overlay onClick={() => handleOverlayClick} />
      <ModalWrapper {...props}>
        <ModalContainer onClick={() => handleModalClick}>
          <ModalCloseButton onClick={onClose}>X </ModalCloseButton>
          {children}
        </ModalContainer>
      </ModalWrapper>
    </>
  ) : null;
}

export default ModalC;
