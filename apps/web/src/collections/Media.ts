import { head } from '@vercel/blob';
import path from 'path';
import type { CollectionConfig } from 'payload/types';

const baseUrl = 'https://hgeiz69t7wl1ssgi.public.blob.vercel-storage.com';

async function mediaHandler(req, res, next) {
  console.log('@--> hitting mediahandler');
  try {
    const prefix = 'media';

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
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: false
    }
  ],
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    handlers: [mediaHandler],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        position: 'centre'
      },
      {
        name: 'mobile',
        width: 768,
        position: 'centre'
      },
      {
        name: 'tablet',
        width: 1024,
        position: 'center'
      },
      {
        name: 'desktop',
        width: 2048,
        position: 'centre'
      },
      {
        name: 'ultrawide',
        width: 4096,
        position: 'centre'
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  }
};

export default Media;
