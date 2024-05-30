import type { StaticHandler } from '@payloadcms/plugin-cloud-storage/dist/types';
import type { CollectionConfig } from 'payload/types';
interface Args {
    baseUrl: string;
}
declare const getStaticHandler: ({ baseUrl }: Args, collection: CollectionConfig) => StaticHandler;
export default getStaticHandler;
