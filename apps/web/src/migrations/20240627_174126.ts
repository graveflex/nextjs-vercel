import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_gallery_grid_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"cta_link_type" "undefined_cta_t",
	"cta_link_label" varchar,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_gallery_grid_block_block_config_theme",
	"blockConfig_backgroundColor" "bgColor",
	"block_config_hidden" boolean,
	"blockConfig_contentWidth" "cw",
	"blockConfig_p_xs_paddingTop" "t",
	"blockConfig_p_xs_paddingBottom" "b",
	"blockConfig_p_md_paddingTop" "t",
	"blockConfig_p_md_paddingBottom" "b",
	"blockConfig_p_lg_paddingTop" "t",
	"blockConfig_p_lg_paddingBottom" "b",
	"blockConfig_p_xl_paddingTop" "t",
	"blockConfig_p_xl_paddingBottom" "b",
	"cta_link_type" "undefined_cta_t",
	"cta_link_label" varchar,
	"cta_link_external_href" varchar,
	"cta_link_email_href" varchar,
	"cta_link_phone_href" varchar,
	"cta_link_new_tab" boolean,
	"cta_link_icon_name" "undefined_link_ic",
	"cta_link_icon_size" "undefined_link_iw",
	"cta_link_icon_color" varchar,
	"cta_variant" "undefined_cta_v",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images_order_idx" ON "pages_blocks_gallery_grid_block_gallery_images" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "pages_blocks_gallery_grid_block_gallery_images" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_order_idx" ON "pages_blocks_gallery_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_parent_id_idx" ON "pages_blocks_gallery_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_path_idx" ON "pages_blocks_gallery_grid_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images_order_idx" ON "_pages_v_blocks_gallery_grid_block_gallery_images" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_grid_block_gallery_images" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_order_idx" ON "_pages_v_blocks_gallery_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_parent_id_idx" ON "_pages_v_blocks_gallery_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_path_idx" ON "_pages_v_blocks_gallery_grid_block" ("_path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_gallery_grid_block_gallery_images";
DROP TABLE "pages_blocks_gallery_grid_block";
DROP TABLE "_pages_v_blocks_gallery_grid_block_gallery_images";
DROP TABLE "_pages_v_blocks_gallery_grid_block";`);

};
