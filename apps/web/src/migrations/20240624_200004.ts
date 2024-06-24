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
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_textinput_placeholder" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_textinput_help_text" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_textinput_label" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_type" "undefined_cta_t";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_external_href" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_email_href" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_phone_href" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_new_tab" boolean;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_icon_name" "undefined_link_ic";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_icon_size" "undefined_link_iw";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_icon_color" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_variant" "undefined_cta_v";
ALTER TABLE "pages_blocks_hero_block_locales" ADD COLUMN "content" jsonb;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "layout" "enum__pages_v_blocks_hero_block_layout";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "contentAlign" "enum__pages_v_blocks_hero_block_content_align";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_textinput_placeholder" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_textinput_help_text" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_textinput_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_type" "undefined_cta_t";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_external_href" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_email_href" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_phone_href" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_new_tab" boolean;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_icon_name" "undefined_link_ic";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_icon_size" "undefined_link_iw";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_icon_color" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_variant" "undefined_cta_v";
ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD COLUMN "content" jsonb;
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "blockConfig_layout";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_placeholder";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_type";
ALTER TABLE "pages_blocks_hero_block_locales" DROP COLUMN IF EXISTS "title";
ALTER TABLE "pages_blocks_hero_block_locales" DROP COLUMN IF EXISTS "sub_title";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "blockConfig_layout";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_placeholder";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_type";
ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP COLUMN IF EXISTS "title";
ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP COLUMN IF EXISTS "sub_title";`);

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
ALTER TABLE "pages_blocks_hero_block_locales" ADD COLUMN "title" varchar;
ALTER TABLE "pages_blocks_hero_block_locales" ADD COLUMN "sub_title" jsonb;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "blockConfig_layout" "enum__pages_v_blocks_hero_block_block_config_layout";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_placeholder" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_type" "enum__pages_v_blocks_hero_block_input_type";
ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD COLUMN "title" varchar;
ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD COLUMN "sub_title" jsonb;
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "layout";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "contentAlign";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_placeholder";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_help_text";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_label";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_type";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_external_href";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_email_href";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_phone_href";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_new_tab";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_icon_name";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_icon_size";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_icon_color";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_variant";
ALTER TABLE "pages_blocks_hero_block_locales" DROP COLUMN IF EXISTS "content";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "layout";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "contentAlign";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_placeholder";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_help_text";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_type";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_external_href";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_email_href";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_phone_href";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_new_tab";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_icon_name";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_icon_size";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_icon_color";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_variant";
ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP COLUMN IF EXISTS "content";`);

};
