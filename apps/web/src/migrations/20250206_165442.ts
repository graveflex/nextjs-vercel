import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pageFaqSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageFaqSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pageFaqSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageFaqSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_homepageFaqSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageFaqSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__homepageFaqSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageFaqSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_blogIdxFaqSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxFaqSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__blogIdxFaqSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxFaqSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TABLE IF NOT EXISTS "pageFaqSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageFaqSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageFaqSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageFaqSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageFaqSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageFaqSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageFaqSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageFaqSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageFaqSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageFaqSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageFaqSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageFaqSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxFaqSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxFaqSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxFaqSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxFaqSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxFaqSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxFaqSectionsBlock_v_variant" DEFAULT '1',
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
   ALTER TABLE "pageFaqSectionsBlock" ADD CONSTRAINT "pageFaqSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageFaqSectionsBlock_v" ADD CONSTRAINT "_pageFaqSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageFaqSectionsBlock" ADD CONSTRAINT "homepageFaqSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageFaqSectionsBlock_v" ADD CONSTRAINT "_homepageFaqSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxFaqSectionsBlock" ADD CONSTRAINT "blogIdxFaqSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxFaqSectionsBlock_v" ADD CONSTRAINT "_blogIdxFaqSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_order_idx" ON "pageFaqSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_parent_id_idx" ON "pageFaqSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_path_idx" ON "pageFaqSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_order_idx" ON "_pageFaqSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_parent_id_idx" ON "_pageFaqSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_path_idx" ON "_pageFaqSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_order_idx" ON "homepageFaqSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_parent_id_idx" ON "homepageFaqSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_path_idx" ON "homepageFaqSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_order_idx" ON "_homepageFaqSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_parent_id_idx" ON "_homepageFaqSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_path_idx" ON "_homepageFaqSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_order_idx" ON "blogIdxFaqSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_parent_id_idx" ON "blogIdxFaqSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_path_idx" ON "blogIdxFaqSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_order_idx" ON "_blogIdxFaqSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_parent_id_idx" ON "_blogIdxFaqSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_path_idx" ON "_blogIdxFaqSectionsBlock_v" USING btree ("_path");
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
  
  DROP TABLE "pageFaqSectionsBlock" CASCADE;
  DROP TABLE "_pageFaqSectionsBlock_v" CASCADE;
  DROP TABLE "homepageFaqSectionsBlock" CASCADE;
  DROP TABLE "_homepageFaqSectionsBlock_v" CASCADE;
  DROP TABLE "blogIdxFaqSectionsBlock" CASCADE;
  DROP TABLE "_blogIdxFaqSectionsBlock_v" CASCADE;
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
  DROP TYPE "public"."enum_pageFaqSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageFaqSectionsBlock_variant";
  DROP TYPE "public"."enum__pageFaqSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageFaqSectionsBlock_v_variant";
  DROP TYPE "public"."enum_homepageFaqSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageFaqSectionsBlock_variant";
  DROP TYPE "public"."enum__homepageFaqSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageFaqSectionsBlock_v_variant";
  DROP TYPE "public"."enum_blogIdxFaqSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxFaqSectionsBlock_variant";
  DROP TYPE "public"."enum__blogIdxFaqSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxFaqSectionsBlock_v_variant";`)
}
