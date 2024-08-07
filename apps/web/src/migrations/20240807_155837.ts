import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "public"."enum_pages_blocks_full_bleed_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_pages_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__pages_v_blocks_full_bleed_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__pages_v_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_full_bleed_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_full_bleed_image_block_block_config_theme",
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
	"image_id" integer,
	"mobile_image_id" integer,
	"is_background" boolean DEFAULT false,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_iframe_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_iframe_block_block_config_theme",
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
	"iframe" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_iframe_block_locales" (
	"title" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_full_bleed_image_block_block_config_theme",
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
	"image_id" integer,
	"mobile_image_id" integer,
	"is_background" boolean DEFAULT false,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_iframe_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_iframe_block_block_config_theme",
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
	"iframe" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_iframe_block_locales" (
	"title" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

DO $$ BEGIN
 ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_full_bleed_image_block" ADD CONSTRAINT "pages_blocks_full_bleed_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_iframe_block" ADD CONSTRAINT "pages_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_iframe_block" ADD CONSTRAINT "pages_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_iframe_block_locales" ADD CONSTRAINT "pages_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_full_bleed_image_block" ADD CONSTRAINT "_pages_v_blocks_full_bleed_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_iframe_block" ADD CONSTRAINT "_pages_v_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_iframe_block" ADD CONSTRAINT "_pages_v_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_iframe_block_locales" ADD CONSTRAINT "_pages_v_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "pages_blocks_full_bleed_image_block_order_idx" ON "pages_blocks_full_bleed_image_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_full_bleed_image_block_parent_id_idx" ON "pages_blocks_full_bleed_image_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_full_bleed_image_block_path_idx" ON "pages_blocks_full_bleed_image_block" USING btree ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_iframe_block_order_idx" ON "pages_blocks_iframe_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_iframe_block_parent_id_idx" ON "pages_blocks_iframe_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_iframe_block_path_idx" ON "pages_blocks_iframe_block" USING btree ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block_order_idx" ON "_pages_v_blocks_full_bleed_image_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block_parent_id_idx" ON "_pages_v_blocks_full_bleed_image_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_full_bleed_image_block_path_idx" ON "_pages_v_blocks_full_bleed_image_block" USING btree ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_iframe_block_order_idx" ON "_pages_v_blocks_iframe_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_iframe_block_parent_id_idx" ON "_pages_v_blocks_iframe_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_iframe_block_path_idx" ON "_pages_v_blocks_iframe_block" USING btree ("_path");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "pages_blocks_full_bleed_image_block";
DROP TABLE "pages_blocks_iframe_block";
DROP TABLE "pages_blocks_iframe_block_locales";
DROP TABLE "_pages_v_blocks_full_bleed_image_block";
DROP TABLE "_pages_v_blocks_iframe_block";
DROP TABLE "_pages_v_blocks_iframe_block_locales";`)
}
