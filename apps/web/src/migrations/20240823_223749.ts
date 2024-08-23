import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages_locales" ADD COLUMN "page_title" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_page_title" varchar;
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "page_title";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_page_title";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP INDEX IF EXISTS "pages_slug_idx";
  DROP INDEX IF EXISTS "_pages_v_version_version_slug_idx";
  DROP INDEX IF EXISTS "posts_slug_idx";
  ALTER TABLE "pages" ADD COLUMN "page_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_page_title" varchar;
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "page_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_page_title";`)
}
