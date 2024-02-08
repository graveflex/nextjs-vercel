import { useEffect, useRef } from 'react';
import type { RellaxOptions } from 'rellax';
import Rellax from 'rellax';

const defaultSettings: RellaxOptions = {
  speed: -4,
  center: false,
  round: false,
  vertical: true,
  horizontal: false
};

function useParallax(opts: RellaxOptions = defaultSettings) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      const rellax = new Rellax(ref.current, opts);

      return () => {
        rellax.destroy();
      };
    }

    return () => {};
  });

  return ref;
}

export default useParallax;
