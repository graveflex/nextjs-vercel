import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "pages_blocks_card_grid_block_cards_locales";
DROP TABLE "_pages_v_blocks_card_grid_block_cards_locales";
ALTER TABLE "pages_blocks_card_grid_block_cards" ADD COLUMN "card_eyebrow" varchar;
ALTER TABLE "pages_blocks_card_grid_block_cards" ADD COLUMN "card_headline" varchar;
ALTER TABLE "pages_blocks_card_grid_block_cards" ADD COLUMN "card_sub_head" varchar;
ALTER TABLE "pages_blocks_card_grid_block_cards" ADD COLUMN "card_date" varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD COLUMN "card_eyebrow" varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD COLUMN "card_headline" varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD COLUMN "card_sub_head" varchar;
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD COLUMN "card_date" varchar;`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards_locales" (
	"card_eyebrow" varchar,
	"card_headline" varchar,
	"card_sub_head" varchar,
	"card_date" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" varchar NOT NULL,
	CONSTRAINT "pages_blocks_card_grid_block_cards_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_locales" (
	"card_eyebrow" varchar,
	"card_headline" varchar,
	"card_sub_head" varchar,
	"card_date" varchar,
	"id" serial PRIMARY KEY NOT NULL,
	"_locale" "_locales" NOT NULL,
	"_parent_id" integer NOT NULL,
	CONSTRAINT "_pages_v_blocks_card_grid_block_cards_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
);

ALTER TABLE "pages_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_eyebrow";
ALTER TABLE "pages_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_headline";
ALTER TABLE "pages_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_sub_head";
ALTER TABLE "pages_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_date";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_eyebrow";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_headline";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_sub_head";
ALTER TABLE "_pages_v_blocks_card_grid_block_cards" DROP COLUMN IF EXISTS "card_date";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_card_grid_block_cards_locales" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_card_grid_block_cards_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
};
