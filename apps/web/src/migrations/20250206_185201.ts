import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pagePricingSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pagePricingSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pagePricingSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pagePricingSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_homepagePricingSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepagePricingSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__homepagePricingSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepagePricingSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_blogIdxPricingSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxPricingSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__blogIdxPricingSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxPricingSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TABLE IF NOT EXISTS "pagePricingSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pagePricingSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pagePricingSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pagePricingSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pagePricingSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pagePricingSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepagePricingSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepagePricingSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepagePricingSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepagePricingSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepagePricingSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepagePricingSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxPricingSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxPricingSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxPricingSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxPricingSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxPricingSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxPricingSectionsBlock_v_variant" DEFAULT '1',
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
   ALTER TABLE "pagePricingSectionsBlock" ADD CONSTRAINT "pagePricingSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pagePricingSectionsBlock_v" ADD CONSTRAINT "_pagePricingSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepagePricingSectionsBlock" ADD CONSTRAINT "homepagePricingSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepagePricingSectionsBlock_v" ADD CONSTRAINT "_homepagePricingSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxPricingSectionsBlock" ADD CONSTRAINT "blogIdxPricingSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxPricingSectionsBlock_v" ADD CONSTRAINT "_blogIdxPricingSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pagePricingSectionsBlock_order_idx" ON "pagePricingSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pagePricingSectionsBlock_parent_id_idx" ON "pagePricingSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pagePricingSectionsBlock_path_idx" ON "pagePricingSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pagePricingSectionsBlock_v_order_idx" ON "_pagePricingSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pagePricingSectionsBlock_v_parent_id_idx" ON "_pagePricingSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pagePricingSectionsBlock_v_path_idx" ON "_pagePricingSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepagePricingSectionsBlock_order_idx" ON "homepagePricingSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepagePricingSectionsBlock_parent_id_idx" ON "homepagePricingSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepagePricingSectionsBlock_path_idx" ON "homepagePricingSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepagePricingSectionsBlock_v_order_idx" ON "_homepagePricingSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepagePricingSectionsBlock_v_parent_id_idx" ON "_homepagePricingSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepagePricingSectionsBlock_v_path_idx" ON "_homepagePricingSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxPricingSectionsBlock_order_idx" ON "blogIdxPricingSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxPricingSectionsBlock_parent_id_idx" ON "blogIdxPricingSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxPricingSectionsBlock_path_idx" ON "blogIdxPricingSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxPricingSectionsBlock_v_order_idx" ON "_blogIdxPricingSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxPricingSectionsBlock_v_parent_id_idx" ON "_blogIdxPricingSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxPricingSectionsBlock_v_path_idx" ON "_blogIdxPricingSectionsBlock_v" USING btree ("_path");
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
  
  DROP TABLE "pagePricingSectionsBlock" CASCADE;
  DROP TABLE "_pagePricingSectionsBlock_v" CASCADE;
  DROP TABLE "homepagePricingSectionsBlock" CASCADE;
  DROP TABLE "_homepagePricingSectionsBlock_v" CASCADE;
  DROP TABLE "blogIdxPricingSectionsBlock" CASCADE;
  DROP TABLE "_blogIdxPricingSectionsBlock_v" CASCADE;
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
  DROP TYPE "public"."enum_pagePricingSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_pagePricingSectionsBlock_variant";
  DROP TYPE "public"."enum__pagePricingSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pagePricingSectionsBlock_v_variant";
  DROP TYPE "public"."enum_homepagePricingSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepagePricingSectionsBlock_variant";
  DROP TYPE "public"."enum__homepagePricingSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepagePricingSectionsBlock_v_variant";
  DROP TYPE "public"."enum_blogIdxPricingSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxPricingSectionsBlock_variant";
  DROP TYPE "public"."enum__blogIdxPricingSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxPricingSectionsBlock_v_variant";`)
}
