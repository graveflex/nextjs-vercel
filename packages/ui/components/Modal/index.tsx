import RenderIcon from '@mono/ui/components/RenderIcon';
import type React from 'react';
import { useEffect } from 'react';

export type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

// TODO: replace this with shadcn modal
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

  return isOpen ? (
    <>
      <button type="button" onClick={() => handleOverlayClick} />
      <div {...props}>
        <div>
          <button type="button" onClick={onClose}>
            <RenderIcon name="Close" />
          </button>
          {children}
        </div>
      </div>
    </>
  ) : null;
}

export default ModalC;
