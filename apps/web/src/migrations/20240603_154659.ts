import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

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
 CREATE TYPE "enum__pages_v_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TYPE "bgColor" ADD VALUE 'neutral';
ALTER TYPE "bgColor" ADD VALUE 'blue';
ALTER TYPE "bgColor" ADD VALUE 'indigo';
ALTER TYPE "bgColor" ADD VALUE 'purple';
CREATE TABLE IF NOT EXISTS "pages_blocks_markdown_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_markdown_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_markdown_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_markdown_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
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

CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_order_idx" ON "pages_blocks_markdown_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_parent_id_idx" ON "pages_blocks_markdown_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_path_idx" ON "pages_blocks_markdown_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_order_idx" ON "_pages_v_blocks_markdown_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_parent_id_idx" ON "_pages_v_blocks_markdown_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_path_idx" ON "_pages_v_blocks_markdown_block" ("_path");
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
 ALTER TABLE "four_oh_four_locales" ADD CONSTRAINT "four_oh_four_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "four_oh_four"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "bgColor" ADD VALUE 'bg';
ALTER TYPE "bgColor" ADD VALUE 'lightBg';
ALTER TYPE "bgColor" ADD VALUE 'titleDefault';
ALTER TYPE "bgColor" ADD VALUE 'textDefault';
ALTER TYPE "bgColor" ADD VALUE 'accent';
DROP TABLE "pages_blocks_markdown_block";
DROP TABLE "pages_blocks_markdown_block_locales";
DROP TABLE "_pages_v_blocks_markdown_block";
DROP TABLE "_pages_v_blocks_markdown_block_locales";
DROP TABLE "four_oh_four";
DROP TABLE "four_oh_four_locales";`);

};
