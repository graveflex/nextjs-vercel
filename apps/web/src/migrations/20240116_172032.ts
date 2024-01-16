import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_options_content_side" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"content" jsonb,
	"blockOptions_contentSide" "enum_pages_blocks_text_image_block_block_options_content_side",
	"block_name" varchar
);

CREATE INDEX IF NOT EXISTS "order_idx" ON "pages_blocks_text_image_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "pages_blocks_text_image_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "pages_blocks_text_image_block" ("_path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_text_image_block";`);

};
