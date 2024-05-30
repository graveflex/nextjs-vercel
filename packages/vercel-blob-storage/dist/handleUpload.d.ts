import type { HandleUpload } from '@payloadcms/plugin-cloud-storage/dist/types';
interface Args {
    token: string;
    access?: 'public';
    prefix?: string;
    addRandomSuffix?: boolean;
    cacheControlMaxAge?: number;
    optionalUrlPrefix?: string;
}
declare const getHandleUpload: ({ token, prefix, access, addRandomSuffix, cacheControlMaxAge, optionalUrlPrefix }: Args) => HandleUpload;
export default getHandleUpload;
