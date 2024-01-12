import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"sub_title" varchar,
	"cta_label" varchar NOT NULL,
	"cta_href" varchar NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_config_slug" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"images_id" integer
);

CREATE INDEX IF NOT EXISTS "order_idx" ON "pages_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "parent_id_idx" ON "pages_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "pages_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "order_idx" ON "pages_rels" ("order");
CREATE INDEX IF NOT EXISTS "parent_idx" ON "pages_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "pages_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_images_id_images_id_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_hero_block";
DROP TABLE "pages";
DROP TABLE "pages_rels";`);

};
