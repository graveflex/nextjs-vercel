import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_theme" AS ENUM('light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_text_image_block_block_config_layout" AS ENUM('imgRight', 'imgLeft');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_block_config_layout" AS ENUM('bg', 'imgRight', 'imgLeft', 'imgRightFull', 'imgLeftFull');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_hero_block_input_type" AS ENUM('text');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_faq_block_items" DROP CONSTRAINT "pages_blocks_faq_block_items__parent_id_pages_blocks_faq_block_id_fk";

ALTER TABLE "pages_blocks_faq_block_items_locales" DROP CONSTRAINT "pages_blocks_faq_block_items_locales__parent_id_pages_blocks_faq_block_items_id_fk";

ALTER TABLE "pages_blocks_faq_block" DROP CONSTRAINT "pages_blocks_faq_block__parent_id_pages_id_fk";

ALTER TABLE "pages_blocks_faq_block_locales" DROP CONSTRAINT "pages_blocks_faq_block_locales__parent_id_pages_blocks_faq_block_id_fk";

ALTER TABLE "pages_blocks_text_image_block" DROP CONSTRAINT "pages_blocks_text_image_block__parent_id_pages_id_fk";

ALTER TABLE "pages_blocks_text_image_block_locales" DROP CONSTRAINT "pages_blocks_text_image_block_locales__parent_id_pages_blocks_text_image_block_id_fk";

ALTER TABLE "pages_blocks_hero_block" DROP CONSTRAINT "pages_blocks_hero_block__parent_id_pages_id_fk";

ALTER TABLE "pages_blocks_hero_block_locales" DROP CONSTRAINT "pages_blocks_hero_block_locales__parent_id_pages_blocks_hero_block_id_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_parent_id_pages_id_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_images_id_images_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block_items" DROP CONSTRAINT "_pages_v_blocks_faq_block_items__parent_id__pages_v_blocks_faq_block_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block_items_locales" DROP CONSTRAINT "_pages_v_blocks_faq_block_items_locales__parent_id__pages_v_blocks_faq_block_items_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block" DROP CONSTRAINT "_pages_v_blocks_faq_block__parent_id__pages_v_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block_locales" DROP CONSTRAINT "_pages_v_blocks_faq_block_locales__parent_id__pages_v_blocks_faq_block_id_fk";

ALTER TABLE "_pages_v_blocks_text_image_block" DROP CONSTRAINT "_pages_v_blocks_text_image_block__parent_id__pages_v_id_fk";

ALTER TABLE "_pages_v_blocks_text_image_block_locales" DROP CONSTRAINT "_pages_v_blocks_text_image_block_locales__parent_id__pages_v_blocks_text_image_block_id_fk";

ALTER TABLE "_pages_v_blocks_hero_block" DROP CONSTRAINT "_pages_v_blocks_hero_block__parent_id__pages_v_id_fk";

ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP CONSTRAINT "_pages_v_blocks_hero_block_locales__parent_id__pages_v_blocks_hero_block_id_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_parent_id__pages_v_id_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_pages_id_pages_id_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_images_id_images_id_fk";

ALTER TABLE "images_locales" DROP CONSTRAINT "images_locales__parent_id_images_id_fk";

ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_parent_id_payload_preferences_id_fk";

ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_users_id_users_id_fk";

ALTER TABLE "nav_header_main" DROP CONSTRAINT "nav_header_main__parent_id_nav_id_fk";

ALTER TABLE "nav_header_main_locales" DROP CONSTRAINT "nav_header_main_locales__parent_id_nav_header_main_id_fk";

ALTER TABLE "nav_footer_secondary" DROP CONSTRAINT "nav_footer_secondary__parent_id_nav_id_fk";

ALTER TABLE "nav_footer_secondary_locales" DROP CONSTRAINT "nav_footer_secondary_locales__parent_id_nav_footer_secondary_id_fk";

ALTER TABLE "nav_rels" DROP CONSTRAINT "nav_rels_parent_id_nav_id_fk";

