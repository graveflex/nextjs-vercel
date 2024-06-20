import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "layout" "enum_pages_blocks_hero_block_layout";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "contentAlign" "enum_pages_blocks_hero_block_content_align";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "textinput_placeholder" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "textinput_help_text" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "textinput_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "layout" "enum__pages_v_blocks_hero_block_layout";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "contentAlign" "enum__pages_v_blocks_hero_block_content_align";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "textinput_placeholder" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "textinput_help_text" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "textinput_label" varchar;
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "blockConfig_layout";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_placeholder";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_type";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "blockConfig_layout";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_placeholder";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_type";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_block_config_layout" AS ENUM('bg', 'imgRight', 'imgLeft', 'imgRightFull', 'imgLeftFull');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_input_type" AS ENUM('text');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_block_config_layout" AS ENUM('bg', 'imgRight', 'imgLeft', 'imgRightFull', 'imgLeftFull');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_input_type" AS ENUM('text');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "blockConfig_layout" "enum_pages_blocks_hero_block_block_config_layout";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_placeholder" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_type" "enum_pages_blocks_hero_block_input_type";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "blockConfig_layout" "enum__pages_v_blocks_hero_block_block_config_layout";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_placeholder" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_type" "enum__pages_v_blocks_hero_block_input_type";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "layout";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "contentAlign";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "textinput_placeholder";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "textinput_help_text";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "textinput_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "layout";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "contentAlign";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "textinput_placeholder";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "textinput_help_text";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "textinput_label";`);

};