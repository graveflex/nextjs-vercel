import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_blocks_faq_block_items_locales";
DROP TABLE "_pages_v_blocks_faq_block_items_locales";
ALTER TABLE "pages_blocks_faq_block_items" ADD COLUMN "_locale" "_locales" NOT NULL;
ALTER TABLE "pages_blocks_faq_block_items" ADD COLUMN "title" varchar;
ALTER TABLE "pages_blocks_faq_block_items" ADD COLUMN "content" jsonb;
ALTER TABLE "pages_blocks_faq_block_locales" ADD COLUMN "header" jsonb;
ALTER TABLE "_pages_v_blocks_faq_block_items" ADD COLUMN "_locale" "_locales" NOT NULL;
ALTER TABLE "_pages_v_blocks_faq_block_items" ADD COLUMN "title" varchar;
ALTER TABLE "_pages_v_blocks_faq_block_items" ADD COLUMN "content" jsonb;
ALTER TABLE "_pages_v_blocks_faq_block_locales" ADD COLUMN "header" jsonb;
CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_locale_idx" ON "pages_blocks_faq_block_items" ("_locale");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_locale_idx" ON "_pages_v_blocks_faq_block_items" ("_locale");
ALTER TABLE "pages_blocks_faq_block_locales" DROP COLUMN IF EXISTS "title";
ALTER TABLE "pages_blocks_faq_block_locales" DROP COLUMN IF EXISTS "sub_title";
ALTER TABLE "_pages_v_blocks_faq_block_locales" DROP COLUMN IF EXISTS "title";
ALTER TABLE "_pages_v_blocks_faq_block_locales" DROP COLUMN IF EXISTS "sub_title";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_items_locales" (
	"title" varchar,
	"sub_title" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_faq_block_items_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_items_locales" (
	"title" varchar,
	"sub_title" jsonb,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_faq_block_items_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

DROP INDEX IF EXISTS "pages_blocks_faq_block_items_locale_idx";
DROP INDEX IF EXISTS "_pages_v_blocks_faq_block_items_locale_idx";
ALTER TABLE "pages_blocks_faq_block_locales" ADD COLUMN "title" varchar;
ALTER TABLE "pages_blocks_faq_block_locales" ADD COLUMN "sub_title" jsonb;
ALTER TABLE "_pages_v_blocks_faq_block_locales" ADD COLUMN "title" varchar;
ALTER TABLE "_pages_v_blocks_faq_block_locales" ADD COLUMN "sub_title" jsonb;
ALTER TABLE "pages_blocks_faq_block_items" DROP COLUMN IF EXISTS "_locale";
ALTER TABLE "pages_blocks_faq_block_items" DROP COLUMN IF EXISTS "title";
ALTER TABLE "pages_blocks_faq_block_items" DROP COLUMN IF EXISTS "content";
ALTER TABLE "pages_blocks_faq_block_locales" DROP COLUMN IF EXISTS "header";
ALTER TABLE "_pages_v_blocks_faq_block_items" DROP COLUMN IF EXISTS "_locale";
ALTER TABLE "_pages_v_blocks_faq_block_items" DROP COLUMN IF EXISTS "title";
ALTER TABLE "_pages_v_blocks_faq_block_items" DROP COLUMN IF EXISTS "content";
ALTER TABLE "_pages_v_blocks_faq_block_locales" DROP COLUMN IF EXISTS "header";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_faq_block_items_locales" ADD CONSTRAINT "pages_blocks_faq_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_faq_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_faq_block_items_locales" ADD CONSTRAINT "_pages_v_blocks_faq_block_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_faq_block_items"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
