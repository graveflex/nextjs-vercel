import { useCallback, useEffect, useRef, useState } from 'react';
import { ready, subscribe, unsubscribe } from '@payloadcms/live-preview';
import * as R from 'ramda';

const isObject = (val: unknown) =>
  val && typeof val === 'object' && !Array.isArray(val);

const mergeArrays = (arr1: unknown[], arr2: unknown[]): unknown[] => {
  return R.range(0, Math.max(arr1.length, arr2.length)).map((i: number) => {
    if (arr1[i] === undefined) {
      return arr2[i];
    }
    if (arr2[i] === undefined) {
      return arr1[i];
    }
    if (isObject(arr1[i]) || isObject(arr2[i])) {
      // eslint-disable-next-line
      return deepMerge(arr1[i], arr2[i]);
    }
    return arr2[i];
  });
};

const deepMerge = <T, U>(obj1: T, obj2: U): T => {
  return R.mergeWithKey(
    (_key: string, left: object, right: object) => {
      if (isObject(left) || isObject(right)) {
        // lexical content merge
        if (Object.hasOwn(right ?? left, 'root')) {
          if (right) {
            return right;
          }

          return left;
        }

        return deepMerge(left, right);
      }
      if (Array.isArray(left) && Array.isArray(right)) {
        return mergeArrays(left, right);
      }
      return right;
    },
    obj1,
    obj2
  );
};

const useLivePreview = <T>(props: {
  depth?: number;
  initialData: T;
  serverURL: string;
}): {
  data: T;
  isLoading: boolean;
} => {
  const { depth = 0, initialData } = props;
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const hasSentReadyMessage = useRef<boolean>(false);

  const onChange = useCallback(
    (mergedData: T) => {
      // When a change is made, the `onChange` callback will be called with the merged data
      // Set this merged data into state so that React will re-render the UI
      setData(deepMerge(R.clone(initialData), R.clone(mergedData)));
      setIsLoading(false);
    },
    [initialData]
  );

  useEffect(() => {
    // Listen for `window.postMessage` events from the Admin panel
    // When a change is made, the `onChange` callback will be called with the merged data
    const serverURL = window.location.origin;

    const subscription = subscribe({
      callback: onChange,
      depth,
      initialData: R.clone(initialData),
      serverURL,
      apiRoute: '/api'
    });

    // Once subscribed, send a `ready` message back up to the Admin panel
    // This will indicate that the front-end is ready to receive messages
    if (!hasSentReadyMessage.current) {
      hasSentReadyMessage.current = true;

      ready({
        serverURL
      });
    }

    // When the component unmounts, unsubscribe from the `window.postMessage` events
    return () => {
      unsubscribe(subscription);
    };
  }, [onChange, depth, initialData]);

  return {
    data,
    isLoading
  };
};

export default useLivePreview;
