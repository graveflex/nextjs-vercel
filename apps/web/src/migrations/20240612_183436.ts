import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "card_cta_t" AS ENUM('internal', 'external', 'email', 'phone', 'file');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "card_cta_v" AS ENUM('rounded-outline', 'link');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "card_cta_ic" AS ENUM('Login', 'Menu', 'Location', 'Calendar', 'PersonBust', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'Phone', 'Job', 'Email', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "card_cta_iw" AS ENUM('20', '25', '30', '35');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"cta_type" "card_cta_t",
	"cta_label" varchar,
	"cta_external_href" varchar,
	"cta_email_href" varchar,
	"cta_phone_href" varchar,
	"cta_new_tab" boolean,
	"cta_variant" "card_cta_v",
	"cta_icon_name" "card_cta_ic",
	"cta_icon_size" "card_cta_iw",
	"cta_icon_color" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"card_eyebrow" varchar,
	"card_headline" varchar,
	"card_sub_head" jsonb
);

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum_pages_blocks_card_grid_block_block_config_theme",
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

CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_locales" (
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_card_grid_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"cta_type" "card_cta_t",
	"cta_label" varchar,
	"cta_external_href" varchar,
	"cta_email_href" varchar,
	"cta_phone_href" varchar,
	"cta_new_tab" boolean,
	"cta_variant" "card_cta_v",
	"cta_icon_name" "card_cta_ic",
	"cta_icon_size" "card_cta_iw",
	"cta_icon_color" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_locale" "_locales" NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"card_eyebrow" varchar,
	"card_headline" varchar,
	"card_sub_head" jsonb,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"blockConfig_theme" "enum__pages_v_blocks_card_grid_block_block_config_theme",
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_locales" (
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_card_grid_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_order_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_order_idx" ON "pages_blocks_card_grid_block_cards" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_parent_id_idx" ON "pages_blocks_card_grid_block_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_locale_idx" ON "pages_blocks_card_grid_block_cards" ("_locale");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_order_idx" ON "pages_blocks_card_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_parent_id_idx" ON "pages_blocks_card_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_path_idx" ON "pages_blocks_card_grid_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_order_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_order_idx" ON "_pages_v_blocks_card_grid_block_cards" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_parent_id_idx" ON "_pages_v_blocks_card_grid_block_cards" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_locale_idx" ON "_pages_v_blocks_card_grid_block_cards" ("_locale");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_order_idx" ON "_pages_v_blocks_card_grid_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_parent_id_idx" ON "_pages_v_blocks_card_grid_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_path_idx" ON "_pages_v_blocks_card_grid_block" ("_path");
DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block" ADD CONSTRAINT "pages_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_locales" ADD CONSTRAINT "pages_blocks_card_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_card_grid_block_cards_card_ctas";
DROP TABLE "pages_blocks_card_grid_block_cards";
DROP TABLE "pages_blocks_card_grid_block";
DROP TABLE "pages_blocks_card_grid_block_locales";
DROP TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas";
DROP TABLE "_pages_v_blocks_card_grid_block_cards";
DROP TABLE "_pages_v_blocks_card_grid_block";
DROP TABLE "_pages_v_blocks_card_grid_block_locales";`);

};
