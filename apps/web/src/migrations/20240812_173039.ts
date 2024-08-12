import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "pages_locales" (
	"meta_title" varchar,
	"meta_description" varchar,
	"meta_image_id" integer,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "pages_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_meta_image_id" integer,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

ALTER TABLE "pages_blocks_video_block" ADD COLUMN "video_u_r_l" varchar;
ALTER TABLE "pages_blocks_video_block" ADD COLUMN "embed_u_r_l" varchar;
ALTER TABLE "pages_blocks_video_block" ADD COLUMN "full_bleed_mobile" boolean DEFAULT false;
ALTER TABLE "pages" ADD COLUMN "meta_keywords" varchar;
ALTER TABLE "_pages_v_blocks_video_block" ADD COLUMN "video_u_r_l" varchar;
ALTER TABLE "_pages_v_blocks_video_block" ADD COLUMN "embed_u_r_l" varchar;
ALTER TABLE "_pages_v_blocks_video_block" ADD COLUMN "full_bleed_mobile" boolean DEFAULT false;
ALTER TABLE "_pages_v" ADD COLUMN "version_meta_keywords" varchar;
ALTER TABLE "posts" ADD COLUMN "meta_keywords" varchar;
ALTER TABLE "posts_locales" ADD COLUMN "meta_title" varchar;
ALTER TABLE "posts_locales" ADD COLUMN "meta_description" varchar;
ALTER TABLE "posts_locales" ADD COLUMN "meta_image_id" integer;
DO $$ BEGIN
 ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_images_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages" DROP COLUMN IF EXISTS "seo_config_title";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "seo_config_description";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "seo_config_keywords";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_seo_config_title";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_seo_config_description";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_seo_config_keywords";
ALTER TABLE "posts" DROP COLUMN IF EXISTS "seo_config_title";
ALTER TABLE "posts" DROP COLUMN IF EXISTS "seo_config_description";
ALTER TABLE "posts" DROP COLUMN IF EXISTS "seo_config_keywords";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "pages_locales";
DROP TABLE "_pages_v_locales";
ALTER TABLE "posts_locales" DROP CONSTRAINT "posts_locales_meta_image_id_images_id_fk";

ALTER TABLE "pages" ADD COLUMN "seo_config_title" varchar;
ALTER TABLE "pages" ADD COLUMN "seo_config_description" varchar;
ALTER TABLE "pages" ADD COLUMN "seo_config_keywords" varchar;
ALTER TABLE "_pages_v" ADD COLUMN "version_seo_config_title" varchar;
ALTER TABLE "_pages_v" ADD COLUMN "version_seo_config_description" varchar;
ALTER TABLE "_pages_v" ADD COLUMN "version_seo_config_keywords" varchar;
ALTER TABLE "posts" ADD COLUMN "seo_config_title" varchar;
ALTER TABLE "posts" ADD COLUMN "seo_config_description" varchar;
ALTER TABLE "posts" ADD COLUMN "seo_config_keywords" varchar;
ALTER TABLE "pages_blocks_video_block" DROP COLUMN IF EXISTS "video_u_r_l";
ALTER TABLE "pages_blocks_video_block" DROP COLUMN IF EXISTS "embed_u_r_l";
ALTER TABLE "pages_blocks_video_block" DROP COLUMN IF EXISTS "full_bleed_mobile";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "meta_keywords";
ALTER TABLE "_pages_v_blocks_video_block" DROP COLUMN IF EXISTS "video_u_r_l";
ALTER TABLE "_pages_v_blocks_video_block" DROP COLUMN IF EXISTS "embed_u_r_l";
ALTER TABLE "_pages_v_blocks_video_block" DROP COLUMN IF EXISTS "full_bleed_mobile";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_meta_keywords";
ALTER TABLE "posts" DROP COLUMN IF EXISTS "meta_keywords";
ALTER TABLE "posts_locales" DROP COLUMN IF EXISTS "meta_title";
ALTER TABLE "posts_locales" DROP COLUMN IF EXISTS "meta_description";
ALTER TABLE "posts_locales" DROP COLUMN IF EXISTS "meta_image_id";`)
}