ALTER TABLE "nav_rels" DROP CONSTRAINT "nav_rels_images_id_images_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block" ALTER COLUMN "blockConfig_theme" SET DATA TYPE enum__pages_v_blocks_faq_block_block_config_theme;
ALTER TABLE "_pages_v_blocks_text_image_block" ALTER COLUMN "blockConfig_theme" SET DATA TYPE enum__pages_v_blocks_text_image_block_block_config_theme;
ALTER TABLE "_pages_v_blocks_text_image_block" ALTER COLUMN "blockConfig_layout" SET DATA TYPE enum__pages_v_blocks_text_image_block_block_config_layout;
ALTER TABLE "_pages_v_blocks_hero_block" ALTER COLUMN "blockConfig_theme" SET DATA TYPE enum__pages_v_blocks_hero_block_block_config_theme;
ALTER TABLE "_pages_v_blocks_hero_block" ALTER COLUMN "blockConfig_layout" SET DATA TYPE enum__pages_v_blocks_hero_block_block_config_layout;
ALTER TABLE "_pages_v_blocks_hero_block" ALTER COLUMN "input_type" SET DATA TYPE enum__pages_v_blocks_hero_block_input_type;
ALTER TABLE "_pages_v" ALTER COLUMN "version_theme" SET DATA TYPE enum__pages_v_version_theme;
ALTER TABLE "_pages_v" ALTER COLUMN "version__status" SET DATA TYPE enum__pages_v_version_status;
DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items" ADD CONSTRAINT "pages_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items_locales" ADD CONSTRAINT "pages_blocks_faq_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_locales" ADD CONSTRAINT "pages_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_locales" ADD CONSTRAINT "pages_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block_locales" ADD CONSTRAINT "pages_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_items" ADD CONSTRAINT "_pages_v_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_items_locales" ADD CONSTRAINT "_pages_v_blocks_faq_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_locales" ADD CONSTRAINT "_pages_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_locales" ADD CONSTRAINT "_pages_v_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD CONSTRAINT "_pages_v_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "images_locales" ADD CONSTRAINT "images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_main" ADD CONSTRAINT "nav_header_main_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_header_main_locales" ADD CONSTRAINT "nav_header_main_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_header_main"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_secondary" ADD CONSTRAINT "nav_footer_secondary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_secondary_locales" ADD CONSTRAINT "nav_footer_secondary_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_footer_secondary"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_rels" ADD CONSTRAINT "nav_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_rels" ADD CONSTRAINT "nav_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

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

ALTER TABLE "pages_blocks_faq_block_items" DROP CONSTRAINT "pages_blocks_faq_block_items_parent_id_fk";

ALTER TABLE "pages_blocks_faq_block_items_locales" DROP CONSTRAINT "pages_blocks_faq_block_items_locales_parent_id_fk";

ALTER TABLE "pages_blocks_faq_block" DROP CONSTRAINT "pages_blocks_faq_block_parent_id_fk";

ALTER TABLE "pages_blocks_faq_block_locales" DROP CONSTRAINT "pages_blocks_faq_block_locales_parent_id_fk";

ALTER TABLE "pages_blocks_text_image_block" DROP CONSTRAINT "pages_blocks_text_image_block_parent_id_fk";

ALTER TABLE "pages_blocks_text_image_block_locales" DROP CONSTRAINT "pages_blocks_text_image_block_locales_parent_id_fk";

ALTER TABLE "pages_blocks_hero_block" DROP CONSTRAINT "pages_blocks_hero_block_parent_id_fk";

ALTER TABLE "pages_blocks_hero_block_locales" DROP CONSTRAINT "pages_blocks_hero_block_locales_parent_id_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_parent_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_images_fk";

ALTER TABLE "_pages_v_blocks_faq_block_items" DROP CONSTRAINT "_pages_v_blocks_faq_block_items_parent_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block_items_locales" DROP CONSTRAINT "_pages_v_blocks_faq_block_items_locales_parent_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block" DROP CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk";

ALTER TABLE "_pages_v_blocks_faq_block_locales" DROP CONSTRAINT "_pages_v_blocks_faq_block_locales_parent_id_fk";

ALTER TABLE "_pages_v_blocks_text_image_block" DROP CONSTRAINT "_pages_v_blocks_text_image_block_parent_id_fk";

ALTER TABLE "_pages_v_blocks_text_image_block_locales" DROP CONSTRAINT "_pages_v_blocks_text_image_block_locales_parent_id_fk";

ALTER TABLE "_pages_v_blocks_hero_block" DROP CONSTRAINT "_pages_v_blocks_hero_block_parent_id_fk";

