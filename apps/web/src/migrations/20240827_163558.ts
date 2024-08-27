import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_fbImageB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_sHeaderB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_sHeaderB_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__fbImageB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__sHeaderB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__sHeaderB_v_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_version_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_version_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE TABLE IF NOT EXISTS "fbImageB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_fbImageB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "sHeaderB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_sHeaderB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum_sHeaderB_alignment" DEFAULT 'center',
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_fbImageB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__fbImageB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_sHeaderB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__sHeaderB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum__sHeaderB_v_alignment" DEFAULT 'center',
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_homepage_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum_homepage_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum_homepage_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_homepage_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum_homepage_blocks_hero_block_layout",
  	"contentAlign" "enum_homepage_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar DEFAULT '/',
  	"theme" "enum_homepage_theme",
  	"published_at" timestamp(3) with time zone,
  	"_status" "enum_homepage_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_locales" (
  	"page_title" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "homepage_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__homepage_v_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum__homepage_v_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum__homepage_v_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__homepage_v_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum__homepage_v_blocks_hero_block_layout",
  	"contentAlign" "enum__homepage_v_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_slug" varchar DEFAULT '/',
  	"version_theme" "enum__homepage_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version__status" "enum__homepage_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_locales" (
  	"version_page_title" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_blog_index_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum_blog_index_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum_blog_index_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_blog_index_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum_blog_index_blocks_hero_block_layout",
  	"contentAlign" "enum_blog_index_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar DEFAULT 'blog',
  	"theme" "enum_blog_index_theme",
  	"published_at" timestamp(3) with time zone,
  	"_status" "enum_blog_index_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_locales" (
  	"page_title" varchar DEFAULT 'Blog Index',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "blog_index_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__blog_index_v_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum__blog_index_v_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum__blog_index_v_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__blog_index_v_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum__blog_index_v_blocks_hero_block_layout",
  	"contentAlign" "enum__blog_index_v_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_slug" varchar DEFAULT 'blog',
  	"version_theme" "enum__blog_index_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_index_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_locales" (
  	"version_page_title" varchar DEFAULT 'Blog Index',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  DROP TABLE "pages_blocks_full_bleed_image_block";
  DROP TABLE "pages_blocks_section_header_block";
  DROP TABLE "_pages_v_blocks_full_bleed_image_block";
  DROP TABLE "_pages_v_blocks_section_header_block";
  ALTER TABLE "pages_locales" ADD COLUMN IF NOT EXISTS "page_title" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN IF NOT EXISTS "version_page_title" varchar;
  DO $$ BEGIN
   ALTER TABLE "fbImageB" ADD CONSTRAINT "fbImageB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "fbImageB" ADD CONSTRAINT "fbImageB_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "fbImageB" ADD CONSTRAINT "fbImageB_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "fbImageB" ADD CONSTRAINT "fbImageB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sHeaderB" ADD CONSTRAINT "sHeaderB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sHeaderB" ADD CONSTRAINT "sHeaderB_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sHeaderB" ADD CONSTRAINT "sHeaderB_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sHeaderB" ADD CONSTRAINT "sHeaderB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_fbImageB_v" ADD CONSTRAINT "_fbImageB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_fbImageB_v" ADD CONSTRAINT "_fbImageB_v_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_fbImageB_v" ADD CONSTRAINT "_fbImageB_v_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_fbImageB_v" ADD CONSTRAINT "_fbImageB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sHeaderB_v" ADD CONSTRAINT "_sHeaderB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sHeaderB_v" ADD CONSTRAINT "_sHeaderB_v_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sHeaderB_v" ADD CONSTRAINT "_sHeaderB_v_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sHeaderB_v" ADD CONSTRAINT "_sHeaderB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_iframe_block" ADD CONSTRAINT "homepage_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_iframe_block" ADD CONSTRAINT "homepage_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_iframe_block_locales" ADD CONSTRAINT "homepage_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block" ADD CONSTRAINT "homepage_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block" ADD CONSTRAINT "homepage_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_video_block" ADD CONSTRAINT "homepage_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_video_block" ADD CONSTRAINT "homepage_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_video_block" ADD CONSTRAINT "homepage_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block" ADD CONSTRAINT "homepage_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block" ADD CONSTRAINT "homepage_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block" ADD CONSTRAINT "homepage_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block_locales" ADD CONSTRAINT "homepage_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block" ADD CONSTRAINT "homepage_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block" ADD CONSTRAINT "homepage_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_markdown_block" ADD CONSTRAINT "homepage_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_markdown_block" ADD CONSTRAINT "homepage_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_markdown_block_locales" ADD CONSTRAINT "homepage_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block_items" ADD CONSTRAINT "homepage_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block" ADD CONSTRAINT "homepage_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block" ADD CONSTRAINT "homepage_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block_locales" ADD CONSTRAINT "homepage_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_items" ADD CONSTRAINT "homepage_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_items" ADD CONSTRAINT "homepage_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_items" ADD CONSTRAINT "homepage_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_locales" ADD CONSTRAINT "homepage_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block_locales" ADD CONSTRAINT "homepage_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_locales" ADD CONSTRAINT "homepage_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_iframe_block" ADD CONSTRAINT "_homepage_v_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_iframe_block" ADD CONSTRAINT "_homepage_v_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_iframe_block_locales" ADD CONSTRAINT "_homepage_v_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_video_block" ADD CONSTRAINT "_homepage_v_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_video_block" ADD CONSTRAINT "_homepage_v_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_video_block" ADD CONSTRAINT "_homepage_v_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block" ADD CONSTRAINT "_homepage_v_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block" ADD CONSTRAINT "_homepage_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block" ADD CONSTRAINT "_homepage_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block_locales" ADD CONSTRAINT "_homepage_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_markdown_block" ADD CONSTRAINT "_homepage_v_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_markdown_block" ADD CONSTRAINT "_homepage_v_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_markdown_block_locales" ADD CONSTRAINT "_homepage_v_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block_items" ADD CONSTRAINT "_homepage_v_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block" ADD CONSTRAINT "_homepage_v_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block" ADD CONSTRAINT "_homepage_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block_locales" ADD CONSTRAINT "_homepage_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_items" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_items" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_items" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_locales" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block_locales" ADD CONSTRAINT "_homepage_v_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_locales" ADD CONSTRAINT "_homepage_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_iframe_block" ADD CONSTRAINT "blog_index_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_iframe_block" ADD CONSTRAINT "blog_index_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_iframe_block_locales" ADD CONSTRAINT "blog_index_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_video_block" ADD CONSTRAINT "blog_index_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_video_block" ADD CONSTRAINT "blog_index_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_video_block" ADD CONSTRAINT "blog_index_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block" ADD CONSTRAINT "blog_index_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block" ADD CONSTRAINT "blog_index_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block" ADD CONSTRAINT "blog_index_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block_locales" ADD CONSTRAINT "blog_index_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block" ADD CONSTRAINT "blog_index_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block" ADD CONSTRAINT "blog_index_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_markdown_block" ADD CONSTRAINT "blog_index_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_markdown_block" ADD CONSTRAINT "blog_index_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_markdown_block_locales" ADD CONSTRAINT "blog_index_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block_items" ADD CONSTRAINT "blog_index_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block" ADD CONSTRAINT "blog_index_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block" ADD CONSTRAINT "blog_index_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block_locales" ADD CONSTRAINT "blog_index_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_items" ADD CONSTRAINT "blog_index_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_items" ADD CONSTRAINT "blog_index_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_items" ADD CONSTRAINT "blog_index_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_locales" ADD CONSTRAINT "blog_index_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block_locales" ADD CONSTRAINT "blog_index_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_locales" ADD CONSTRAINT "blog_index_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_iframe_block" ADD CONSTRAINT "_blog_index_v_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_iframe_block" ADD CONSTRAINT "_blog_index_v_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_iframe_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_video_block" ADD CONSTRAINT "_blog_index_v_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_video_block" ADD CONSTRAINT "_blog_index_v_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_video_block" ADD CONSTRAINT "_blog_index_v_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block" ADD CONSTRAINT "_blog_index_v_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block" ADD CONSTRAINT "_blog_index_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block" ADD CONSTRAINT "_blog_index_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_markdown_block" ADD CONSTRAINT "_blog_index_v_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_markdown_block" ADD CONSTRAINT "_blog_index_v_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_markdown_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block_items" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_items" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_items" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_items" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_locales" ADD CONSTRAINT "_blog_index_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "fbImageB_order_idx" ON "fbImageB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "fbImageB_parent_id_idx" ON "fbImageB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "fbImageB_path_idx" ON "fbImageB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "sHeaderB_order_idx" ON "sHeaderB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sHeaderB_parent_id_idx" ON "sHeaderB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "sHeaderB_path_idx" ON "sHeaderB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_fbImageB_v_order_idx" ON "_fbImageB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_fbImageB_v_parent_id_idx" ON "_fbImageB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_fbImageB_v_path_idx" ON "_fbImageB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_sHeaderB_v_order_idx" ON "_sHeaderB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_sHeaderB_v_parent_id_idx" ON "_sHeaderB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_sHeaderB_v_path_idx" ON "_sHeaderB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_iframe_block_order_idx" ON "homepage_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_iframe_block_parent_id_idx" ON "homepage_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_iframe_block_path_idx" ON "homepage_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_items_order_idx" ON "homepage_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_items_parent_id_idx" ON "homepage_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_items_locale_idx" ON "homepage_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_order_idx" ON "homepage_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_parent_id_idx" ON "homepage_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_path_idx" ON "homepage_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_gallery_images_order_idx" ON "homepage_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "homepage_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_order_idx" ON "homepage_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_parent_id_idx" ON "homepage_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_path_idx" ON "homepage_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_video_block_order_idx" ON "homepage_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_video_block_parent_id_idx" ON "homepage_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_video_block_path_idx" ON "homepage_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_form_block_order_idx" ON "homepage_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_form_block_parent_id_idx" ON "homepage_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_form_block_path_idx" ON "homepage_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas_order_idx" ON "homepage_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "homepage_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "homepage_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_order_idx" ON "homepage_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_parent_id_idx" ON "homepage_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_order_idx" ON "homepage_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_parent_id_idx" ON "homepage_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_path_idx" ON "homepage_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_markdown_block_order_idx" ON "homepage_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_markdown_block_parent_id_idx" ON "homepage_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_markdown_block_path_idx" ON "homepage_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_items_order_idx" ON "homepage_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_items_parent_id_idx" ON "homepage_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_items_locale_idx" ON "homepage_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_order_idx" ON "homepage_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_parent_id_idx" ON "homepage_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_path_idx" ON "homepage_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_items_order_idx" ON "homepage_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_items_parent_id_idx" ON "homepage_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_items_locale_idx" ON "homepage_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_order_idx" ON "homepage_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_parent_id_idx" ON "homepage_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_path_idx" ON "homepage_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_hero_block_order_idx" ON "homepage_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_hero_block_parent_id_idx" ON "homepage_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_hero_block_path_idx" ON "homepage_blocks_hero_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_slug_idx" ON "homepage" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "homepage__status_idx" ON "homepage" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_iframe_block_order_idx" ON "_homepage_v_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_iframe_block_parent_id_idx" ON "_homepage_v_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_iframe_block_path_idx" ON "_homepage_v_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items_order_idx" ON "_homepage_v_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items_parent_id_idx" ON "_homepage_v_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items_locale_idx" ON "_homepage_v_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_order_idx" ON "_homepage_v_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_parent_id_idx" ON "_homepage_v_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_path_idx" ON "_homepage_v_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_gallery_images_order_idx" ON "_homepage_v_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "_homepage_v_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_order_idx" ON "_homepage_v_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_parent_id_idx" ON "_homepage_v_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_path_idx" ON "_homepage_v_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_video_block_order_idx" ON "_homepage_v_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_video_block_parent_id_idx" ON "_homepage_v_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_video_block_path_idx" ON "_homepage_v_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_form_block_order_idx" ON "_homepage_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_form_block_parent_id_idx" ON "_homepage_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_form_block_path_idx" ON "_homepage_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas_order_idx" ON "_homepage_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "_homepage_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "_homepage_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_order_idx" ON "_homepage_v_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_parent_id_idx" ON "_homepage_v_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_order_idx" ON "_homepage_v_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_parent_id_idx" ON "_homepage_v_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_path_idx" ON "_homepage_v_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_markdown_block_order_idx" ON "_homepage_v_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_markdown_block_parent_id_idx" ON "_homepage_v_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_markdown_block_path_idx" ON "_homepage_v_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_items_order_idx" ON "_homepage_v_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_items_parent_id_idx" ON "_homepage_v_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_items_locale_idx" ON "_homepage_v_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_order_idx" ON "_homepage_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_parent_id_idx" ON "_homepage_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_path_idx" ON "_homepage_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_items_order_idx" ON "_homepage_v_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_items_parent_id_idx" ON "_homepage_v_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_items_locale_idx" ON "_homepage_v_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_order_idx" ON "_homepage_v_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_parent_id_idx" ON "_homepage_v_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_path_idx" ON "_homepage_v_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_hero_block_order_idx" ON "_homepage_v_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_hero_block_parent_id_idx" ON "_homepage_v_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_hero_block_path_idx" ON "_homepage_v_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version_slug_idx" ON "_homepage_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version__status_idx" ON "_homepage_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_homepage_v_latest_idx" ON "_homepage_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_iframe_block_order_idx" ON "blog_index_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_iframe_block_parent_id_idx" ON "blog_index_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_iframe_block_path_idx" ON "blog_index_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_items_order_idx" ON "blog_index_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_items_parent_id_idx" ON "blog_index_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_items_locale_idx" ON "blog_index_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_order_idx" ON "blog_index_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_parent_id_idx" ON "blog_index_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_path_idx" ON "blog_index_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_gallery_images_order_idx" ON "blog_index_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "blog_index_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_order_idx" ON "blog_index_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_parent_id_idx" ON "blog_index_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_path_idx" ON "blog_index_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_video_block_order_idx" ON "blog_index_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_video_block_parent_id_idx" ON "blog_index_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_video_block_path_idx" ON "blog_index_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_form_block_order_idx" ON "blog_index_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_form_block_parent_id_idx" ON "blog_index_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_form_block_path_idx" ON "blog_index_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas_order_idx" ON "blog_index_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "blog_index_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "blog_index_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_order_idx" ON "blog_index_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_parent_id_idx" ON "blog_index_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_order_idx" ON "blog_index_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_parent_id_idx" ON "blog_index_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_path_idx" ON "blog_index_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_markdown_block_order_idx" ON "blog_index_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_markdown_block_parent_id_idx" ON "blog_index_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_markdown_block_path_idx" ON "blog_index_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_items_order_idx" ON "blog_index_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_items_parent_id_idx" ON "blog_index_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_items_locale_idx" ON "blog_index_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_order_idx" ON "blog_index_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_parent_id_idx" ON "blog_index_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_path_idx" ON "blog_index_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_items_order_idx" ON "blog_index_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_items_parent_id_idx" ON "blog_index_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_items_locale_idx" ON "blog_index_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_order_idx" ON "blog_index_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_parent_id_idx" ON "blog_index_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_path_idx" ON "blog_index_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_hero_block_order_idx" ON "blog_index_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_hero_block_parent_id_idx" ON "blog_index_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_hero_block_path_idx" ON "blog_index_blocks_hero_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_slug_idx" ON "blog_index" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_index__status_idx" ON "blog_index" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_iframe_block_order_idx" ON "_blog_index_v_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_iframe_block_parent_id_idx" ON "_blog_index_v_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_iframe_block_path_idx" ON "_blog_index_v_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items_order_idx" ON "_blog_index_v_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items_parent_id_idx" ON "_blog_index_v_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items_locale_idx" ON "_blog_index_v_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_order_idx" ON "_blog_index_v_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_parent_id_idx" ON "_blog_index_v_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_path_idx" ON "_blog_index_v_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_gallery_images_order_idx" ON "_blog_index_v_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "_blog_index_v_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_order_idx" ON "_blog_index_v_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_parent_id_idx" ON "_blog_index_v_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_path_idx" ON "_blog_index_v_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_video_block_order_idx" ON "_blog_index_v_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_video_block_parent_id_idx" ON "_blog_index_v_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_video_block_path_idx" ON "_blog_index_v_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_form_block_order_idx" ON "_blog_index_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_form_block_parent_id_idx" ON "_blog_index_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_form_block_path_idx" ON "_blog_index_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas_order_idx" ON "_blog_index_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "_blog_index_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "_blog_index_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_order_idx" ON "_blog_index_v_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_parent_id_idx" ON "_blog_index_v_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_order_idx" ON "_blog_index_v_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_parent_id_idx" ON "_blog_index_v_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_path_idx" ON "_blog_index_v_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_markdown_block_order_idx" ON "_blog_index_v_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_markdown_block_parent_id_idx" ON "_blog_index_v_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_markdown_block_path_idx" ON "_blog_index_v_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_items_order_idx" ON "_blog_index_v_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_items_parent_id_idx" ON "_blog_index_v_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_items_locale_idx" ON "_blog_index_v_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_order_idx" ON "_blog_index_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_parent_id_idx" ON "_blog_index_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_path_idx" ON "_blog_index_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items_order_idx" ON "_blog_index_v_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items_parent_id_idx" ON "_blog_index_v_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items_locale_idx" ON "_blog_index_v_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_order_idx" ON "_blog_index_v_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_parent_id_idx" ON "_blog_index_v_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_path_idx" ON "_blog_index_v_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_hero_block_order_idx" ON "_blog_index_v_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_hero_block_parent_id_idx" ON "_blog_index_v_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_hero_block_path_idx" ON "_blog_index_v_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version_slug_idx" ON "_blog_index_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version__status_idx" ON "_blog_index_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_latest_idx" ON "_blog_index_v" USING btree ("latest");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "page_title";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_page_title";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_full_bleed_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_section_header_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_section_header_block_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_full_bleed_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_section_header_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_section_header_block_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_full_bleed_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_full_bleed_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_section_header_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_section_header_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum_pages_blocks_section_header_block_alignment" DEFAULT 'center',
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_full_bleed_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_section_header_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_section_header_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum__pages_v_blocks_section_header_block_alignment" DEFAULT 'center',
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE "fbImageB";
  DROP TABLE "sHeaderB";
  DROP TABLE "_fbImageB_v";
  DROP TABLE "_sHeaderB_v";
  DROP TABLE "homepage_blocks_iframe_block";
  DROP TABLE "homepage_blocks_iframe_block_locales";
  DROP TABLE "homepage_blocks_icon_grid_block_items";
  DROP TABLE "homepage_blocks_icon_grid_block";
  DROP TABLE "homepage_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "homepage_blocks_gallery_grid_block";
  DROP TABLE "homepage_blocks_video_block";
  DROP TABLE "homepage_blocks_form_block";
  DROP TABLE "homepage_blocks_form_block_locales";
  DROP TABLE "homepage_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "homepage_blocks_card_grid_block_cards";
  DROP TABLE "homepage_blocks_card_grid_block";
  DROP TABLE "homepage_blocks_markdown_block";
  DROP TABLE "homepage_blocks_markdown_block_locales";
  DROP TABLE "homepage_blocks_faq_block_items";
  DROP TABLE "homepage_blocks_faq_block";
  DROP TABLE "homepage_blocks_faq_block_locales";
  DROP TABLE "homepage_blocks_text_image_block_items";
  DROP TABLE "homepage_blocks_text_image_block";
  DROP TABLE "homepage_blocks_text_image_block_locales";
  DROP TABLE "homepage_blocks_hero_block";
  DROP TABLE "homepage_blocks_hero_block_locales";
  DROP TABLE "homepage";
  DROP TABLE "homepage_locales";
  DROP TABLE "_homepage_v_blocks_iframe_block";
  DROP TABLE "_homepage_v_blocks_iframe_block_locales";
  DROP TABLE "_homepage_v_blocks_icon_grid_block_items";
  DROP TABLE "_homepage_v_blocks_icon_grid_block";
  DROP TABLE "_homepage_v_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "_homepage_v_blocks_gallery_grid_block";
  DROP TABLE "_homepage_v_blocks_video_block";
  DROP TABLE "_homepage_v_blocks_form_block";
  DROP TABLE "_homepage_v_blocks_form_block_locales";
  DROP TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "_homepage_v_blocks_card_grid_block_cards";
  DROP TABLE "_homepage_v_blocks_card_grid_block";
  DROP TABLE "_homepage_v_blocks_markdown_block";
  DROP TABLE "_homepage_v_blocks_markdown_block_locales";
  DROP TABLE "_homepage_v_blocks_faq_block_items";
  DROP TABLE "_homepage_v_blocks_faq_block";
  DROP TABLE "_homepage_v_blocks_faq_block_locales";
  DROP TABLE "_homepage_v_blocks_text_image_block_items";
  DROP TABLE "_homepage_v_blocks_text_image_block";
  DROP TABLE "_homepage_v_blocks_text_image_block_locales";
  DROP TABLE "_homepage_v_blocks_hero_block";
  DROP TABLE "_homepage_v_blocks_hero_block_locales";
  DROP TABLE "_homepage_v";
  DROP TABLE "_homepage_v_locales";
  DROP TABLE "blog_index_blocks_iframe_block";
  DROP TABLE "blog_index_blocks_iframe_block_locales";
  DROP TABLE "blog_index_blocks_icon_grid_block_items";
  DROP TABLE "blog_index_blocks_icon_grid_block";
  DROP TABLE "blog_index_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "blog_index_blocks_gallery_grid_block";
  DROP TABLE "blog_index_blocks_video_block";
  DROP TABLE "blog_index_blocks_form_block";
  DROP TABLE "blog_index_blocks_form_block_locales";
  DROP TABLE "blog_index_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "blog_index_blocks_card_grid_block_cards";
  DROP TABLE "blog_index_blocks_card_grid_block";
  DROP TABLE "blog_index_blocks_markdown_block";
  DROP TABLE "blog_index_blocks_markdown_block_locales";
  DROP TABLE "blog_index_blocks_faq_block_items";
  DROP TABLE "blog_index_blocks_faq_block";
  DROP TABLE "blog_index_blocks_faq_block_locales";
  DROP TABLE "blog_index_blocks_text_image_block_items";
  DROP TABLE "blog_index_blocks_text_image_block";
  DROP TABLE "blog_index_blocks_text_image_block_locales";
  DROP TABLE "blog_index_blocks_hero_block";
  DROP TABLE "blog_index_blocks_hero_block_locales";
  DROP TABLE "blog_index";
  DROP TABLE "blog_index_locales";
  DROP TABLE "_blog_index_v_blocks_iframe_block";
  DROP TABLE "_blog_index_v_blocks_iframe_block_locales";
  DROP TABLE "_blog_index_v_blocks_icon_grid_block_items";
  DROP TABLE "_blog_index_v_blocks_icon_grid_block";
  DROP TABLE "_blog_index_v_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "_blog_index_v_blocks_gallery_grid_block";
  DROP TABLE "_blog_index_v_blocks_video_block";
  DROP TABLE "_blog_index_v_blocks_form_block";
  DROP TABLE "_blog_index_v_blocks_form_block_locales";
  DROP TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "_blog_index_v_blocks_card_grid_block_cards";
  DROP TABLE "_blog_index_v_blocks_card_grid_block";
  DROP TABLE "_blog_index_v_blocks_markdown_block";
  DROP TABLE "_blog_index_v_blocks_markdown_block_locales";
  DROP TABLE "_blog_index_v_blocks_faq_block_items";
  DROP TABLE "_blog_index_v_blocks_faq_block";
  DROP TABLE "_blog_index_v_blocks_faq_block_locales";
  DROP TABLE "_blog_index_v_blocks_text_image_block_items";
  DROP TABLE "_blog_index_v_blocks_text_image_block";
  DROP TABLE "_blog_index_v_blocks_text_image_block_locales";
  DROP TABLE "_blog_index_v_blocks_hero_block";
  DROP TABLE "_blog_index_v_blocks_hero_block_locales";
  DROP TABLE "_blog_index_v";
  DROP TABLE "_blog_index_v_locales";
  DROP INDEX IF EXISTS "pages_slug_idx";
  DROP INDEX IF EXISTS "_pages_v_version_version_slug_idx";
  DROP INDEX IF EXISTS "posts_slug_idx";
  ALTER TABLE "pages" ADD COLUMN "page_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_page_title" varchar;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_bleed_image_block_order_idx" ON "pages_blocks_full_bleed_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_bleed_image_block_parent_id_idx" ON "pages_blocks_full_bleed_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_full_bleed_image_block_path_idx" ON "pages_blocks_full_bleed_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_section_header_block_order_idx" ON "pages_blocks_section_header_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_section_header_block_parent_id_idx" ON "pages_blocks_section_header_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_section_header_block_path_idx" ON "pages_blocks_section_header_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block_order_idx" ON "_pages_v_blocks_full_bleed_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block_parent_id_idx" ON "_pages_v_blocks_full_bleed_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block_path_idx" ON "_pages_v_blocks_full_bleed_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_section_header_block_order_idx" ON "_pages_v_blocks_section_header_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_section_header_block_parent_id_idx" ON "_pages_v_blocks_section_header_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_section_header_block_path_idx" ON "_pages_v_blocks_section_header_block" USING btree ("_path");
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "page_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_page_title";`)
}
