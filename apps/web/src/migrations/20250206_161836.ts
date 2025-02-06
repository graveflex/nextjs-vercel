import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pageBannersBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageBannersBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__pageBannersBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageBannersBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_homepageBannersBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageBannersBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__homepageBannersBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageBannersBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_blogIdxBannersBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxBannersBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__blogIdxBannersBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxBannersBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TABLE IF NOT EXISTS "pageBannersBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageBannersBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageBannersBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageBannersBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageBannersBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageBannersBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageBannersBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageBannersBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageBannersBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageBannersBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageBannersBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageBannersBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxBannersBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxBannersBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxBannersBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxBannersBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxBannersBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxBannersBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE "pageTestimonialsSectionsBlock" CASCADE;
  DROP TABLE "_pageTestimonialsSectionsBlock_v" CASCADE;
  DROP TABLE "homepageTestimonialsSectionsBlock" CASCADE;
  DROP TABLE "_homepageTestimonialsSectionsBlock_v" CASCADE;
  DROP TABLE "blogIdxTestimonialsSectionsBlock" CASCADE;
  DROP TABLE "_blogIdxTestimonialsSectionsBlock_v" CASCADE;
  DO $$ BEGIN
   ALTER TABLE "pageBannersBlock" ADD CONSTRAINT "pageBannersBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageBannersBlock_v" ADD CONSTRAINT "_pageBannersBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageBannersBlock" ADD CONSTRAINT "homepageBannersBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageBannersBlock_v" ADD CONSTRAINT "_homepageBannersBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxBannersBlock" ADD CONSTRAINT "blogIdxBannersBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxBannersBlock_v" ADD CONSTRAINT "_blogIdxBannersBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pageBannersBlock_order_idx" ON "pageBannersBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageBannersBlock_parent_id_idx" ON "pageBannersBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageBannersBlock_path_idx" ON "pageBannersBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pageBannersBlock_v_order_idx" ON "_pageBannersBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageBannersBlock_v_parent_id_idx" ON "_pageBannersBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageBannersBlock_v_path_idx" ON "_pageBannersBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepageBannersBlock_order_idx" ON "homepageBannersBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageBannersBlock_parent_id_idx" ON "homepageBannersBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageBannersBlock_path_idx" ON "homepageBannersBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepageBannersBlock_v_order_idx" ON "_homepageBannersBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageBannersBlock_v_parent_id_idx" ON "_homepageBannersBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageBannersBlock_v_path_idx" ON "_homepageBannersBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxBannersBlock_order_idx" ON "blogIdxBannersBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxBannersBlock_parent_id_idx" ON "blogIdxBannersBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxBannersBlock_path_idx" ON "blogIdxBannersBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxBannersBlock_v_order_idx" ON "_blogIdxBannersBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxBannersBlock_v_parent_id_idx" ON "_blogIdxBannersBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxBannersBlock_v_path_idx" ON "_blogIdxBannersBlock_v" USING btree ("_path");
  DROP TYPE "public"."enum_pageTestimonialsSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageTestimonialsSectionsBlock_variant";
  DROP TYPE "public"."enum__pageTestimonialsSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageTestimonialsSectionsBlock_v_variant";
  DROP TYPE "public"."enum_homepageTestimonialsSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageTestimonialsSectionsBlock_variant";
  DROP TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_variant";
  DROP TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_variant";
  DROP TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_variant";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pageTestimonialsSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageTestimonialsSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__pageTestimonialsSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageTestimonialsSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_homepageTestimonialsSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageTestimonialsSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TABLE IF NOT EXISTS "pageTestimonialsSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageTestimonialsSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageTestimonialsSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageTestimonialsSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageTestimonialsSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageTestimonialsSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageTestimonialsSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageTestimonialsSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageTestimonialsSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageTestimonialsSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageTestimonialsSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxTestimonialsSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxTestimonialsSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxTestimonialsSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxTestimonialsSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxTestimonialsSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE "pageBannersBlock" CASCADE;
  DROP TABLE "_pageBannersBlock_v" CASCADE;
  DROP TABLE "homepageBannersBlock" CASCADE;
  DROP TABLE "_homepageBannersBlock_v" CASCADE;
  DROP TABLE "blogIdxBannersBlock" CASCADE;
  DROP TABLE "_blogIdxBannersBlock_v" CASCADE;
  DO $$ BEGIN
   ALTER TABLE "pageTestimonialsSectionsBlock" ADD CONSTRAINT "pageTestimonialsSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageTestimonialsSectionsBlock_v" ADD CONSTRAINT "_pageTestimonialsSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageTestimonialsSectionsBlock" ADD CONSTRAINT "homepageTestimonialsSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageTestimonialsSectionsBlock_v" ADD CONSTRAINT "_homepageTestimonialsSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxTestimonialsSectionsBlock" ADD CONSTRAINT "blogIdxTestimonialsSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxTestimonialsSectionsBlock_v" ADD CONSTRAINT "_blogIdxTestimonialsSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pageTestimonialsSectionsBlock_order_idx" ON "pageTestimonialsSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageTestimonialsSectionsBlock_parent_id_idx" ON "pageTestimonialsSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageTestimonialsSectionsBlock_path_idx" ON "pageTestimonialsSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pageTestimonialsSectionsBlock_v_order_idx" ON "_pageTestimonialsSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageTestimonialsSectionsBlock_v_parent_id_idx" ON "_pageTestimonialsSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageTestimonialsSectionsBlock_v_path_idx" ON "_pageTestimonialsSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepageTestimonialsSectionsBlock_order_idx" ON "homepageTestimonialsSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageTestimonialsSectionsBlock_parent_id_idx" ON "homepageTestimonialsSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageTestimonialsSectionsBlock_path_idx" ON "homepageTestimonialsSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v_order_idx" ON "_homepageTestimonialsSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v_parent_id_idx" ON "_homepageTestimonialsSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v_path_idx" ON "_homepageTestimonialsSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxTestimonialsSectionsBlock_order_idx" ON "blogIdxTestimonialsSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxTestimonialsSectionsBlock_parent_id_idx" ON "blogIdxTestimonialsSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxTestimonialsSectionsBlock_path_idx" ON "blogIdxTestimonialsSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v_order_idx" ON "_blogIdxTestimonialsSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v_parent_id_idx" ON "_blogIdxTestimonialsSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v_path_idx" ON "_blogIdxTestimonialsSectionsBlock_v" USING btree ("_path");
  DROP TYPE "public"."enum_pageBannersBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageBannersBlock_variant";
  DROP TYPE "public"."enum__pageBannersBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageBannersBlock_v_variant";
  DROP TYPE "public"."enum_homepageBannersBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageBannersBlock_variant";
  DROP TYPE "public"."enum__homepageBannersBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageBannersBlock_v_variant";
  DROP TYPE "public"."enum_blogIdxBannersBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxBannersBlock_variant";
  DROP TYPE "public"."enum__blogIdxBannersBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxBannersBlock_v_variant";`)
}
