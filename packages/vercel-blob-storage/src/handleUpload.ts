import type { HandleUpload } from '@payloadcms/plugin-cloud-storage/dist/types';
import { put } from '@vercel/blob';
import path from 'path';

interface Args {
  token: string;
  access?: 'public';
  prefix?: string;
  addRandomSuffix?: boolean;
  cacheControlMaxAge?: number;
  optionalUrlPrefix?: string;
}

const getHandleUpload = ({
  token,
  prefix = '',
  access = 'public',
  addRandomSuffix,
  cacheControlMaxAge,
  optionalUrlPrefix
}: Args): HandleUpload => {
  return async ({ data, file }) => {
    const filename = optionalUrlPrefix
      ? `${optionalUrlPrefix}/${file.filename}`
      : file.filename;
    const fileKey = path.posix.join(data.prefix || prefix, filename);

    await put(fileKey, file.buffer, {
      token,
      contentType: file.mimeType,
      access,
      addRandomSuffix,
      cacheControlMaxAge
    });

    return data;
  };
};

export default getHandleUpload;
