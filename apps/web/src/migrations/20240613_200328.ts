import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_pages_blocks_hero_block_input_type" ADD VALUE 'input';
ALTER TYPE "enum_pages_blocks_hero_block_input_type" ADD VALUE 'select';
ALTER TYPE "enum_pages_blocks_hero_block_input_type" ADD VALUE 'radio';
ALTER TYPE "enum_pages_blocks_hero_block_input_type" ADD VALUE 'checkbox';
ALTER TYPE "enum__pages_v_blocks_hero_block_input_type" ADD VALUE 'input';
ALTER TYPE "enum__pages_v_blocks_hero_block_input_type" ADD VALUE 'select';
ALTER TYPE "enum__pages_v_blocks_hero_block_input_type" ADD VALUE 'radio';
ALTER TYPE "enum__pages_v_blocks_hero_block_input_type" ADD VALUE 'checkbox';
CREATE TABLE IF NOT EXISTS "undefined_input_field" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar,
	"value" varchar,
	"name" varchar
);

CREATE TABLE IF NOT EXISTS "_undefined_input_field_v" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar,
	"value" varchar,
	"name" varchar,
	"_uuid" varchar
);

ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_name" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_label" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_error_message" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_help_text" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_required" boolean;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_name" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_label" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_error_message" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_help_text" varchar;
ALTER TABLE "_pages_v_blocks_hero_block" ADD COLUMN "input_required" boolean;
CREATE INDEX IF NOT EXISTS "undefined_input_field_order_idx" ON "undefined_input_field" ("_order");
CREATE INDEX IF NOT EXISTS "undefined_input_field_parent_id_idx" ON "undefined_input_field" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_undefined_input_field_v_order_idx" ON "_undefined_input_field_v" ("_order");
CREATE INDEX IF NOT EXISTS "_undefined_input_field_v_parent_id_idx" ON "_undefined_input_field_v" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "undefined_input_field" ADD CONSTRAINT "undefined_input_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_undefined_input_field_v" ADD CONSTRAINT "_undefined_input_field_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "undefined_cta_ic" ADD VALUE 'Login';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Menu';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Location';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Calendar';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'PersonBust';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Phone';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Job';
ALTER TYPE "undefined_cta_ic" ADD VALUE 'Email';
ALTER TYPE "enum_pages_blocks_hero_block_input_type" ADD VALUE 'text';
ALTER TYPE "enum__pages_v_blocks_hero_block_input_type" ADD VALUE 'text';
DROP TABLE "undefined_input_field";
DROP TABLE "_undefined_input_field_v";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_name";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_label";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_error_message";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_help_text";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_required";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_name";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_label";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_error_message";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_help_text";
ALTER TABLE "_pages_v_blocks_hero_block" DROP COLUMN IF EXISTS "input_required";`);

};
