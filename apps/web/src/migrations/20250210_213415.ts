import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_auth_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_auth_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_admins_roles" AS ENUM('admin', 'editor', 'user');
  CREATE TYPE "public"."enum_homepage_blocks_auth_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_blocks_auth_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blog_index_blocks_auth_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_blocks_auth_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TABLE IF NOT EXISTS "pages_blocks_auth_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pages_blocks_auth_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_auth_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pages_v_blocks_auth_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "admins_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_admins_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "admins" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_auth_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepage_blocks_auth_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_auth_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepage_v_blocks_auth_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_auth_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blog_index_blocks_auth_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_auth_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blog_index_v_blocks_auth_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "admins_id" integer;
  ALTER TABLE "payload_preferences_rels" ADD COLUMN "admins_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_auth_block" ADD CONSTRAINT "pages_blocks_auth_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_auth_block" ADD CONSTRAINT "_pages_v_blocks_auth_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "admins_roles" ADD CONSTRAINT "admins_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_auth_block" ADD CONSTRAINT "homepage_blocks_auth_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_auth_block" ADD CONSTRAINT "_homepage_v_blocks_auth_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_auth_block" ADD CONSTRAINT "blog_index_blocks_auth_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_auth_block" ADD CONSTRAINT "_blog_index_v_blocks_auth_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_auth_block_order_idx" ON "pages_blocks_auth_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_auth_block_parent_id_idx" ON "pages_blocks_auth_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_auth_block_path_idx" ON "pages_blocks_auth_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_auth_block_order_idx" ON "_pages_v_blocks_auth_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_auth_block_parent_id_idx" ON "_pages_v_blocks_auth_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_auth_block_path_idx" ON "_pages_v_blocks_auth_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "admins_roles_order_idx" ON "admins_roles" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "admins_roles_parent_idx" ON "admins_roles" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "admins_updated_at_idx" ON "admins" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "admins_created_at_idx" ON "admins" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "admins_email_idx" ON "admins" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_auth_block_order_idx" ON "homepage_blocks_auth_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_auth_block_parent_id_idx" ON "homepage_blocks_auth_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_auth_block_path_idx" ON "homepage_blocks_auth_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_auth_block_order_idx" ON "_homepage_v_blocks_auth_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_auth_block_parent_id_idx" ON "_homepage_v_blocks_auth_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_auth_block_path_idx" ON "_homepage_v_blocks_auth_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_auth_block_order_idx" ON "blog_index_blocks_auth_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_auth_block_parent_id_idx" ON "blog_index_blocks_auth_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_auth_block_path_idx" ON "blog_index_blocks_auth_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_auth_block_order_idx" ON "_blog_index_v_blocks_auth_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_auth_block_parent_id_idx" ON "_blog_index_v_blocks_auth_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_auth_block_path_idx" ON "_blog_index_v_blocks_auth_block" USING btree ("_path");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_admins_id_idx" ON "payload_locked_documents_rels" USING btree ("admins_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_admins_id_idx" ON "payload_preferences_rels" USING btree ("admins_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_auth_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_auth_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "admins_roles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "admins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_auth_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_blocks_auth_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog_index_blocks_auth_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_index_v_blocks_auth_block" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_auth_block" CASCADE;
  DROP TABLE "_pages_v_blocks_auth_block" CASCADE;
  DROP TABLE "admins_roles" CASCADE;
  DROP TABLE "admins" CASCADE;
  DROP TABLE "homepage_blocks_auth_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_auth_block" CASCADE;
  DROP TABLE "blog_index_blocks_auth_block" CASCADE;
  DROP TABLE "_blog_index_v_blocks_auth_block" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_admins_fk";
  
  ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_admins_fk";
  
  ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_users_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_admins_id_idx";
  DROP INDEX IF EXISTS "payload_preferences_rels_admins_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "admins_id";
  ALTER TABLE "payload_preferences_rels" DROP COLUMN IF EXISTS "admins_id";
  DROP TYPE "public"."enum_pages_blocks_auth_block_wrapper_theme";
  DROP TYPE "public"."enum__pages_v_blocks_auth_block_wrapper_theme";
  DROP TYPE "public"."enum_admins_roles";
  DROP TYPE "public"."enum_homepage_blocks_auth_block_wrapper_theme";
  DROP TYPE "public"."enum__homepage_v_blocks_auth_block_wrapper_theme";
  DROP TYPE "public"."enum_blog_index_blocks_auth_block_wrapper_theme";
  DROP TYPE "public"."enum__blog_index_v_blocks_auth_block_wrapper_theme";`)
}
