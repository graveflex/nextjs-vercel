import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_reveal_block_block_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_reveal_block_block_config_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_reveal_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_hero_reveal_block_block_config_theme",
	"block_config_hidden" boolean,
	"title" varchar,
	"body" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_reveal_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_hero_reveal_block_block_config_theme",
	"block_config_hidden" boolean,
	"title" varchar,
	"body" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE INDEX IF NOT EXISTS "order_idx" ON "pages_blocks_hero_reveal_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "pages_blocks_hero_reveal_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "pages_blocks_hero_reveal_block" ("_path");
CREATE INDEX IF NOT EXISTS "order_idx" ON "_pages_v_blocks_hero_reveal_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "_pages_v_blocks_hero_reveal_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "_pages_v_blocks_hero_reveal_block" ("_path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_reveal_block" ADD CONSTRAINT "pages_blocks_hero_reveal_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_reveal_block" ADD CONSTRAINT "_pages_v_blocks_hero_reveal_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_hero_reveal_block";
DROP TABLE "_pages_v_blocks_hero_reveal_block";`);

};
