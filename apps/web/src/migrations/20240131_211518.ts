import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_faq_block_block_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"sub_title" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_faq_block_block_config_theme",
	"block_config_hidden" boolean,
	"title" varchar,
	"sub_title" jsonb,
	"block_name" varchar
);

ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "block_config_hidden" boolean;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "block_config_hidden" boolean;
CREATE INDEX IF NOT EXISTS "_order_idx" ON "pages_blocks_faq_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "pages_blocks_faq_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "order_idx" ON "pages_blocks_faq_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "pages_blocks_faq_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "pages_blocks_faq_block" ("_path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items" ADD CONSTRAINT "pages_blocks_faq_block_items__parent_id_pages_blocks_faq_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_faq_block_items";
DROP TABLE "pages_blocks_faq_block";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "block_config_hidden";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "block_config_hidden";`);

};
