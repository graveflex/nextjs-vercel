import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_page_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_faq_block_block_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_block_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_block_config_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_block_config_theme" AS ENUM('light', 'dark');
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

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"sub_title" jsonb,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_faq_block_block_config_theme",
	"block_config_hidden" boolean,
	"title" varchar,
	"sub_title" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_text_image_block_block_config_theme",
	"block_config_hidden" boolean,
	"blockConfig_layout" "enum__pages_v_blocks_text_image_block_block_config_layout",
	"title" varchar,
	"content" jsonb,
	"cta_label" varchar,
	"cta_href" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_hero_block_block_config_theme",
	"block_config_hidden" boolean,
	"blockConfig_layout" "enum__pages_v_blocks_hero_block_block_config_layout",
	"eyebrow" varchar,
	"title" varchar,
	"sub_title" jsonb,
	"input_placeholder" varchar,
	"input_type" "enum__pages_v_blocks_hero_block_input_type",
	"cta_label" varchar,
	"cta_href" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_seo_config_title" varchar,
	"version_seo_config_description" varchar,
	"version_seo_config_keywords" varchar,
	"version_page_config_slug" varchar,
	"version_pageConfig_theme" "enum__pages_v_version_page_config_theme",
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__pages_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"images_id" integer
);

ALTER TABLE "pages" ALTER COLUMN "page_config_slug" DROP NOT NULL;
ALTER TABLE "pages" ADD COLUMN "_status" "enum_pages_status";
CREATE INDEX IF NOT EXISTS "_order_idx" ON "_pages_v_blocks_faq_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "_pages_v_blocks_faq_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "order_idx" ON "_pages_v_blocks_faq_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "_pages_v_blocks_faq_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "_pages_v_blocks_faq_block" ("_path");
CREATE INDEX IF NOT EXISTS "order_idx" ON "_pages_v_blocks_text_image_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "_pages_v_blocks_text_image_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "_pages_v_blocks_text_image_block" ("_path");
CREATE INDEX IF NOT EXISTS "order_idx" ON "_pages_v_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "_pages_v_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "_pages_v_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "_pages_v" ("created_at");
CREATE INDEX IF NOT EXISTS "updated_at_idx" ON "_pages_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "latest_idx" ON "_pages_v" ("latest");
CREATE INDEX IF NOT EXISTS "order_idx" ON "_pages_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "parent_idx" ON "_pages_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "_pages_v_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_items" ADD CONSTRAINT "_pages_v_blocks_faq_block_items__parent_id__pages_v_blocks_faq_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_id__pages_v_id_fk" FOREIGN KEY ("parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_id_pages_id_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_images_id_images_id_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "_pages_v_blocks_faq_block_items";
DROP TABLE "_pages_v_blocks_faq_block";
DROP TABLE "_pages_v_blocks_text_image_block";
DROP TABLE "_pages_v_blocks_hero_block";
DROP TABLE "_pages_v";
DROP TABLE "_pages_v_rels";
ALTER TABLE "pages" ALTER COLUMN "page_config_slug" SET NOT NULL;
ALTER TABLE "pages" DROP COLUMN IF EXISTS "_status";`);

};
