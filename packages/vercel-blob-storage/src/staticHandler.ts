import type { StaticHandler } from '@payloadcms/plugin-cloud-storage/dist/types';
import { getFilePrefix } from '@payloadcms/plugin-cloud-storage/dist/utilities/getFilePrefix';
import { head } from '@vercel/blob';
import path from 'path';
import type { CollectionConfig } from 'payload/types';

interface Args {
  baseUrl: string;
}

const getStaticHandler = (
  { baseUrl }: Args,
  collection: CollectionConfig
): StaticHandler => {
  return async (req, res, next) => {
    try {
      const prefix = await getFilePrefix({ req, collection });

      const fileUrl = `${baseUrl}/${path.posix.join(
        prefix,
        req.params.filename
      )}`;

      const blobMetadata = await head(fileUrl);
      if (blobMetadata) {
        const { contentType, size } = blobMetadata;
        const response = await fetch(fileUrl);
        const blob = await response.blob();

        if (blob) {
          res.set({
            'Content-Type': contentType,
            'Content-Length': size,
            'Content-Disposition': 'inline'
          });

          blob.arrayBuffer().then((b) => {
            res.send(Buffer.from(b));
            res.end();
          });
        }
      }

      next();
    } catch (err: unknown) {
      next(err);
    }
  };
};

export default getStaticHandler;
