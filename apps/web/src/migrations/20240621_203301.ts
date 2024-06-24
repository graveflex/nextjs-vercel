import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "textimage_cta_v" AS ENUM('outline', 'solid', 'link');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"cta_link_type" "undefined_cta_t",
	"cta_link_label" varchar,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "textimage_cta_v"
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"cta_link_type" "undefined_cta_t",
	"cta_link_label" varchar,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "textimage_cta_v",
	"_uuid" varchar
);

ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "layout" "enum_pages_blocks_text_image_block_layout";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_textinput_placeholder" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_textinput_help_text" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_textinput_label" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_type" "undefined_cta_t";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_external_href" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_email_href" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_phone_href" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_new_tab" boolean;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_icon_name" "undefined_link_ic";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_icon_size" "undefined_link_iw";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_link_icon_color" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_cta_variant" "undefined_cta_v";
ALTER TABLE "pages_rels" ADD COLUMN "videos_id" integer;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "layout" "enum__pages_v_blocks_text_image_block_layout";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_textinput_placeholder" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_textinput_help_text" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_textinput_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_type" "undefined_cta_t";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_external_href" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_email_href" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_phone_href" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_new_tab" boolean;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_icon_name" "undefined_link_ic";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_icon_size" "undefined_link_iw";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_link_icon_color" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_cta_variant" "undefined_cta_v";
ALTER TABLE "_pages_v_rels" ADD COLUMN "videos_id" integer;
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_order_idx" ON "pages_blocks_text_image_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_parent_id_idx" ON "pages_blocks_text_image_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_locale_idx" ON "pages_blocks_text_image_block_items" ("_locale");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_order_idx" ON "_pages_v_blocks_text_image_block_items" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_parent_id_idx" ON "_pages_v_blocks_text_image_block_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_locale_idx" ON "_pages_v_blocks_text_image_block_items" ("_locale");
DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "videos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "videos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "blockConfig_layout";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_type";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_external_href";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_email_href";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_phone_href";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_new_tab";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_icon_name";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_icon_size";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_icon_color";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_variant";
ALTER TABLE "pages_blocks_text_image_block_locales" DROP COLUMN IF EXISTS "title";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "blockConfig_layout";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_type";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_external_href";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_email_href";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_phone_href";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_new_tab";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_icon_name";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_icon_size";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_link_icon_color";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "cta_variant";
ALTER TABLE "_pages_v_blocks_text_image_block_locales" DROP COLUMN IF EXISTS "title";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_items" ADD CONSTRAINT "pages_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_text_image_block_block_config_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_block_config_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DROP TABLE "pages_blocks_text_image_block_items";
DROP TABLE "_pages_v_blocks_text_image_block_items";
ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_videos_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_videos_fk";

ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "blockConfig_layout" "enum_pages_blocks_text_image_block_block_config_layout";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_type" "undefined_cta_t";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_external_href" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_email_href" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_phone_href" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_new_tab" boolean;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_icon_name" "undefined_link_ic";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_icon_size" "undefined_link_iw";
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_link_icon_color" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "cta_variant" "undefined_cta_v";
ALTER TABLE "pages_blocks_text_image_block_locales" ADD COLUMN "title" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "blockConfig_layout" "enum__pages_v_blocks_text_image_block_block_config_layout";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_type" "undefined_cta_t";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_label" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_external_href" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_email_href" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_phone_href" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_new_tab" boolean;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_icon_name" "undefined_link_ic";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_icon_size" "undefined_link_iw";
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_link_icon_color" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "cta_variant" "undefined_cta_v";
ALTER TABLE "_pages_v_blocks_text_image_block_locales" ADD COLUMN "title" varchar;
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "layout";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_placeholder";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_help_text";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_label";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_type";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_external_href";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_email_href";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_phone_href";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_new_tab";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_icon_name";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_icon_size";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_icon_color";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_variant";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "videos_id";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "layout";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_placeholder";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_help_text";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_label";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_type";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_label";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_external_href";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_email_href";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_phone_href";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_new_tab";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_icon_name";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_icon_size";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_link_icon_color";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_cta_variant";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "videos_id";`);

};
