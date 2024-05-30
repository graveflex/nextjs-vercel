import type { GenerateURL } from '@payloadcms/plugin-cloud-storage/dist/types';
interface Args {
    baseUrl: string;
    prefix?: string;
}
declare const getGenerateURL: ({ baseUrl }: Args) => GenerateURL;
export default getGenerateURL;
