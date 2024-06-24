import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

CREATE TABLE IF NOT EXISTS "authors" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar,
	"full_name" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "authors_locales" (
	"job_title" varchar NOT NULL,
	"bio" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "authors_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "authors_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"images_id" integer
);

CREATE TABLE IF NOT EXISTS "posts_ctas" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
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
	"cta_variant" "card_cta_v"
);

CREATE TABLE IF NOT EXISTS "posts_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "posts_content_locales" (
	"content" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "posts_content_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" timestamp(3) with time zone NOT NULL,
	"seo_config_title" varchar,
	"seo_config_description" varchar,
	"seo_config_keywords" varchar,
	"slug" varchar,
	"published_at" timestamp(3) with time zone,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "posts_locales" (
	"title" varchar NOT NULL,
	"sub_title" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "posts_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "posts_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"authors_id" integer,
	"tags_id" integer,
	"pages_id" integer,
	"files_id" integer,
	"images_id" integer
);

CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "tags_locales" (
	"label" varchar NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "tags_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

ALTER TABLE "pages_blocks_card_grid_block_cards" ALTER COLUMN "card_sub_head" SET DATA TYPE varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ALTER COLUMN "card_sub_head" SET DATA TYPE varchar;
ALTER TABLE "pages_blocks_card_grid_block_cards" ADD COLUMN "card_date" varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD COLUMN "card_date" varchar;
CREATE INDEX IF NOT EXISTS "authors_created_at_idx" ON "authors" ("created_at");
CREATE INDEX IF NOT EXISTS "authors_rels_order_idx" ON "authors_rels" ("order");
CREATE INDEX IF NOT EXISTS "authors_rels_parent_idx" ON "authors_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "authors_rels_path_idx" ON "authors_rels" ("path");
CREATE INDEX IF NOT EXISTS "posts_ctas_order_idx" ON "posts_ctas" ("_order");
CREATE INDEX IF NOT EXISTS "posts_ctas_parent_id_idx" ON "posts_ctas" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_content_order_idx" ON "posts_content" ("_order");
CREATE INDEX IF NOT EXISTS "posts_content_parent_id_idx" ON "posts_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" ("created_at");
CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" ("order");
CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" ("path");
CREATE INDEX IF NOT EXISTS "tags_created_at_idx" ON "tags" ("created_at");
DO $$ BEGIN
 ALTER TABLE "authors_locales" ADD CONSTRAINT "authors_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "authors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "authors_rels" ADD CONSTRAINT "authors_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "authors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "authors_rels" ADD CONSTRAINT "authors_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_content" ADD CONSTRAINT "posts_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_content_locales" ADD CONSTRAINT "posts_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "authors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "tags"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_files_fk" FOREIGN KEY ("files_id") REFERENCES "files"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "images"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tags_locales" ADD CONSTRAINT "tags_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "tags"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "authors";
DROP TABLE "authors_locales";
DROP TABLE "authors_rels";
DROP TABLE "posts_ctas";
DROP TABLE "posts_content";
DROP TABLE "posts_content_locales";
DROP TABLE "posts";
DROP TABLE "posts_locales";
DROP TABLE "posts_rels";
DROP TABLE "tags";
DROP TABLE "tags_locales";
ALTER TABLE "pages_blocks_card_grid_block_cards" ALTER COLUMN "card_sub_head" SET DATA TYPE jsonb;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ALTER COLUMN "card_sub_head" SET DATA TYPE jsonb;
ALTER TABLE "pages_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_date";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_date";`);

};
