import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages" ADD COLUMN "seo_config_title" varchar;
ALTER TABLE "pages" ADD COLUMN "seo_config_description" varchar;
ALTER TABLE "pages" ADD COLUMN "seo_config_keywords" varchar;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages" DROP COLUMN IF EXISTS "seo_config_title";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "seo_config_description";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "seo_config_keywords";`);

};
