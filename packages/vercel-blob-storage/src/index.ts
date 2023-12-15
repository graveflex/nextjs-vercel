import type {
  Adapter,
  GeneratedAdapter
} from '@payloadcms/plugin-cloud-storage/dist/types';

import getGenerateURL from './generateURL';
import getHandleDelete from './handleDelete';
import getHandleUpload from './handleUpload';
import getStaticHandler from './staticHandler';

export interface Args {
  token: string;
  endpointUrl: string; // RENAME
  storeId: string;
  options?: {
    access?: 'public';
    optionalUrlPrefix?: string;
    addRandomSuffix?: boolean;
    cacheControlMaxAge?: number;
  };
}

const defaultOptions: Args['options'] = {
  access: 'public',
  optionalUrlPrefix: undefined,
  addRandomSuffix: false,
  cacheControlMaxAge: 31536000
};

export const vercelBlobAdapter = ({
  token,
  endpointUrl,
  storeId,
  options = {}
}: Args): Adapter => {
  const { access, optionalUrlPrefix, addRandomSuffix, cacheControlMaxAge } = {
    ...defaultOptions,
    ...options
  };
  const baseUrl = `https://${storeId}.${access}.${endpointUrl}${
    optionalUrlPrefix ? `/${optionalUrlPrefix}` : ''
  }`;

  return ({ collection, prefix }): GeneratedAdapter => {
    return {
      handleUpload: getHandleUpload({
        token,
        prefix,
        access,
        addRandomSuffix,
        cacheControlMaxAge,
        optionalUrlPrefix
      }),
      handleDelete: getHandleDelete({ token, baseUrl, prefix }),
      generateURL: getGenerateURL({ baseUrl, prefix }),
      staticHandler: getStaticHandler({ baseUrl }, collection)
    };
  };
};