ALTER TABLE "_pages_v_blocks_hero_block_locales" DROP CONSTRAINT "_pages_v_blocks_hero_block_locales_parent_id_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_parent_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_pages_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_images_fk";

ALTER TABLE "images_locales" DROP CONSTRAINT "images_locales_parent_id_fk";

ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_parent_fk";

ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_users_fk";

ALTER TABLE "nav_header_main" DROP CONSTRAINT "nav_header_main_parent_id_fk";

ALTER TABLE "nav_header_main_locales" DROP CONSTRAINT "nav_header_main_locales_parent_id_fk";

ALTER TABLE "nav_footer_secondary" DROP CONSTRAINT "nav_footer_secondary_parent_id_fk";

ALTER TABLE "nav_footer_secondary_locales" DROP CONSTRAINT "nav_footer_secondary_locales_parent_id_fk";

ALTER TABLE "nav_rels" DROP CONSTRAINT "nav_rels_parent_fk";

ALTER TABLE "nav_rels" DROP CONSTRAINT "nav_rels_images_fk";

ALTER TABLE "_pages_v_blocks_faq_block" ALTER COLUMN "blockConfig_theme" SET DATA TYPE _enum__pages_v_blocks_faq_block_block_config_theme_v;
ALTER TABLE "_pages_v_blocks_text_image_block" ALTER COLUMN "blockConfig_theme" SET DATA TYPE _enum__pages_v_blocks_text_image_block_block_config_theme_v;
ALTER TABLE "_pages_v_blocks_text_image_block" ALTER COLUMN "blockConfig_layout" SET DATA TYPE _enum__pages_v_blocks_text_image_block_block_config_layout_v;
ALTER TABLE "_pages_v_blocks_hero_block" ALTER COLUMN "blockConfig_theme" SET DATA TYPE _enum__pages_v_blocks_hero_block_block_config_theme_v;
ALTER TABLE "_pages_v_blocks_hero_block" ALTER COLUMN "blockConfig_layout" SET DATA TYPE _enum__pages_v_blocks_hero_block_block_config_layout_v;
ALTER TABLE "_pages_v_blocks_hero_block" ALTER COLUMN "input_type" SET DATA TYPE _enum__pages_v_blocks_hero_block_input_type_v;
ALTER TABLE "_pages_v" ALTER COLUMN "version_theme" SET DATA TYPE _enum__pages_v_version_theme_v;
ALTER TABLE "_pages_v" ALTER COLUMN "version__status" SET DATA TYPE _enum__pages_v_version_status_v;
DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items" ADD CONSTRAINT "pages_blocks_faq_block_items__parent_id_pages_blocks_faq_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items_locales" ADD CONSTRAINT "pages_blocks_faq_block_items_locales__parent_id_pages_blocks_faq_block_items_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_locales" ADD CONSTRAINT "pages_blocks_faq_block_locales__parent_id_pages_blocks_faq_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_text_image_block_locales" ADD CONSTRAINT "pages_blocks_text_image_block_locales__parent_id_pages_blocks_text_image_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block__parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_hero_block_locales" ADD CONSTRAINT "pages_blocks_hero_block_locales__parent_id_pages_blocks_hero_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
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
 ALTER TABLE "_pages_v_blocks_faq_block_items_locales" ADD CONSTRAINT "_pages_v_blocks_faq_block_items_locales__parent_id__pages_v_blocks_faq_block_items_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_locales" ADD CONSTRAINT "_pages_v_blocks_faq_block_locales__parent_id__pages_v_blocks_faq_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_text_image_block_locales" ADD CONSTRAINT "_pages_v_blocks_text_image_block_locales__parent_id__pages_v_blocks_text_image_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block__parent_id__pages_v_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD CONSTRAINT "_pages_v_blocks_hero_block_locales__parent_id__pages_v_blocks_hero_block_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
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
 ALTER TABLE "images_locales" ADD CONSTRAINT "images_locales__parent_id_images_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
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
 ALTER TABLE "nav_header_main_locales" ADD CONSTRAINT "nav_header_main_locales__parent_id_nav_header_main_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_header_main"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_secondary" ADD CONSTRAINT "nav_footer_secondary__parent_id_nav_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "nav_footer_secondary_locales" ADD CONSTRAINT "nav_footer_secondary_locales__parent_id_nav_footer_secondary_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav_footer_secondary"("id") ON DELETE cascade ON UPDATE no action;
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
