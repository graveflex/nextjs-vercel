import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_homepage_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__homepage_v_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_blog_index_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blog_index_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__blog_index_v_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pages_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pages_blocks_blog_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pages_v_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pages_v_blocks_blog_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepage_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepage_blocks_blog_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepage_v_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepage_v_blocks_blog_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blog_index_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blog_index_blocks_blog_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blog_index_v_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blog_index_v_blocks_blog_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_section" ADD CONSTRAINT "pages_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blog_section" ADD CONSTRAINT "_pages_v_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_blog_section" ADD CONSTRAINT "homepage_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_blog_section" ADD CONSTRAINT "_homepage_v_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_blog_section" ADD CONSTRAINT "blog_index_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_blog_section" ADD CONSTRAINT "_blog_index_v_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_order_idx" ON "pages_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_parent_id_idx" ON "pages_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_path_idx" ON "pages_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_order_idx" ON "_pages_v_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_parent_id_idx" ON "_pages_v_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_path_idx" ON "_pages_v_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_blog_section_order_idx" ON "homepage_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_blog_section_parent_id_idx" ON "homepage_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_blog_section_path_idx" ON "homepage_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_blog_section_order_idx" ON "_homepage_v_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_blog_section_parent_id_idx" ON "_homepage_v_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_blog_section_path_idx" ON "_homepage_v_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_blog_section_order_idx" ON "blog_index_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_blog_section_parent_id_idx" ON "blog_index_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_blog_section_path_idx" ON "blog_index_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_blog_section_order_idx" ON "_blog_index_v_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_blog_section_parent_id_idx" ON "_blog_index_v_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_blog_section_path_idx" ON "_blog_index_v_blocks_blog_section" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_blog_section" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_section" CASCADE;
  DROP TABLE "homepage_blocks_blog_section" CASCADE;
  DROP TABLE "_homepage_v_blocks_blog_section" CASCADE;
  DROP TABLE "blog_index_blocks_blog_section" CASCADE;
  DROP TABLE "_blog_index_v_blocks_blog_section" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum_pages_blocks_blog_section_variant";
  DROP TYPE "public"."enum__pages_v_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum__pages_v_blocks_blog_section_variant";
  DROP TYPE "public"."enum_homepage_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum_homepage_blocks_blog_section_variant";
  DROP TYPE "public"."enum__homepage_v_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum__homepage_v_blocks_blog_section_variant";
  DROP TYPE "public"."enum_blog_index_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum_blog_index_blocks_blog_section_variant";
  DROP TYPE "public"."enum__blog_index_v_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum__blog_index_v_blocks_blog_section_variant";`)
}
