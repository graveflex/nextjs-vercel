import type { GenerateURL } from '@payloadcms/plugin-cloud-storage/dist/types';
import path from 'path';

interface Args {
  baseUrl: string;
  prefix?: string;
}

const getGenerateURL = ({ baseUrl }: Args): GenerateURL => {
  return ({ filename, prefix = '' }) => {
    return `${baseUrl}/${path.posix.join(prefix, filename)}`;
  };
};

export default getGenerateURL;
