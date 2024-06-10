import { useLayoutEffect } from 'react';

const useLockBodyScroll = (stop: boolean) => {
  useLayoutEffect(() => {
    if (stop) {
      document.body.style.overflowY = 'hidden';
      // position relative makes this work for safari
      document.body.style.position = 'relative';
      document.body.style.overflowX = 'clip';
    } else {
      document.body.style.overflowY = 'scroll';
      document.body.style.overflowX = 'clip';
    }
  }, [stop]);
};

export default useLockBodyScroll;
