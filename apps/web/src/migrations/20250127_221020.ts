import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_PageherSecB_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__PageherSecB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_HomeherSecB_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__HomeherSecB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_BlogherSecB_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__BlogherSecB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TABLE IF NOT EXISTS "PageherSecB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_PageherSecB_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "PageherSecB_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_PageherSecB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__PageherSecB_v_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "_PageherSecB_v_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "HomeherSecB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_HomeherSecB_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "HomeherSecB_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_HomeherSecB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__HomeherSecB_v_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "_HomeherSecB_v_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "BlogherSecB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_BlogherSecB_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "BlogherSecB_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_BlogherSecB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__BlogherSecB_v_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "_BlogherSecB_v_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "PageherSecB" ADD CONSTRAINT "PageherSecB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PageherSecB" ADD CONSTRAINT "PageherSecB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PageherSecB_locales" ADD CONSTRAINT "PageherSecB_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."PageherSecB"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PageherSecB_v" ADD CONSTRAINT "_PageherSecB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PageherSecB_v" ADD CONSTRAINT "_PageherSecB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PageherSecB_v_locales" ADD CONSTRAINT "_PageherSecB_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_PageherSecB_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomeherSecB" ADD CONSTRAINT "HomeherSecB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomeherSecB" ADD CONSTRAINT "HomeherSecB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomeherSecB_locales" ADD CONSTRAINT "HomeherSecB_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."HomeherSecB"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomeherSecB_v" ADD CONSTRAINT "_HomeherSecB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomeherSecB_v" ADD CONSTRAINT "_HomeherSecB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomeherSecB_v_locales" ADD CONSTRAINT "_HomeherSecB_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_HomeherSecB_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogherSecB" ADD CONSTRAINT "BlogherSecB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogherSecB" ADD CONSTRAINT "BlogherSecB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogherSecB_locales" ADD CONSTRAINT "BlogherSecB_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."BlogherSecB"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogherSecB_v" ADD CONSTRAINT "_BlogherSecB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogherSecB_v" ADD CONSTRAINT "_BlogherSecB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogherSecB_v_locales" ADD CONSTRAINT "_BlogherSecB_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_BlogherSecB_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "PageherSecB_order_idx" ON "PageherSecB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "PageherSecB_parent_id_idx" ON "PageherSecB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "PageherSecB_path_idx" ON "PageherSecB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "PageherSecB_block_config_block_config_background_image_idx" ON "PageherSecB" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "PageherSecB_locales_locale_parent_id_unique" ON "PageherSecB_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_PageherSecB_v_order_idx" ON "_PageherSecB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_PageherSecB_v_parent_id_idx" ON "_PageherSecB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_PageherSecB_v_path_idx" ON "_PageherSecB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_PageherSecB_v_block_config_block_config_background_image_idx" ON "_PageherSecB_v" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_PageherSecB_v_locales_locale_parent_id_unique" ON "_PageherSecB_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "HomeherSecB_order_idx" ON "HomeherSecB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "HomeherSecB_parent_id_idx" ON "HomeherSecB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "HomeherSecB_path_idx" ON "HomeherSecB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "HomeherSecB_block_config_block_config_background_image_idx" ON "HomeherSecB" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "HomeherSecB_locales_locale_parent_id_unique" ON "HomeherSecB_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_HomeherSecB_v_order_idx" ON "_HomeherSecB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_HomeherSecB_v_parent_id_idx" ON "_HomeherSecB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_HomeherSecB_v_path_idx" ON "_HomeherSecB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_HomeherSecB_v_block_config_block_config_background_image_idx" ON "_HomeherSecB_v" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_HomeherSecB_v_locales_locale_parent_id_unique" ON "_HomeherSecB_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "BlogherSecB_order_idx" ON "BlogherSecB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "BlogherSecB_parent_id_idx" ON "BlogherSecB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "BlogherSecB_path_idx" ON "BlogherSecB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "BlogherSecB_block_config_block_config_background_image_idx" ON "BlogherSecB" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "BlogherSecB_locales_locale_parent_id_unique" ON "BlogherSecB_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_BlogherSecB_v_order_idx" ON "_BlogherSecB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_BlogherSecB_v_parent_id_idx" ON "_BlogherSecB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_BlogherSecB_v_path_idx" ON "_BlogherSecB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_BlogherSecB_v_block_config_block_config_background_image_idx" ON "_BlogherSecB_v" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_BlogherSecB_v_locales_locale_parent_id_unique" ON "_BlogherSecB_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "PageherSecB" CASCADE;
  DROP TABLE "PageherSecB_locales" CASCADE;
  DROP TABLE "_PageherSecB_v" CASCADE;
  DROP TABLE "_PageherSecB_v_locales" CASCADE;
  DROP TABLE "HomeherSecB" CASCADE;
  DROP TABLE "HomeherSecB_locales" CASCADE;
  DROP TABLE "_HomeherSecB_v" CASCADE;
  DROP TABLE "_HomeherSecB_v_locales" CASCADE;
  DROP TABLE "BlogherSecB" CASCADE;
  DROP TABLE "BlogherSecB_locales" CASCADE;
  DROP TABLE "_BlogherSecB_v" CASCADE;
  DROP TABLE "_BlogherSecB_v_locales" CASCADE;
  DROP TYPE "public"."enum_PageherSecB_block_config_theme";
  DROP TYPE "public"."enum__PageherSecB_v_block_config_theme";
  DROP TYPE "public"."enum_HomeherSecB_block_config_theme";
  DROP TYPE "public"."enum__HomeherSecB_v_block_config_theme";
  DROP TYPE "public"."enum_BlogherSecB_block_config_theme";
  DROP TYPE "public"."enum__BlogherSecB_v_block_config_theme";`)
}
