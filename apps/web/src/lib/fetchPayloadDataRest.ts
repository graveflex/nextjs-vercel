/* eslint-disable no-console */
import { WEB_URL } from '@mono/settings';
import qs from 'qs';

export type FetchPayloadRequest = {
  endpoint: string;
  params?: object;
  showDraft?: boolean;
  next?: {
    revalidate?: false | 0 | number;
    tags?: string[];
  };
  revalidate?: number;
  accessToken?: string;
};

export type FetchPayloadResponse<T> = T | { error: string };

// primarily used to fetch data
async function fetchPayloadDataRest<T>({
  endpoint,
  params,
  showDraft,
  next,
  accessToken
}: FetchPayloadRequest): Promise<FetchPayloadResponse<T>> {
  const url = `${WEB_URL}${endpoint}?${qs.stringify({ ...params, draft: showDraft }, { addQueryPrefix: true })}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 10, ...next },
      headers: {
        Authorization: `JWT ${accessToken}`
      }
    });
    const { status } = res;
    if (status < 400) {
      const data = await res.json();
      return data;
    }

    throw new Error(`Data from ${endpoint} not found`);
  } catch (err) {
    return { error: err as string };
  }
}

export default fetchPayloadDataRest;
