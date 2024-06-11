import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_images_additional_props_aspect_ratio" ADD VALUE '4/3';`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "undefined_cta_ic" ADD VALUE 'Login';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Menu';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Location';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Calendar';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'PersonBust';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Phone';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Job';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Email';
ALTER TYPE "enum_images_additional_props_aspect_ratio" ADD VALUE '7/6';`);

};
