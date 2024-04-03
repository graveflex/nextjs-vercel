import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages" ADD COLUMN "page_title" varchar;
ALTER TABLE "pages" ADD COLUMN "slug" varchar;
ALTER TABLE "pages" ADD COLUMN "theme" "enum_pages_theme";
ALTER TABLE "_pages_v" ADD COLUMN "version_page_title" varchar;
ALTER TABLE "_pages_v" ADD COLUMN "version_slug" varchar;
ALTER TABLE "_pages_v" ADD COLUMN "version_theme" "enum__pages_v_version_theme";
CREATE INDEX IF NOT EXISTS "key_idx" ON "payload_preferences" ("key");
ALTER TABLE "pages" DROP COLUMN IF EXISTS "page_config_slug";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "pageConfig_theme";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_page_config_slug";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_pageConfig_theme";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_page_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_page_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages" RENAME COLUMN "slug" TO "page_config_slug";
ALTER TABLE "pages" RENAME COLUMN "theme" TO "pageConfig_theme";
ALTER TABLE "_pages_v" RENAME COLUMN "version_slug" TO "version_page_config_slug";
ALTER TABLE "_pages_v" RENAME COLUMN "version_theme" TO "version_pageConfig_theme";
DROP INDEX IF EXISTS "key_idx";
ALTER TABLE "pages" ALTER COLUMN "pageConfig_theme" SET DATA TYPE enum_pages_page_config_theme;
ALTER TABLE "_pages_v" ALTER COLUMN "version_pageConfig_theme" SET DATA TYPE enum__pages_v_version_page_config_theme;
ALTER TABLE "pages" DROP COLUMN IF EXISTS "page_title";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_page_title";`);

};
