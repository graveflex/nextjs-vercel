import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "public"."enum_pages_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_pages_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."undefined_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."card_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."textimage_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__pages_v_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__pages_v_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_icon_grid_block_items" (
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

CREATE TABLE IF NOT EXISTS "pages_blocks_icon_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_icon_grid_block_block_config_theme",
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
	"layout" "enum_pages_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items" (
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_icon_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_icon_grid_block_block_config_theme",
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
	"layout" "enum__pages_v_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
	"_uuid" varchar,
	"block_name" varchar
);

DROP TABLE "pages_blocks_section_header_block_locales";
DROP TABLE "pages_blocks_gallery_grid_block_locales";
DROP TABLE "pages_blocks_card_grid_block_cards_card_ctas_locales";
DROP TABLE "pages_blocks_text_image_block_items_locales";
DROP TABLE "_pages_v_blocks_section_header_block_locales";
DROP TABLE "_pages_v_blocks_gallery_grid_block_locales";
DROP TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas_locales";
DROP TABLE "_pages_v_blocks_text_image_block_items_locales";
DROP TABLE "posts_ctas_locales";
DROP TABLE "nav_header_collapsible_menu_sections_links_locales";
DROP TABLE "nav_header_flat_menu_locales";
DROP TABLE "nav_footer_footer_items_footer_menu_locales";
DROP TABLE "nav_locales";
ALTER TABLE "pages_blocks_section_header_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_section_header_block" ADD COLUMN "cta_color" "undefined_cta_tv";
ALTER TABLE "pages_blocks_gallery_grid_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_gallery_grid_block" ADD COLUMN "cta_color" "undefined_cta_tv";
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "_locale" "_locales" NOT NULL;
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "cta_color" "card_cta_tv";
ALTER TABLE "pages_blocks_text_image_block_items" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_text_image_block_items" ADD COLUMN "cta_color" "textimage_cta_tv";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_color" "undefined_cta_tv";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_color" "undefined_cta_tv";
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "cta_color" "undefined_cta_tv";
ALTER TABLE "_pages_v_blocks_section_header_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_section_header_block" ADD COLUMN "cta_color" "undefined_cta_tv";
ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD COLUMN "cta_color" "undefined_cta_tv";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "_locale" "_locales" NOT NULL;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "cta_color" "card_cta_tv";
ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD COLUMN "cta_color" "textimage_cta_tv";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_color" "undefined_cta_tv";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_color" "undefined_cta_tv";
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "cta_color" "undefined_cta_tv";
ALTER TABLE "posts_ctas" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "posts_ctas" ADD COLUMN "cta_color" "card_cta_tv";
ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD COLUMN "link_label" varchar;
ALTER TABLE "nav_header_flat_menu" ADD COLUMN "link_label" varchar;
ALTER TABLE "nav_footer_footer_items_footer_menu" ADD COLUMN "link_label" varchar;
ALTER TABLE "nav" ADD COLUMN "header_cta_button_cta_link_label" varchar;
ALTER TABLE "nav" ADD COLUMN "header_ctaButton_cta_color" "undefined_cta_tv";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_icon_grid_block" ADD CONSTRAINT "pages_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_icon_grid_block" ADD CONSTRAINT "pages_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_icon_grid_block" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_icon_grid_block" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_items_order_idx" ON "pages_blocks_icon_grid_block_items" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_items_parent_id_idx" ON "pages_blocks_icon_grid_block_items" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_items_locale_idx" ON "pages_blocks_icon_grid_block_items" USING btree ("_locale");
CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_order_idx" ON "pages_blocks_icon_grid_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_parent_id_idx" ON "pages_blocks_icon_grid_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_path_idx" ON "pages_blocks_icon_grid_block" USING btree ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items_order_idx" ON "_pages_v_blocks_icon_grid_block_items" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items_parent_id_idx" ON "_pages_v_blocks_icon_grid_block_items" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items_locale_idx" ON "_pages_v_blocks_icon_grid_block_items" USING btree ("_locale");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_order_idx" ON "_pages_v_blocks_icon_grid_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_parent_id_idx" ON "_pages_v_blocks_icon_grid_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_path_idx" ON "_pages_v_blocks_icon_grid_block" USING btree ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
ALTER TABLE "pages_blocks_text_image_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block_locales" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP COLUMN IF EXISTS "cta_link_label";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "pages_blocks_section_header_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_section_header_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_gallery_grid_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block_items_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_text_image_block_items_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_section_header_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_section_header_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_gallery_grid_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block_items_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_text_image_block_items_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "posts_ctas_locales" (
	"cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "posts_ctas_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections_links_locales" (
	"link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "nav_header_collapsible_menu_sections_links_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "nav_header_flat_menu_locales" (
	"link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "nav_header_flat_menu_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "nav_footer_footer_items_footer_menu_locales" (
	"link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "nav_footer_footer_items_footer_menu_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "nav_locales" (
	"header_cta_button_cta_link_label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "nav_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

DROP TABLE "pages_blocks_icon_grid_block_items";
DROP TABLE "pages_blocks_icon_grid_block";
DROP TABLE "_pages_v_blocks_icon_grid_block_items";
DROP TABLE "_pages_v_blocks_icon_grid_block";
DROP INDEX IF EXISTS "pages_blocks_card_grid_block_cards_card_ctas_locale_idx";
DROP INDEX IF EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_locale_idx";
ALTER TABLE "pages_blocks_text_image_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block_locales" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD COLUMN "cta_link_label" varchar;
DO $$ BEGIN
 ALTER TABLE "pages_blocks_section_header_block_locales" ADD CONSTRAINT "pages_blocks_section_header_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section_header_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block_locales" ADD CONSTRAINT "pages_blocks_gallery_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas_locales" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid_block_cards_card_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_items_locales" ADD CONSTRAINT "pages_blocks_text_image_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_image_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_section_header_block_locales" ADD CONSTRAINT "_pages_v_blocks_section_header_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section_header_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block_locales" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid_block_cards_card_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_items_locales" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_image_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_ctas_locales" ADD CONSTRAINT "posts_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_collapsible_menu_sections_links_locales" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_header_collapsible_menu_sections_links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_flat_menu_locales" ADD CONSTRAINT "nav_header_flat_menu_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_header_flat_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_items_footer_menu_locales" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_footer_footer_items_footer_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_locales" ADD CONSTRAINT "nav_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_section_header_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_section_header_block" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "pages_blocks_gallery_grid_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_gallery_grid_block" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "_locale";
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "pages_blocks_text_image_block_items" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_text_image_block_items" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_color";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_color";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "_pages_v_blocks_section_header_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_section_header_block" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "_pages_v_blocks_gallery_grid_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_gallery_grid_block" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "_locale";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "_pages_v_blocks_text_image_block_items" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block_items" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_color";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_color";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "posts_ctas" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "posts_ctas" DROP COLUMN IF EXISTS "cta_color";
ALTER TABLE "nav_header_collapsible_menu_sections_links" DROP COLUMN IF EXISTS "link_label";
ALTER TABLE "nav_header_flat_menu" DROP COLUMN IF EXISTS "link_label";
ALTER TABLE "nav_footer_footer_items_footer_menu" DROP COLUMN IF EXISTS "link_label";
ALTER TABLE "nav" DROP COLUMN IF EXISTS "header_cta_button_cta_link_label";
ALTER TABLE "nav" DROP COLUMN IF EXISTS "header_ctaButton_cta_color";`)
}
