import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages" ADD COLUMN "published_at" timestamp(3) with time zone;
ALTER TABLE "_pages_v" ADD COLUMN "version_published_at" timestamp(3) with time zone;
ALTER TABLE "pages" DROP COLUMN IF EXISTS "page_config_published_at";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_page_config_published_at";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages" ADD COLUMN "page_config_published_at" timestamp(3) with time zone;
ALTER TABLE "_pages_v" ADD COLUMN "version_page_config_published_at" timestamp(3) with time zone;
ALTER TABLE "pages" DROP COLUMN IF EXISTS "published_at";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_published_at";`);

};
