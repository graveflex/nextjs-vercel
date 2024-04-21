import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_config_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_block_config_layout" AS ENUM('bg', 'imgRight', 'imgLeft', 'imgRightFull', 'imgLeftFull');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_input_type" AS ENUM('text');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_version_theme_v" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_blocks_faq_block_block_config_theme_v" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_blocks_text_image_block_block_config_theme_v" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_blocks_text_image_block_block_config_layout_v" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_blocks_hero_block_block_config_theme_v" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_blocks_hero_block_block_config_layout_v" AS ENUM('bg', 'imgRight', 'imgLeft', 'imgRightFull', 'imgLeftFull');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_blocks_hero_block_input_type_v" AS ENUM('text');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "_enum__pages_v_version_status_v" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_images_additional_props_object_fit" AS ENUM('cover', 'contain', 'fill', 'scale-down');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_images_additional_props_aspect_ratio" AS ENUM('6/7', '7/6', '1/1', '3/2', '16/9', 'initial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"sub_title" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_faq_block_block_config_theme",
	"block_config_hidden" boolean,
	"title" varchar,
	"sub_title" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_text_image_block_block_config_theme",
	"block_config_hidden" boolean,
	"blockConfig_layout" "enum_pages_blocks_text_image_block_block_config_layout",
	"title" varchar,
	"content" jsonb,
	"cta_label" varchar,
	"cta_href" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_hero_block_block_config_theme",
	"block_config_hidden" boolean,
	"blockConfig_layout" "enum_pages_blocks_hero_block_block_config_layout",
	"eyebrow" varchar,
	"title" varchar,
	"sub_title" jsonb,
	"input_placeholder" varchar,
	"input_type" "enum_pages_blocks_hero_block_input_type",
	"cta_label" varchar,
	"cta_href" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_title" varchar,
	"slug" varchar,
	"theme" "enum_pages_theme",
	"seo_config_title" varchar,
	"seo_config_description" varchar,
	"seo_config_keywords" varchar,
	"published_at" timestamp(3) with time zone,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_pages_status"
);

CREATE TABLE IF NOT EXISTS "pages_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"images_id" integer
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"sub_title" jsonb,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "_enum__pages_v_blocks_faq_block_block_config_theme_v",
	"block_config_hidden" boolean,
	"title" varchar,
	"sub_title" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "_enum__pages_v_blocks_text_image_block_block_config_theme_v",
	"block_config_hidden" boolean,
	"blockConfig_layout" "_enum__pages_v_blocks_text_image_block_block_config_layout_v",
	"title" varchar,
	"content" jsonb,
	"cta_label" varchar,
	"cta_href" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "_enum__pages_v_blocks_hero_block_block_config_theme_v",
	"block_config_hidden" boolean,
	"blockConfig_layout" "_enum__pages_v_blocks_hero_block_block_config_layout_v",
	"eyebrow" varchar,
	"title" varchar,
	"sub_title" jsonb,
	"input_placeholder" varchar,
	"input_type" "_enum__pages_v_blocks_hero_block_input_type_v",
	"cta_label" varchar,
	"cta_href" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_page_title" varchar,
	"version_slug" varchar,
	"version_theme" "_enum__pages_v_version_theme_v",
	"version_seo_config_title" varchar,
	"version_seo_config_description" varchar,
	"version_seo_config_keywords" varchar,
	"version_published_at" timestamp(3) with time zone,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "_enum__pages_v_version_status_v",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"images_id" integer
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar,
	"image_props_fill" boolean,
	"image_props_priority" boolean,
	"image_props_quality" numeric,
	"additional_props_style" varchar,
	"additionalProps_objectFit" "enum_images_additional_props_object_fit",
	"additional_props_is_rounded" boolean,
	"additionalProps_aspectRatio" "enum_images_additional_props_aspect_ratio",
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
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

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
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

CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_order_idx" ON "pages_blocks_faq_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_parent_id_idx" ON "pages_blocks_faq_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_order_idx" ON "pages_blocks_faq_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_parent_id_idx" ON "pages_blocks_faq_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_path_idx" ON "pages_blocks_faq_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_order_idx" ON "pages_blocks_text_image_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_parent_id_idx" ON "pages_blocks_text_image_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_path_idx" ON "pages_blocks_text_image_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_order_idx" ON "pages_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_parent_id_idx" ON "pages_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_path_idx" ON "pages_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" ("order");
CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" ("path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_order_idx" ON "_pages_v_blocks_faq_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_parent_id_idx" ON "_pages_v_blocks_faq_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_order_idx" ON "_pages_v_blocks_faq_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_parent_id_idx" ON "_pages_v_blocks_faq_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_path_idx" ON "_pages_v_blocks_faq_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_order_idx" ON "_pages_v_blocks_text_image_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_parent_id_idx" ON "_pages_v_blocks_text_image_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_path_idx" ON "_pages_v_blocks_text_image_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_order_idx" ON "_pages_v_blocks_hero_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_parent_id_idx" ON "_pages_v_blocks_hero_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_path_idx" ON "_pages_v_blocks_hero_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" ("latest");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" ("filename");
CREATE INDEX IF NOT EXISTS "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" ("sizes_thumbnail_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_mobile_sizes_mobile_filename_idx" ON "images" ("sizes_mobile_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_tablet_sizes_tablet_filename_idx" ON "images" ("sizes_tablet_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_desktop_sizes_desktop_filename_idx" ON "images" ("sizes_desktop_filename");
CREATE INDEX IF NOT EXISTS "images_sizes_ultrawide_sizes_ultrawide_filename_idx" ON "images" ("sizes_ultrawide_filename");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "nav_header_main_order_idx" ON "nav_header_main" ("_order");
CREATE INDEX IF NOT EXISTS "nav_header_main_parent_id_idx" ON "nav_header_main" ("_parent_id");
CREATE INDEX IF NOT EXISTS "nav_footer_secondary_order_idx" ON "nav_footer_secondary" ("_order");
CREATE INDEX IF NOT EXISTS "nav_footer_secondary_parent_id_idx" ON "nav_footer_secondary" ("_parent_id");
CREATE INDEX IF NOT EXISTS "nav_rels_order_idx" ON "nav_rels" ("order");
CREATE INDEX IF NOT EXISTS "nav_rels_parent_idx" ON "nav_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "nav_rels_path_idx" ON "nav_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items" ADD CONSTRAINT "pages_blocks_faq_block_items__parent_id_pages_blocks_faq_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_images_id_images_id_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_items" ADD CONSTRAINT "_pages_v_blocks_faq_block_items__parent_id__pages_v_blocks_faq_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_id__pages_v_id_fk" FOREIGN KEY ("parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_id_pages_id_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_images_id_images_id_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_id_payload_preferences_id_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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

DROP TABLE "pages_blocks_faq_block_items";
DROP TABLE "pages_blocks_faq_block";
DROP TABLE "pages_blocks_text_image_block";
DROP TABLE "pages_blocks_hero_block";
DROP TABLE "pages";
DROP TABLE "pages_rels";
DROP TABLE "_pages_v_blocks_faq_block_items";
DROP TABLE "_pages_v_blocks_faq_block";
DROP TABLE "_pages_v_blocks_text_image_block";
DROP TABLE "_pages_v_blocks_hero_block";
DROP TABLE "_pages_v";
DROP TABLE "_pages_v_rels";
DROP TABLE "users";
DROP TABLE "images";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "nav_header_main";
DROP TABLE "nav_footer_secondary";
DROP TABLE "nav";
DROP TABLE "nav_rels";`);

};
