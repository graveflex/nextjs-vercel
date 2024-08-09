'use client';

import React from 'react';
import Modal from 'react-modal';
import type { SectionHeaderBlockT } from '@mono/types/payload-types';
import styled from '@refract-ui/sc';

import RichText from '../primitives/RichText';

export type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  content: SectionHeaderBlockT['content'];
  footer: string;
};

const ModalWrapper = styled.div`
  max-width: 20rem;
`;

function ModalC({ isOpen, onClose, label, content, footer }: ModalType) {
  return (
    <ModalWrapper>
      <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel={label}>
        {content && <RichText {...content} />}
        {footer && <p>{footer}</p>}
      </Modal>
    </ModalWrapper>
  );
}

export default ModalC;
