import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_forms_confirmation_type" AS ENUM('message', 'redirect');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"required" boolean,
	"default_value" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_locales" (
	"label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_checkbox_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_country_locales" (
	"label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_country_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_email_locales" (
	"label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_email_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_message_locales" (
	"message" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_message_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"default_value" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_number_locales" (
	"label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_number_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"value" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select_options_locales" (
	"label" varchar NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_select_options_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_select_locales" (
	"label" varchar,
	"default_value" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_select_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_state_locales" (
	"label" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_state_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_text_locales" (
	"label" varchar,
	"default_value" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_text_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"width" numeric,
	"required" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "forms_blocks_textarea_locales" (
	"label" varchar,
	"default_value" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "forms_blocks_textarea_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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

CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" ("_path");
CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" ("_order");
CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" ("_parent_id");
CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" ("_path");
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
 ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_country_locales" ADD CONSTRAINT "forms_blocks_country_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_country"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_email_locales" ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_email"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_message_locales" ADD CONSTRAINT "forms_blocks_message_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_message"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_number_locales" ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_number"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
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
 ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_state_locales" ADD CONSTRAINT "forms_blocks_state_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_state"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
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

DROP TABLE "forms_blocks_checkbox";
DROP TABLE "forms_blocks_checkbox_locales";
DROP TABLE "forms_blocks_country";
DROP TABLE "forms_blocks_country_locales";
DROP TABLE "forms_blocks_email";
DROP TABLE "forms_blocks_email_locales";
DROP TABLE "forms_blocks_message";
DROP TABLE "forms_blocks_message_locales";
DROP TABLE "forms_blocks_number";
DROP TABLE "forms_blocks_number_locales";
DROP TABLE "forms_blocks_select_options";
DROP TABLE "forms_blocks_select_options_locales";
DROP TABLE "forms_blocks_select";
DROP TABLE "forms_blocks_select_locales";
DROP TABLE "forms_blocks_state";
DROP TABLE "forms_blocks_state_locales";
DROP TABLE "forms_blocks_text";
DROP TABLE "forms_blocks_text_locales";
DROP TABLE "forms_blocks_textarea";
DROP TABLE "forms_blocks_textarea_locales";
DROP TABLE "forms_emails";
DROP TABLE "forms_emails_locales";
DROP TABLE "forms";
DROP TABLE "forms_locales";
DROP TABLE "form_submissions_submission_data";
DROP TABLE "form_submissions";
DROP TABLE "form_submissions_rels";`);

};
