import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_block_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "blockConfig_theme" "enum_pages_blocks_text_image_block_block_config_theme";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "blockConfig_theme" "enum_pages_blocks_hero_block_block_config_theme";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "blockConfig_theme";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "blockConfig_theme";`);

};
