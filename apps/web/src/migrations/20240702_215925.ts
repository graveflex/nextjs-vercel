import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "_locales" AS ENUM('en-US', 'es-US');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_section_header_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "bgColor" AS ENUM('fg', 'neutral', 'blue', 'indigo', 'purple');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "cw" AS ENUM('full', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "t" AS ENUM('9.375rem', '7.5rem', '3.75rem', '2.25rem', '1.125rem', 'unset');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "b" AS ENUM('9.375rem', '7.5rem', '3.75rem', '2.25rem', '1.125rem', 'unset');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_section_header_block_alignment" AS ENUM('center', 'left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "undefined_cta_t" AS ENUM('internal', 'external', 'email', 'phone', 'file');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "undefined_link_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "undefined_link_iw" AS ENUM('20', '25', '30', '35');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "undefined_cta_v" AS ENUM('outline', 'solid', 'link');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "card_cta_v" AS ENUM('outline', 'solid', 'link');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "textimage_cta_v" AS ENUM('outline', 'solid', 'link');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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
 CREATE TYPE "enum_pages_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_section_header_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_section_header_block_alignment" AS ENUM('center', 'left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
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

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_images_additional_props_object_fit" AS ENUM('cover', 'contain', 'fill', 'scale-down');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_images_additional_props_aspect_ratio" AS ENUM('1/1', '3/2', '4/3', '6/7', '16/9', 'initial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_redirects_to_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_forms_confirmation_type" AS ENUM('message', 'redirect');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_nav_header_banner_background" AS ENUM('white', 'black', 'gray');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "iconnavitem_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "iconnavitem_iw" AS ENUM('20', '25', '30', '35');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_section_header_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_section_header_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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
	"alignment" "enum_pages_blocks_section_header_block_alignment",
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_section_header_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_section_header_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"image_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_gallery_grid_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_gallery_grid_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_video_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"video_id" integer,
	"caption" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_form_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_form_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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

CREATE TABLE IF NOT EXISTS "pages_blocks_form_block_locales" (
	"content" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "card_cta_v"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"card_image_id" integer
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards_locales" (
	"card_eyebrow" varchar,
	"card_headline" varchar,
	"card_sub_head" varchar,
	"card_date" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_card_grid_block_cards_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_card_grid_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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

CREATE TABLE IF NOT EXISTS "pages_blocks_markdown_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_markdown_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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

CREATE TABLE IF NOT EXISTS "pages_blocks_markdown_block_locales" (
	"content" jsonb,
	"maxWidth" "enum_pages_blocks_markdown_block_max_width",
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"content" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_faq_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"textAlignment" "enum_pages_blocks_faq_block_text_alignment",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_locales" (
	"header" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "textimage_cta_v"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block_items_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_text_image_block_items_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_text_image_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"layout" "enum_pages_blocks_text_image_block_layout",
	"image_id" integer,
	"video_id" integer,
	"form_textinput_name" varchar,
	"form_textinput_placeholder" varchar,
	"form_textinput_help_text" varchar,
	"form_textinput_label" varchar,
	"form_textinput_required" boolean,
	"form_cta_link_type" "undefined_cta_t",
	"form_cta_link_internal_href_id" integer,
	"form_cta_link_external_href" varchar,
	"form_cta_link_email_href" varchar,
	"form_cta_link_phone_href" varchar,
	"form_cta_link_file_href_id" integer,
	"form_cta_link_new_tab" boolean,
	"form_cta_link_icon_name" "undefined_link_ic",
	"form_cta_link_icon_size" "undefined_link_iw",
	"form_cta_link_icon_color" varchar,
	"form_cta_variant" "undefined_cta_v",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block_locales" (
	"content" jsonb,
	"form_cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_hero_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"image_id" integer,
	"layout" "enum_pages_blocks_hero_block_layout",
	"contentAlign" "enum_pages_blocks_hero_block_content_align",
	"form_textinput_name" varchar,
	"form_textinput_placeholder" varchar,
	"form_textinput_help_text" varchar,
	"form_textinput_label" varchar,
	"form_textinput_required" boolean,
	"form_cta_link_type" "undefined_cta_t",
	"form_cta_link_internal_href_id" integer,
	"form_cta_link_external_href" varchar,
	"form_cta_link_email_href" varchar,
	"form_cta_link_phone_href" varchar,
	"form_cta_link_file_href_id" integer,
	"form_cta_link_new_tab" boolean,
	"form_cta_link_icon_name" "undefined_link_ic",
	"form_cta_link_icon_size" "undefined_link_iw",
	"form_cta_link_icon_color" varchar,
	"form_cta_variant" "undefined_cta_v",
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block_locales" (
	"eyebrow" varchar,
	"content" jsonb,
	"form_cta_link_label" varchar,
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_title" varchar,
	"slug" varchar,
	"theme" "enum_pages_theme",
	"seo_config_title" varchar,
	"seo_config_description" varchar,
	"seo_config_keywords" varchar,
	"published_at" timestamp(3) with time zone,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_pages_status"
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_section_header_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_section_header_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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
	"alignment" "enum__pages_v_blocks_section_header_block_alignment",
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_section_header_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_section_header_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"image_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_gallery_grid_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_gallery_grid_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_video_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"video_id" integer,
	"caption" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_form_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block_locales" (
	"content" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "card_cta_v",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"card_image_id" integer,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_locales" (
	"card_eyebrow" varchar,
	"card_headline" varchar,
	"card_sub_head" varchar,
	"card_date" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_card_grid_block_cards_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_card_grid_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_markdown_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_markdown_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_markdown_block_locales" (
	"content" jsonb,
	"maxWidth" "enum__pages_v_blocks_markdown_block_max_width",
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"content" jsonb,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_faq_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"textAlignment" "enum__pages_v_blocks_faq_block_text_alignment",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_locales" (
	"header" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "textimage_cta_v",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block_items_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_text_image_block_items_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_text_image_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"layout" "enum__pages_v_blocks_text_image_block_layout",
	"image_id" integer,
	"video_id" integer,
	"form_textinput_name" varchar,
	"form_textinput_placeholder" varchar,
	"form_textinput_help_text" varchar,
	"form_textinput_label" varchar,
	"form_textinput_required" boolean,
	"form_cta_link_type" "undefined_cta_t",
	"form_cta_link_internal_href_id" integer,
	"form_cta_link_external_href" varchar,
	"form_cta_link_email_href" varchar,
	"form_cta_link_phone_href" varchar,
	"form_cta_link_file_href_id" integer,
	"form_cta_link_new_tab" boolean,
	"form_cta_link_icon_name" "undefined_link_ic",
	"form_cta_link_icon_size" "undefined_link_iw",
	"form_cta_link_icon_color" varchar,
	"form_cta_variant" "undefined_cta_v",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block_locales" (
	"content" jsonb,
	"form_cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_hero_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_background_image_id" integer,
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"image_id" integer,
	"layout" "enum__pages_v_blocks_hero_block_layout",
	"contentAlign" "enum__pages_v_blocks_hero_block_content_align",
	"form_textinput_name" varchar,
	"form_textinput_placeholder" varchar,
	"form_textinput_help_text" varchar,
	"form_textinput_label" varchar,
	"form_textinput_required" boolean,
	"form_cta_link_type" "undefined_cta_t",
	"form_cta_link_internal_href_id" integer,
	"form_cta_link_external_href" varchar,
	"form_cta_link_email_href" varchar,
	"form_cta_link_phone_href" varchar,
	"form_cta_link_file_href_id" integer,
	"form_cta_link_new_tab" boolean,
	"form_cta_link_icon_name" "undefined_link_ic",
	"form_cta_link_icon_size" "undefined_link_iw",
	"form_cta_link_icon_color" varchar,
	"form_cta_variant" "undefined_cta_v",
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block_locales" (
	"eyebrow" varchar,
	"content" jsonb,
	"form_cta_link_label" varchar,
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_page_title" varchar,
	"version_slug" varchar,
	"version_theme" "enum__pages_v_version_theme",
	"version_seo_config_title" varchar,
	"version_seo_config_description" varchar,
	"version_seo_config_keywords" varchar,
	"version_published_at" timestamp(3) with time zone,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__pages_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "posts_ctas" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"cta_link_type" "undefined_cta_t",
	"cta_link_internal_href_id" integer,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_file_href_id" integer,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "card_cta_v"
);

CREATE TABLE IF NOT EXISTS "posts_ctas_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "posts_ctas_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "posts_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "posts_content_locales" (
	"content" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "posts_content_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" timestamp(3) with time zone NOT NULL,
	"thumbnail_id" integer NOT NULL,
	"cover_image_id" integer NOT NULL,
	"seo_config_title" varchar,
	"seo_config_description" varchar,
	"seo_config_keywords" varchar,
	"slug" varchar,
	"published_at" timestamp(3) with time zone,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "posts_locales" (
	"title" varchar NOT NULL,
	"sub_title" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "posts_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "posts_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"authors_id" integer,
	"tags_id" integer
);

CREATE TABLE IF NOT EXISTS "authors" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar,
	"full_name" varchar NOT NULL,
	"image_id" integer,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "authors_locales" (
	"job_title" varchar NOT NULL,
	"bio" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "authors_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "tags_locales" (
	"label" varchar NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "tags_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "files" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_props_fill" boolean,
	"image_props_priority" boolean,
	"image_props_quality" numeric,
	"additionalProps_objectFit" "enum_images_additional_props_object_fit",
	"additional_props_is_rounded" boolean,
	"additionalProps_aspectRatio" "enum_images_additional_props_aspect_ratio",
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric,
	"sizes_thumbnail_url" varchar,
	"sizes_thumbnail_width" numeric,
	"sizes_thumbnail_height" numeric,
	"sizes_thumbnail_mime_type" varchar,
	"sizes_thumbnail_filesize" numeric,
	"sizes_thumbnail_filename" varchar,
	"sizes_mobile_url" varchar,
	"sizes_mobile_width" numeric,
	"sizes_mobile_height" numeric,
	"sizes_mobile_mime_type" varchar,
	"sizes_mobile_filesize" numeric,
	"sizes_mobile_filename" varchar,
	"sizes_tablet_url" varchar,
	"sizes_tablet_width" numeric,
	"sizes_tablet_height" numeric,
	"sizes_tablet_mime_type" varchar,
	"sizes_tablet_filesize" numeric,
	"sizes_tablet_filename" varchar,
	"sizes_desktop_url" varchar,
	"sizes_desktop_width" numeric,
	"sizes_desktop_height" numeric,
	"sizes_desktop_mime_type" varchar,
	"sizes_desktop_filesize" numeric,
	"sizes_desktop_filename" varchar,
	"sizes_ultrawide_url" varchar,
	"sizes_ultrawide_width" numeric,
	"sizes_ultrawide_height" numeric,
	"sizes_ultrawide_mime_type" varchar,
	"sizes_ultrawide_filesize" numeric,
	"sizes_ultrawide_filename" varchar
);

CREATE TABLE IF NOT EXISTS "images_locales" (
	"alt" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "images_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"published_date" timestamp(3) with time zone,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "redirects" (
	"id" serial PRIMARY KEY NOT NULL,
	"from" varchar NOT NULL,
	"to_type" "enum_redirects_to_type",
	"to_url" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "redirects_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"posts_id" integer
);

CREATE TABLE IF NOT EXISTS "forms_blocks_text_input" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"textinput_name" varchar,
	"textinput_placeholder" varchar,
	"textinput_help_text" varchar,
	"textinput_label" varchar,
	"textinput_required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_text_area" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"placeholder" varchar,
	"help_text" varchar,
	"label" varchar,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select_select_select_options" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"value" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select_select_select_options_locales" (
	"option" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_select_select_select_options_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"select_name" varchar,
	"select_placeholder" varchar,
	"select_help_text" varchar,
	"select_label" varchar,
	"select_required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"value" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options_locales" (
	"label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_checkbox_checkbox_checkbox_options_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"checkbox_name" varchar,
	"checkbox_placeholder" varchar,
	"checkbox_help_text" varchar,
	"checkbox_label" varchar,
	"checkbox_required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_emails" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"email_to" varchar,
	"cc" varchar,
	"bcc" varchar,
	"reply_to" varchar,
	"email_from" varchar
);

CREATE TABLE IF NOT EXISTS "forms_emails_locales" (
	"subject" varchar NOT NULL,
	"message" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_emails_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"confirmationType" "enum_forms_confirmation_type",
	"redirect_url" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "forms_locales" (
	"submit_button_label" varchar,
	"confirmation_message" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "forms_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"field" varchar NOT NULL,
	"value" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "form_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"form_id" integer NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "undefined_cta_t",
	"link_internal_href_id" integer,
	"link_external_href" varchar,
	"link_email_href" varchar,
	"link_phone_href" varchar,
	"link_file_href_id" integer,
	"link_new_tab" boolean,
	"link_icon_name" "undefined_link_ic",
	"link_icon_size" "undefined_link_iw",
	"link_icon_color" varchar
);

CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections_links_locales" (
	"link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "nav_header_collapsible_menu_sections_links_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "nav_header_flat_menu" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "undefined_cta_t",
	"link_internal_href_id" integer,
	"link_external_href" varchar,
	"link_email_href" varchar,
	"link_phone_href" varchar,
	"link_file_href_id" integer,
	"link_new_tab" boolean,
	"link_icon_name" "undefined_link_ic",
	"link_icon_size" "undefined_link_iw",
	"link_icon_color" varchar
);

CREATE TABLE IF NOT EXISTS "nav_header_flat_menu_locales" (
	"link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "nav_header_flat_menu_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "nav_header_icon_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"href" varchar,
	"new_tab" boolean,
	"icon_name" "iconnavitem_ic",
	"icon_size" "iconnavitem_iw",
	"icon_color" varchar
);

CREATE TABLE IF NOT EXISTS "nav_footer_footer_items_footer_menu" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "undefined_cta_t",
	"link_internal_href_id" integer,
	"link_external_href" varchar,
	"link_email_href" varchar,
	"link_phone_href" varchar,
	"link_file_href_id" integer,
	"link_new_tab" boolean,
	"link_icon_name" "undefined_link_ic",
	"link_icon_size" "undefined_link_iw",
	"link_icon_color" varchar
);

CREATE TABLE IF NOT EXISTS "nav_footer_footer_items_footer_menu_locales" (
	"link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "nav_footer_footer_items_footer_menu_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "nav" (
	"id" serial PRIMARY KEY NOT NULL,
	"header_logo_id" integer,
	"header_banner_content" jsonb,
	"header_banner_background" "enum_nav_header_banner_background",
	"header_has_cta" boolean,
	"header_ctaButton_cta_link_type" "undefined_cta_t",
	"header_cta_button_cta_link_internal_href_id" integer,
	"header_cta_button_cta_link_external_href" varchar,
	"header_cta_button_cta_link_email_href" varchar,
	"header_cta_button_cta_link_phone_href" varchar,
	"header_cta_button_cta_link_file_href_id" integer,
	"header_cta_button_cta_link_new_tab" boolean,
	"header_ctaButton_cta_link_icon_name" "undefined_link_ic",
	"header_ctaButton_cta_link_icon_size" "undefined_link_iw",
	"header_cta_button_cta_link_icon_color" varchar,
	"header_ctaButton_cta_variant" "undefined_cta_v",
	"footer_footer_items_footer_logo_id" integer,
	"footer_footer_items_copyright" jsonb,
	"footer_footer_items_legal_disclaimer" jsonb,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "nav_locales" (
	"header_cta_button_cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "nav_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "four_oh_four" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "four_oh_four_locales" (
	"content" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "four_oh_four_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE INDEX IF NOT EXISTS "pages_blocks_section_header_block_order_idx" ON "pages_blocks_section_header_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_section_header_block_parent_id_idx" ON "pages_blocks_section_header_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_section_header_block_path_idx" ON "pages_blocks_section_header_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images_order_idx" ON "pages_blocks_gallery_grid_block_gallery_images" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "pages_blocks_gallery_grid_block_gallery_images" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_order_idx" ON "pages_blocks_gallery_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_parent_id_idx" ON "pages_blocks_gallery_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_path_idx" ON "pages_blocks_gallery_grid_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_video_block_order_idx" ON "pages_blocks_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_video_block_parent_id_idx" ON "pages_blocks_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_video_block_path_idx" ON "pages_blocks_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_order_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_order_idx" ON "pages_blocks_card_grid_block_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_parent_id_idx" ON "pages_blocks_card_grid_block_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_order_idx" ON "pages_blocks_card_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_parent_id_idx" ON "pages_blocks_card_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_path_idx" ON "pages_blocks_card_grid_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_order_idx" ON "pages_blocks_markdown_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_parent_id_idx" ON "pages_blocks_markdown_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_path_idx" ON "pages_blocks_markdown_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_order_idx" ON "pages_blocks_faq_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_parent_id_idx" ON "pages_blocks_faq_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_locale_idx" ON "pages_blocks_faq_block_items" ("_locale");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_order_idx" ON "pages_blocks_faq_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_parent_id_idx" ON "pages_blocks_faq_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_path_idx" ON "pages_blocks_faq_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_order_idx" ON "pages_blocks_text_image_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_parent_id_idx" ON "pages_blocks_text_image_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_locale_idx" ON "pages_blocks_text_image_block_items" ("_locale");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_order_idx" ON "pages_blocks_text_image_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_parent_id_idx" ON "pages_blocks_text_image_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_path_idx" ON "pages_blocks_text_image_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_order_idx" ON "pages_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_parent_id_idx" ON "pages_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_path_idx" ON "pages_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_section_header_block_order_idx" ON "_pages_v_blocks_section_header_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_section_header_block_parent_id_idx" ON "_pages_v_blocks_section_header_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_section_header_block_path_idx" ON "_pages_v_blocks_section_header_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images_order_idx" ON "_pages_v_blocks_gallery_grid_block_gallery_images" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_grid_block_gallery_images" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_order_idx" ON "_pages_v_blocks_gallery_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_parent_id_idx" ON "_pages_v_blocks_gallery_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_path_idx" ON "_pages_v_blocks_gallery_grid_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_block_order_idx" ON "_pages_v_blocks_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_block_parent_id_idx" ON "_pages_v_blocks_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_block_path_idx" ON "_pages_v_blocks_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_order_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_order_idx" ON "_pages_v_blocks_card_grid_block_cards" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_parent_id_idx" ON "_pages_v_blocks_card_grid_block_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_order_idx" ON "_pages_v_blocks_card_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_parent_id_idx" ON "_pages_v_blocks_card_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_path_idx" ON "_pages_v_blocks_card_grid_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_order_idx" ON "_pages_v_blocks_markdown_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_parent_id_idx" ON "_pages_v_blocks_markdown_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_path_idx" ON "_pages_v_blocks_markdown_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_order_idx" ON "_pages_v_blocks_faq_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_parent_id_idx" ON "_pages_v_blocks_faq_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_locale_idx" ON "_pages_v_blocks_faq_block_items" ("_locale");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_order_idx" ON "_pages_v_blocks_faq_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_parent_id_idx" ON "_pages_v_blocks_faq_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_path_idx" ON "_pages_v_blocks_faq_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_order_idx" ON "_pages_v_blocks_text_image_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_parent_id_idx" ON "_pages_v_blocks_text_image_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_locale_idx" ON "_pages_v_blocks_text_image_block_items" ("_locale");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_order_idx" ON "_pages_v_blocks_text_image_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_parent_id_idx" ON "_pages_v_blocks_text_image_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_path_idx" ON "_pages_v_blocks_text_image_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_order_idx" ON "_pages_v_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_parent_id_idx" ON "_pages_v_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_path_idx" ON "_pages_v_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" ("latest");
CREATE INDEX IF NOT EXISTS "posts_ctas_order_idx" ON "posts_ctas" ("_order");
CREATE INDEX IF NOT EXISTS "posts_ctas_parent_id_idx" ON "posts_ctas" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_content_order_idx" ON "posts_content" ("_order");
CREATE INDEX IF NOT EXISTS "posts_content_parent_id_idx" ON "posts_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" ("created_at");
CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" ("order");
CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" ("path");
CREATE INDEX IF NOT EXISTS "authors_created_at_idx" ON "authors" ("created_at");
CREATE INDEX IF NOT EXISTS "tags_created_at_idx" ON "tags" ("created_at");
CREATE INDEX IF NOT EXISTS "files_created_at_idx" ON "files" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "files_filename_idx" ON "files" ("filename");
CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" ("filename");
CREATE INDEX IF NOT EXISTS "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" ("sizes_thumbnail_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_mobile_sizes_mobile_filename_idx" ON "images" ("sizes_mobile_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_tablet_sizes_tablet_filename_idx" ON "images" ("sizes_tablet_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_desktop_sizes_desktop_filename_idx" ON "images" ("sizes_desktop_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_ultrawide_sizes_ultrawide_filename_idx" ON "images" ("sizes_ultrawide_filename");
CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "videos_filename_idx" ON "videos" ("filename");
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" ("from");
CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" ("created_at");
CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" ("order");
CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" ("path");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_input_order_idx" ON "forms_blocks_text_input" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_input_parent_id_idx" ON "forms_blocks_text_input" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_input_path_idx" ON "forms_blocks_text_input" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_area_order_idx" ON "forms_blocks_text_area" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_area_parent_id_idx" ON "forms_blocks_text_area" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_area_path_idx" ON "forms_blocks_text_area" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_select_select_options_order_idx" ON "forms_blocks_select_select_select_options" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_select_select_options_parent_id_idx" ON "forms_blocks_select_select_select_options" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options_order_idx" ON "forms_blocks_checkbox_checkbox_checkbox_options" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options_parent_id_idx" ON "forms_blocks_checkbox_checkbox_checkbox_options" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" ("_path");
CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" ("_order");
CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" ("created_at");
CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" ("_order");
CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" ("_parent_id");
CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_order_idx" ON "nav_header_collapsible_menu_sections_links" ("_order");
CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_parent_id_idx" ON "nav_header_collapsible_menu_sections_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_order_idx" ON "nav_header_collapsible_menu_sections" ("_order");
CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_parent_id_idx" ON "nav_header_collapsible_menu_sections" ("_parent_id");
CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_locale_idx" ON "nav_header_collapsible_menu_sections" ("_locale");
CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_order_idx" ON "nav_header_flat_menu" ("_order");
CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_parent_id_idx" ON "nav_header_flat_menu" ("_parent_id");
CREATE INDEX IF NOT EXISTS "nav_header_icon_items_order_idx" ON "nav_header_icon_items" ("_order");
CREATE INDEX IF NOT EXISTS "nav_header_icon_items_parent_id_idx" ON "nav_header_icon_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_order_idx" ON "nav_footer_footer_items_footer_menu" ("_order");
CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_parent_id_idx" ON "nav_footer_footer_items_footer_menu" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_section_header_block" ADD CONSTRAINT "pages_blocks_section_header_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_section_header_block_locales" ADD CONSTRAINT "pages_blocks_section_header_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_section_header_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block_locales" ADD CONSTRAINT "pages_blocks_gallery_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_video_block" ADD CONSTRAINT "pages_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_video_block" ADD CONSTRAINT "pages_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_video_block" ADD CONSTRAINT "pages_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form_block_locales" ADD CONSTRAINT "pages_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas_locales" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block_cards_card_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_locales" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block" ADD CONSTRAINT "pages_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block" ADD CONSTRAINT "pages_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_markdown_block" ADD CONSTRAINT "pages_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_markdown_block" ADD CONSTRAINT "pages_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_markdown_block_locales" ADD CONSTRAINT "pages_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items" ADD CONSTRAINT "pages_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_locales" ADD CONSTRAINT "pages_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_items" ADD CONSTRAINT "pages_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_items" ADD CONSTRAINT "pages_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_items" ADD CONSTRAINT "pages_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_items_locales" ADD CONSTRAINT "pages_blocks_text_image_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_text_image_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_locales" ADD CONSTRAINT "pages_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block_locales" ADD CONSTRAINT "pages_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_section_header_block" ADD CONSTRAINT "_pages_v_blocks_section_header_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_section_header_block_locales" ADD CONSTRAINT "_pages_v_blocks_section_header_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_section_header_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block_locales" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_video_block" ADD CONSTRAINT "_pages_v_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_video_block" ADD CONSTRAINT "_pages_v_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_video_block" ADD CONSTRAINT "_pages_v_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form_block_locales" ADD CONSTRAINT "_pages_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block_cards_card_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_markdown_block" ADD CONSTRAINT "_pages_v_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_markdown_block" ADD CONSTRAINT "_pages_v_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_markdown_block_locales" ADD CONSTRAINT "_pages_v_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_items" ADD CONSTRAINT "_pages_v_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_locales" ADD CONSTRAINT "_pages_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_items_locales" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_text_image_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "videos"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_locales" ADD CONSTRAINT "_pages_v_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD CONSTRAINT "_pages_v_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_ctas_locales" ADD CONSTRAINT "posts_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_content" ADD CONSTRAINT "posts_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_content_locales" ADD CONSTRAINT "posts_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_thumbnail_id_images_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_image_id_images_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "authors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "tags"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "authors" ADD CONSTRAINT "authors_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "authors_locales" ADD CONSTRAINT "authors_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "authors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tags_locales" ADD CONSTRAINT "tags_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "tags"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "images_locales" ADD CONSTRAINT "images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "redirects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_text_input" ADD CONSTRAINT "forms_blocks_text_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_text_area" ADD CONSTRAINT "forms_blocks_text_area_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select_select_select_options" ADD CONSTRAINT "forms_blocks_select_select_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select_select_select_options_locales" ADD CONSTRAINT "forms_blocks_select_select_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_select_select_select_options"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_checkbox_checkbox_checkbox_options" ADD CONSTRAINT "forms_blocks_checkbox_checkbox_checkbox_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_checkbox_checkbox_checkbox_options_locales" ADD CONSTRAINT "forms_blocks_checkbox_checkbox_checkbox_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_checkbox_checkbox_checkbox_options"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_emails"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "form_submissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_header_collapsible_menu_sections"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_collapsible_menu_sections_links_locales" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_header_collapsible_menu_sections_links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_collapsible_menu_sections" ADD CONSTRAINT "nav_header_collapsible_menu_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_flat_menu_locales" ADD CONSTRAINT "nav_header_flat_menu_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_header_flat_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_icon_items" ADD CONSTRAINT "nav_header_icon_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_items_footer_menu_locales" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_footer_footer_items_footer_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav" ADD CONSTRAINT "nav_header_logo_id_images_id_fk" FOREIGN KEY ("header_logo_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav" ADD CONSTRAINT "nav_header_cta_button_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("header_cta_button_cta_link_internal_href_id") REFERENCES "pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav" ADD CONSTRAINT "nav_header_cta_button_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("header_cta_button_cta_link_file_href_id") REFERENCES "files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav" ADD CONSTRAINT "nav_footer_footer_items_footer_logo_id_images_id_fk" FOREIGN KEY ("footer_footer_items_footer_logo_id") REFERENCES "images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_locales" ADD CONSTRAINT "nav_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "four_oh_four_locales" ADD CONSTRAINT "four_oh_four_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "four_oh_four"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "pages_blocks_section_header_block";
DROP TABLE "pages_blocks_section_header_block_locales";
DROP TABLE "pages_blocks_gallery_grid_block_gallery_images";
DROP TABLE "pages_blocks_gallery_grid_block";
DROP TABLE "pages_blocks_gallery_grid_block_locales";
DROP TABLE "pages_blocks_video_block";
DROP TABLE "pages_blocks_form_block";
DROP TABLE "pages_blocks_form_block_locales";
DROP TABLE "pages_blocks_card_grid_block_cards_card_ctas";
DROP TABLE "pages_blocks_card_grid_block_cards_card_ctas_locales";
DROP TABLE "pages_blocks_card_grid_block_cards";
DROP TABLE "pages_blocks_card_grid_block_cards_locales";
DROP TABLE "pages_blocks_card_grid_block";
DROP TABLE "pages_blocks_markdown_block";
DROP TABLE "pages_blocks_markdown_block_locales";
DROP TABLE "pages_blocks_faq_block_items";
DROP TABLE "pages_blocks_faq_block";
DROP TABLE "pages_blocks_faq_block_locales";
DROP TABLE "pages_blocks_text_image_block_items";
DROP TABLE "pages_blocks_text_image_block_items_locales";
DROP TABLE "pages_blocks_text_image_block";
DROP TABLE "pages_blocks_text_image_block_locales";
DROP TABLE "pages_blocks_hero_block";
DROP TABLE "pages_blocks_hero_block_locales";
DROP TABLE "pages";
DROP TABLE "_pages_v_blocks_section_header_block";
DROP TABLE "_pages_v_blocks_section_header_block_locales";
DROP TABLE "_pages_v_blocks_gallery_grid_block_gallery_images";
DROP TABLE "_pages_v_blocks_gallery_grid_block";
DROP TABLE "_pages_v_blocks_gallery_grid_block_locales";
DROP TABLE "_pages_v_blocks_video_block";
DROP TABLE "_pages_v_blocks_form_block";
DROP TABLE "_pages_v_blocks_form_block_locales";
DROP TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas";
DROP TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas_locales";
DROP TABLE "_pages_v_blocks_card_grid_block_cards";
DROP TABLE "_pages_v_blocks_card_grid_block_cards_locales";
DROP TABLE "_pages_v_blocks_card_grid_block";
DROP TABLE "_pages_v_blocks_markdown_block";
DROP TABLE "_pages_v_blocks_markdown_block_locales";
DROP TABLE "_pages_v_blocks_faq_block_items";
DROP TABLE "_pages_v_blocks_faq_block";
DROP TABLE "_pages_v_blocks_faq_block_locales";
DROP TABLE "_pages_v_blocks_text_image_block_items";
DROP TABLE "_pages_v_blocks_text_image_block_items_locales";
DROP TABLE "_pages_v_blocks_text_image_block";
DROP TABLE "_pages_v_blocks_text_image_block_locales";
DROP TABLE "_pages_v_blocks_hero_block";
DROP TABLE "_pages_v_blocks_hero_block_locales";
DROP TABLE "_pages_v";
DROP TABLE "posts_ctas";
DROP TABLE "posts_ctas_locales";
DROP TABLE "posts_content";
DROP TABLE "posts_content_locales";
DROP TABLE "posts";
DROP TABLE "posts_locales";
DROP TABLE "posts_rels";
DROP TABLE "authors";
DROP TABLE "authors_locales";
DROP TABLE "tags";
DROP TABLE "tags_locales";
DROP TABLE "files";
DROP TABLE "images";
DROP TABLE "images_locales";
DROP TABLE "videos";
DROP TABLE "users";
DROP TABLE "redirects";
DROP TABLE "redirects_rels";
DROP TABLE "forms_blocks_text_input";
DROP TABLE "forms_blocks_text_area";
DROP TABLE "forms_blocks_select_select_select_options";
DROP TABLE "forms_blocks_select_select_select_options_locales";
DROP TABLE "forms_blocks_select";
DROP TABLE "forms_blocks_checkbox_checkbox_checkbox_options";
DROP TABLE "forms_blocks_checkbox_checkbox_checkbox_options_locales";
DROP TABLE "forms_blocks_checkbox";
DROP TABLE "forms_emails";
DROP TABLE "forms_emails_locales";
DROP TABLE "forms";
DROP TABLE "forms_locales";
DROP TABLE "form_submissions_submission_data";
DROP TABLE "form_submissions";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "nav_header_collapsible_menu_sections_links";
DROP TABLE "nav_header_collapsible_menu_sections_links_locales";
DROP TABLE "nav_header_collapsible_menu_sections";
DROP TABLE "nav_header_flat_menu";
DROP TABLE "nav_header_flat_menu_locales";
DROP TABLE "nav_header_icon_items";
DROP TABLE "nav_footer_footer_items_footer_menu";
DROP TABLE "nav_footer_footer_items_footer_menu_locales";
DROP TABLE "nav";
DROP TABLE "nav_locales";
DROP TABLE "four_oh_four";
DROP TABLE "four_oh_four_locales";`)
};
