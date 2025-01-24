import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta_sections_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_sections_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_cta_sections_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_sections_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blog_index_blocks_cta_sections_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_pages_blocks_cta_sections_block_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__pages_v_blocks_cta_sections_block_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_homepage_blocks_cta_sections_block_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__homepage_v_blocks_cta_sections_block_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum_blog_index_blocks_cta_sections_block_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_config_theme" "enum__blog_index_v_blocks_cta_sections_block_block_config_theme",
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
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_sections_block" ADD CONSTRAINT "pages_blocks_cta_sections_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_sections_block" ADD CONSTRAINT "pages_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_sections_block_locales" ADD CONSTRAINT "pages_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_sections_block" ADD CONSTRAINT "_pages_v_blocks_cta_sections_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_sections_block" ADD CONSTRAINT "_pages_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_pages_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_cta_sections_block" ADD CONSTRAINT "homepage_blocks_cta_sections_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_cta_sections_block" ADD CONSTRAINT "homepage_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_cta_sections_block_locales" ADD CONSTRAINT "homepage_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_cta_sections_block" ADD CONSTRAINT "_homepage_v_blocks_cta_sections_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_cta_sections_block" ADD CONSTRAINT "_homepage_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_homepage_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_cta_sections_block" ADD CONSTRAINT "blog_index_blocks_cta_sections_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_cta_sections_block" ADD CONSTRAINT "blog_index_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_cta_sections_block_locales" ADD CONSTRAINT "blog_index_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_cta_sections_block" ADD CONSTRAINT "_blog_index_v_blocks_cta_sections_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_cta_sections_block" ADD CONSTRAINT "_blog_index_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_order_idx" ON "pages_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_parent_id_idx" ON "pages_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_path_idx" ON "pages_blocks_cta_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_block_config_block_config_background_image_idx" ON "pages_blocks_cta_sections_block" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "pages_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_order_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_parent_id_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_path_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_block_config_block_config_background_image_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_order_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_parent_id_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_path_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_block_config_block_config_background_image_idx" ON "homepage_blocks_cta_sections_block" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "homepage_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_order_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_parent_id_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_path_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_block_config_block_config_background_image_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_homepage_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_order_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_parent_id_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_path_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_block_config_block_config_background_image_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "blog_index_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_order_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_parent_id_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_path_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_block_config_block_config_background_image_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("block_config_background_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_blog_index_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_cta_sections_block" CASCADE;
  DROP TABLE "pages_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "homepage_blocks_cta_sections_block" CASCADE;
  DROP TABLE "homepage_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_homepage_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "blog_index_blocks_cta_sections_block" CASCADE;
  DROP TABLE "blog_index_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_blog_index_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_blog_index_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_cta_sections_block_block_config_theme";
  DROP TYPE "public"."enum__pages_v_blocks_cta_sections_block_block_config_theme";
  DROP TYPE "public"."enum_homepage_blocks_cta_sections_block_block_config_theme";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_sections_block_block_config_theme";
  DROP TYPE "public"."enum_blog_index_blocks_cta_sections_block_block_config_theme";
  DROP TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_block_config_theme";`)
}
