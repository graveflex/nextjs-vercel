import type { HandleDelete } from '@payloadcms/plugin-cloud-storage/dist/types';
interface Args {
    token: string;
    baseUrl: string;
    prefix?: string;
}
declare const getHandleDelete: ({ token, baseUrl }: Args) => HandleDelete;
export default getHandleDelete;
