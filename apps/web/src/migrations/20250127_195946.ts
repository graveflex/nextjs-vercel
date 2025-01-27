import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_PagehdrSec_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__PagehdrSec_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_HomehdrSec_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__HomehdrSec_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_BloghdrSec_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__BloghdrSec_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TABLE IF NOT EXISTS "PagehdrSec" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_PagehdrSec_block_config_theme",
  	"block_config_background_color" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"block_config_content_width" "cw" DEFAULT 'xl',
  	"block_config_p_xs_padding_top" "t",
  	"block_config_p_xs_padding_bottom" "b",
  	"block_config_p_md_padding_top" "t",
  	"block_config_p_md_padding_bottom" "b",
  	"block_config_p_lg_padding_top" "t",
  	"block_config_p_lg_padding_bottom" "b",
  	"block_config_p_xl_padding_top" "t",
  	"block_config_p_xl_padding_bottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "PagehdrSec_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_PagehdrSec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__PagehdrSec_v_block_config_theme",
  	"block_config_background_color" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"block_config_content_width" "cw" DEFAULT 'xl',
  	"block_config_p_xs_padding_top" "t",
  	"block_config_p_xs_padding_bottom" "b",
  	"block_config_p_md_padding_top" "t",
  	"block_config_p_md_padding_bottom" "b",
  	"block_config_p_lg_padding_top" "t",
  	"block_config_p_lg_padding_bottom" "b",
  	"block_config_p_xl_padding_top" "t",
  	"block_config_p_xl_padding_bottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_PagehdrSec_v_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "HomehdrSec" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_HomehdrSec_block_config_theme",
  	"block_config_background_color" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"block_config_content_width" "cw" DEFAULT 'xl',
  	"block_config_p_xs_padding_top" "t",
  	"block_config_p_xs_padding_bottom" "b",
  	"block_config_p_md_padding_top" "t",
  	"block_config_p_md_padding_bottom" "b",
  	"block_config_p_lg_padding_top" "t",
  	"block_config_p_lg_padding_bottom" "b",
  	"block_config_p_xl_padding_top" "t",
  	"block_config_p_xl_padding_bottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "HomehdrSec_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_HomehdrSec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__HomehdrSec_v_block_config_theme",
  	"block_config_background_color" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"block_config_content_width" "cw" DEFAULT 'xl',
  	"block_config_p_xs_padding_top" "t",
  	"block_config_p_xs_padding_bottom" "b",
  	"block_config_p_md_padding_top" "t",
  	"block_config_p_md_padding_bottom" "b",
  	"block_config_p_lg_padding_top" "t",
  	"block_config_p_lg_padding_bottom" "b",
  	"block_config_p_xl_padding_top" "t",
  	"block_config_p_xl_padding_bottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_HomehdrSec_v_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "BloghdrSec" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_BloghdrSec_block_config_theme",
  	"block_config_background_color" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"block_config_content_width" "cw" DEFAULT 'xl',
  	"block_config_p_xs_padding_top" "t",
  	"block_config_p_xs_padding_bottom" "b",
  	"block_config_p_md_padding_top" "t",
  	"block_config_p_md_padding_bottom" "b",
  	"block_config_p_lg_padding_top" "t",
  	"block_config_p_lg_padding_bottom" "b",
  	"block_config_p_xl_padding_top" "t",
  	"block_config_p_xl_padding_bottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "BloghdrSec_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_BloghdrSec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__BloghdrSec_v_block_config_theme",
  	"block_config_background_color" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"block_config_content_width" "cw" DEFAULT 'xl',
  	"block_config_p_xs_padding_top" "t",
  	"block_config_p_xs_padding_bottom" "b",
  	"block_config_p_md_padding_top" "t",
  	"block_config_p_md_padding_bottom" "b",
  	"block_config_p_lg_padding_top" "t",
  	"block_config_p_lg_padding_bottom" "b",
  	"block_config_p_xl_padding_top" "t",
  	"block_config_p_xl_padding_bottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_BloghdrSec_v_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "PagehdrSec" ADD CONSTRAINT "PagehdrSec_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PagehdrSec" ADD CONSTRAINT "PagehdrSec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PagehdrSec_locales" ADD CONSTRAINT "PagehdrSec_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."PagehdrSec"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PagehdrSec_v" ADD CONSTRAINT "_PagehdrSec_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PagehdrSec_v" ADD CONSTRAINT "_PagehdrSec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PagehdrSec_v_locales" ADD CONSTRAINT "_PagehdrSec_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_PagehdrSec_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomehdrSec" ADD CONSTRAINT "HomehdrSec_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomehdrSec" ADD CONSTRAINT "HomehdrSec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomehdrSec_locales" ADD CONSTRAINT "HomehdrSec_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."HomehdrSec"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomehdrSec_v" ADD CONSTRAINT "_HomehdrSec_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomehdrSec_v" ADD CONSTRAINT "_HomehdrSec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomehdrSec_v_locales" ADD CONSTRAINT "_HomehdrSec_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_HomehdrSec_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BloghdrSec" ADD CONSTRAINT "BloghdrSec_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BloghdrSec" ADD CONSTRAINT "BloghdrSec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BloghdrSec_locales" ADD CONSTRAINT "BloghdrSec_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."BloghdrSec"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BloghdrSec_v" ADD CONSTRAINT "_BloghdrSec_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BloghdrSec_v" ADD CONSTRAINT "_BloghdrSec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BloghdrSec_v_locales" ADD CONSTRAINT "_BloghdrSec_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_BloghdrSec_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "PagehdrSec_order_idx" ON "PagehdrSec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "PagehdrSec_parent_id_idx" ON "PagehdrSec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "PagehdrSec_path_idx" ON "PagehdrSec" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "PagehdrSec_block_config_block_config_background_image_idx" ON "PagehdrSec" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "PagehdrSec_locales_locale_parent_id_unique" ON "PagehdrSec_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_PagehdrSec_v_order_idx" ON "_PagehdrSec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_PagehdrSec_v_parent_id_idx" ON "_PagehdrSec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_PagehdrSec_v_path_idx" ON "_PagehdrSec_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_PagehdrSec_v_block_config_block_config_background_image_idx" ON "_PagehdrSec_v" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_PagehdrSec_v_locales_locale_parent_id_unique" ON "_PagehdrSec_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "HomehdrSec_order_idx" ON "HomehdrSec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "HomehdrSec_parent_id_idx" ON "HomehdrSec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "HomehdrSec_path_idx" ON "HomehdrSec" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "HomehdrSec_block_config_block_config_background_image_idx" ON "HomehdrSec" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "HomehdrSec_locales_locale_parent_id_unique" ON "HomehdrSec_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_HomehdrSec_v_order_idx" ON "_HomehdrSec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_HomehdrSec_v_parent_id_idx" ON "_HomehdrSec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_HomehdrSec_v_path_idx" ON "_HomehdrSec_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_HomehdrSec_v_block_config_block_config_background_image_idx" ON "_HomehdrSec_v" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_HomehdrSec_v_locales_locale_parent_id_unique" ON "_HomehdrSec_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "BloghdrSec_order_idx" ON "BloghdrSec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "BloghdrSec_parent_id_idx" ON "BloghdrSec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "BloghdrSec_path_idx" ON "BloghdrSec" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "BloghdrSec_block_config_block_config_background_image_idx" ON "BloghdrSec" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "BloghdrSec_locales_locale_parent_id_unique" ON "BloghdrSec_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_BloghdrSec_v_order_idx" ON "_BloghdrSec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_BloghdrSec_v_parent_id_idx" ON "_BloghdrSec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_BloghdrSec_v_path_idx" ON "_BloghdrSec_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_BloghdrSec_v_block_config_block_config_background_image_idx" ON "_BloghdrSec_v" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_BloghdrSec_v_locales_locale_parent_id_unique" ON "_BloghdrSec_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "PagehdrSec" CASCADE;
  DROP TABLE "PagehdrSec_locales" CASCADE;
  DROP TABLE "_PagehdrSec_v" CASCADE;
  DROP TABLE "_PagehdrSec_v_locales" CASCADE;
  DROP TABLE "HomehdrSec" CASCADE;
  DROP TABLE "HomehdrSec_locales" CASCADE;
  DROP TABLE "_HomehdrSec_v" CASCADE;
  DROP TABLE "_HomehdrSec_v_locales" CASCADE;
  DROP TABLE "BloghdrSec" CASCADE;
  DROP TABLE "BloghdrSec_locales" CASCADE;
  DROP TABLE "_BloghdrSec_v" CASCADE;
  DROP TABLE "_BloghdrSec_v_locales" CASCADE;
  DROP TYPE "public"."enum_PagehdrSec_block_config_theme";
  DROP TYPE "public"."enum__PagehdrSec_v_block_config_theme";
  DROP TYPE "public"."enum_HomehdrSec_block_config_theme";
  DROP TYPE "public"."enum__HomehdrSec_v_block_config_theme";
  DROP TYPE "public"."enum_BloghdrSec_block_config_theme";
  DROP TYPE "public"."enum__BloghdrSec_v_block_config_theme";`)
}
