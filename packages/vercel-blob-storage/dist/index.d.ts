import type { Adapter } from '@payloadcms/plugin-cloud-storage/dist/types';
export interface Args {
    token: string;
    endpointUrl: string;
    storeId: string;
    options?: {
        access?: 'public';
        optionalUrlPrefix?: string;
        addRandomSuffix?: boolean;
        cacheControlMaxAge?: number;
    };
}
export declare const vercelBlobAdapter: ({ token, endpointUrl, storeId, options }: Args) => Adapter;
