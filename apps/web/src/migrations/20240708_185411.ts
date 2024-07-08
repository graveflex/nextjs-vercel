import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
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
ALTER TABLE "pages_blocks_gallery_grid_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_text_image_block_items" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_section_header_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "posts_ctas" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD COLUMN "link_label" varchar;
ALTER TABLE "nav_header_flat_menu" ADD COLUMN "link_label" varchar;
ALTER TABLE "nav_footer_footer_items_footer_menu" ADD COLUMN "link_label" varchar;
ALTER TABLE "nav" ADD COLUMN "header_cta_button_cta_link_label" varchar;
ALTER TABLE "pages_blocks_text_image_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block_locales" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP COLUMN IF EXISTS "cta_link_label";`)
};

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

ALTER TABLE "pages_blocks_text_image_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_hero_block_locales" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_section_header_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_gallery_grid_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_text_image_block_items" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_section_header_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_gallery_grid_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block_items" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "posts_ctas" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "nav_header_collapsible_menu_sections_links" DROP COLUMN IF EXISTS "link_label";
ALTER TABLE "nav_header_flat_menu" DROP COLUMN IF EXISTS "link_label";
ALTER TABLE "nav_footer_footer_items_footer_menu" DROP COLUMN IF EXISTS "link_label";
ALTER TABLE "nav" DROP COLUMN IF EXISTS "header_cta_button_cta_link_label";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_section_header_block_locales" ADD CONSTRAINT "pages_blocks_section_header_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_section_header_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block_locales" ADD CONSTRAINT "pages_blocks_gallery_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas_locales" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block_cards_card_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_items_locales" ADD CONSTRAINT "pages_blocks_text_image_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_text_image_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_section_header_block_locales" ADD CONSTRAINT "_pages_v_blocks_section_header_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_section_header_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block_locales" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block_cards_card_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_items_locales" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_text_image_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_ctas_locales" ADD CONSTRAINT "posts_ctas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts_ctas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_collapsible_menu_sections_links_locales" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_header_collapsible_menu_sections_links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_flat_menu_locales" ADD CONSTRAINT "nav_header_flat_menu_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_header_flat_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_items_footer_menu_locales" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_footer_footer_items_footer_menu"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_locales" ADD CONSTRAINT "nav_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};
