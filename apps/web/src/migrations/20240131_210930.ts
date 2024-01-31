import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_config_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_hero_block" ALTER COLUMN "cta_label" DROP NOT NULL;
ALTER TABLE "pages_blocks_hero_block" ALTER COLUMN "cta_href" DROP NOT NULL;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "blockConfig_layout" "enum_pages_blocks_text_image_block_block_config_layout";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_label" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_href" varchar;
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "blockOptions_contentSide";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_options_content_side" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_hero_block" ALTER COLUMN "cta_label" SET NOT NULL;
ALTER TABLE "pages_blocks_hero_block" ALTER COLUMN "cta_href" SET NOT NULL;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "blockOptions_contentSide" "enum_pages_blocks_text_image_block_block_options_content_side";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "blockConfig_layout";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_label";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_href";`);

};
