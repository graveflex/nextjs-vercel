import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_forms_confirmation_type" AS ENUM('message', 'redirect');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_form_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_form_block_block_config_theme",
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
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_form_block_locales" (
	"content" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_form_block_block_config_theme",
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
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block_locales" (
	"content" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_text_input" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"textinput_name" varchar,
	"textinput_placeholder" varchar,
	"textinput_help_text" varchar,
	"textinput_label" varchar,
	"textinput_required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_text_area" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"placeholder" varchar,
	"help_text" varchar,
	"label" varchar,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select_select_select_options" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"option" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"select_name" varchar,
	"select_placeholder" varchar,
	"select_help_text" varchar,
	"select_label" varchar,
	"select_required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select_locales" (
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_select_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"option" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"checkbox_name" varchar,
	"checkbox_placeholder" varchar,
	"checkbox_help_text" varchar,
	"checkbox_label" varchar,
	"checkbox_required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_locales" (
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_checkbox_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_emails" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"email_to" varchar,
	"cc" varchar,
	"bcc" varchar,
	"reply_to" varchar,
	"email_from" varchar
);

CREATE TABLE IF NOT EXISTS "forms_emails_locales" (
	"subject" varchar NOT NULL,
	"message" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_emails_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"confirmationType" "enum_forms_confirmation_type",
	"redirect_url" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "forms_locales" (
	"submit_button_label" varchar,
	"confirmation_message" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "forms_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"field" varchar NOT NULL,
	"value" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "form_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "form_submissions_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"forms_id" integer
);

ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_textinput_name" varchar;
ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "form_textinput_required" boolean;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_textinput_name" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "form_textinput_required" boolean;
ALTER TABLE "pages_rels" ADD COLUMN "forms_id" integer;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_textinput_name" varchar;
ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "form_textinput_required" boolean;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_textinput_name" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "form_textinput_required" boolean;
ALTER TABLE "_pages_v_rels" ADD COLUMN "forms_id" integer;
CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_input_order_idx" ON "forms_blocks_text_input" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_input_parent_id_idx" ON "forms_blocks_text_input" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_input_path_idx" ON "forms_blocks_text_input" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_area_order_idx" ON "forms_blocks_text_area" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_area_parent_id_idx" ON "forms_blocks_text_area" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_area_path_idx" ON "forms_blocks_text_area" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_select_select_options_order_idx" ON "forms_blocks_select_select_select_options" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_select_select_options_parent_id_idx" ON "forms_blocks_select_select_select_options" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_select_select_options_locale_idx" ON "forms_blocks_select_select_select_options" ("_locale");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options_order_idx" ON "forms_blocks_checkbox_checkbox_checkbox_options" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options_parent_id_idx" ON "forms_blocks_checkbox_checkbox_checkbox_options" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_checkbox_checkbox_options_locale_idx" ON "forms_blocks_checkbox_checkbox_checkbox_options" ("_locale");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" ("_path");
CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" ("_order");
CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" ("created_at");
CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" ("_order");
CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" ("_parent_id");
CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" ("created_at");
CREATE INDEX IF NOT EXISTS "form_submissions_rels_order_idx" ON "form_submissions_rels" ("order");
CREATE INDEX IF NOT EXISTS "form_submissions_rels_parent_idx" ON "form_submissions_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "form_submissions_rels_path_idx" ON "form_submissions_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_form_block_locales" ADD CONSTRAINT "pages_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_form_block_locales" ADD CONSTRAINT "_pages_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_text_input" ADD CONSTRAINT "forms_blocks_text_input_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_text_area" ADD CONSTRAINT "forms_blocks_text_area_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select_select_select_options" ADD CONSTRAINT "forms_blocks_select_select_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_checkbox_checkbox_checkbox_options" ADD CONSTRAINT "forms_blocks_checkbox_checkbox_checkbox_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_checkbox_locales" ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_emails"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "form_submissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "form_submissions_rels" ADD CONSTRAINT "form_submissions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "form_submissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "form_submissions_rels" ADD CONSTRAINT "form_submissions_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_form_block";
DROP TABLE "pages_blocks_form_block_locales";
DROP TABLE "_pages_v_blocks_form_block";
DROP TABLE "_pages_v_blocks_form_block_locales";
DROP TABLE "forms_blocks_text_input";
DROP TABLE "forms_blocks_text_area";
DROP TABLE "forms_blocks_select_select_select_options";
DROP TABLE "forms_blocks_select";
DROP TABLE "forms_blocks_select_locales";
DROP TABLE "forms_blocks_checkbox_checkbox_checkbox_options";
DROP TABLE "forms_blocks_checkbox";
DROP TABLE "forms_blocks_checkbox_locales";
DROP TABLE "forms_emails";
DROP TABLE "forms_emails_locales";
DROP TABLE "forms";
DROP TABLE "forms_locales";
DROP TABLE "form_submissions_submission_data";
DROP TABLE "form_submissions";
DROP TABLE "form_submissions_rels";
ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_forms_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_forms_fk";

ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_name";
ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_required";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_name";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_required";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "forms_id";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_name";
ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN IF EXISTS "form_textinput_required";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_name";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "form_textinput_required";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "forms_id";`);

};
