import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_pages_blocks_faq_block_block_config_theme" ADD VALUE '_';
ALTER TYPE "enum_pages_blocks_text_image_block_block_config_theme" ADD VALUE '_';
ALTER TYPE "enum_pages_blocks_hero_block_block_config_theme" ADD VALUE '_';
ALTER TYPE "enum__pages_v_blocks_faq_block_block_config_theme" ADD VALUE '_';
ALTER TYPE "enum__pages_v_blocks_text_image_block_block_config_theme" ADD VALUE '_';
ALTER TYPE "enum__pages_v_blocks_hero_block_block_config_theme" ADD VALUE '_';
ALTER TABLE "pages" ADD COLUMN "page_config_published_at" timestamp(3) with time zone;
ALTER TABLE "_pages_v" ADD COLUMN "version_page_config_published_at" timestamp(3) with time zone;
CREATE INDEX IF NOT EXISTS "key_idx" ON "payload_preferences" ("key");`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP INDEX IF EXISTS "key_idx";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "page_config_published_at";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_page_config_published_at";`);

};
