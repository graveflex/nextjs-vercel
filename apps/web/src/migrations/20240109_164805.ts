import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_nav_header_main_type" AS ENUM('link', 'button');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_nav_footer_secondary_type" AS ENUM('link', 'button');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
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

CREATE TABLE IF NOT EXISTS "nav_header_main" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"type" "enum_nav_header_main_type"
);

CREATE TABLE IF NOT EXISTS "nav_footer_secondary" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"type" "enum_nav_footer_secondary_type"
);

CREATE TABLE IF NOT EXISTS "nav" (
	"id" serial PRIMARY KEY NOT NULL,
	"footer_copyright" varchar,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "nav_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"images_id" integer
);

CREATE INDEX IF NOT EXISTS "created_at_idx" ON "images" ("created_at");
CREATE INDEX IF NOT EXISTS "sizes_ultrawide_filename_idx" ON "images" ("sizes_ultrawide_filename");
CREATE INDEX IF NOT EXISTS "_order_idx" ON "nav_header_main" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "nav_header_main" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_order_idx" ON "nav_footer_secondary" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "nav_footer_secondary" ("_parent_id");
CREATE INDEX IF NOT EXISTS "order_idx" ON "nav_rels" ("order");
CREATE INDEX IF NOT EXISTS "parent_idx" ON "nav_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "nav_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "nav_header_main" ADD CONSTRAINT "nav_header_main__parent_id_nav_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_secondary" ADD CONSTRAINT "nav_footer_secondary__parent_id_nav_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_rels" ADD CONSTRAINT "nav_rels_parent_id_nav_id_fk" FOREIGN KEY ("parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_rels" ADD CONSTRAINT "nav_rels_images_id_images_id_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "images";
DROP TABLE "nav_header_main";
DROP TABLE "nav_footer_secondary";
DROP TABLE "nav";
DROP TABLE "nav_rels";`);

};
