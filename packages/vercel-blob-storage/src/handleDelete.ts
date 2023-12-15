import type { HandleDelete } from '@payloadcms/plugin-cloud-storage/dist/types';
import { del } from '@vercel/blob';
import path from 'path';

interface Args {
  token: string;
  baseUrl: string;
  prefix?: string;
}

const getHandleDelete = ({ token, baseUrl }: Args): HandleDelete => {
  return async ({ filename, doc: { prefix = '' } }) => {
    const fileUrl = `${baseUrl}/${path.posix.join(prefix, filename)}`;
    const deletedBlob = await del(fileUrl, { token });

    return deletedBlob;
  };
};

export default getHandleDelete;
