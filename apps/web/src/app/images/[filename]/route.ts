import { NextResponse } from 'next/server';
import { head } from '@vercel/blob';
import path from 'path';

import { BLOB_READ_WRITE_TOKEN, BLOB_STORE_ID } from 'settings';

export const dynamic = 'force-dynamic'; // defaults to auto

const baseUrl = `https://${BLOB_STORE_ID}.public.blob.vercel-storage.com`;
// TODO: hook into config prefix
const prefix = '';

export async function GET(
  _: Request,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;

  try {
    const fileUrl = `${baseUrl}/${path.posix.join(prefix, filename)}`;

    const blobMetadata = await head(fileUrl, { token: BLOB_READ_WRITE_TOKEN });
    if (blobMetadata) {
      const { contentType, size } = blobMetadata;
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      if (blob) {
        const resp = new Response(blob, {
          headers: {
            'Content-Type': contentType,
            'Content-Length': `${size}`,
            'Content-Disposition': 'inline'
          }
        });

        return resp;
      }
    }

    return NextResponse.next();
  } catch (err: unknown) {
    return NextResponse.json(
      {
        error: JSON.stringify(err)
      },
      { status: 500, statusText: JSON.stringify(err) }
    );
  }
}
