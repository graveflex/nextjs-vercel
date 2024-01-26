import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_input_type" AS ENUM('text');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_hero_block" ALTER COLUMN "sub_title" SET DATA TYPE jsonb USING (sub_title::jsonb);
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "eyebrow" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_placeholder" varchar;
ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "input_type" "enum_pages_blocks_hero_block_input_type";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages_blocks_hero_block" ALTER COLUMN "sub_title" SET DATA TYPE varchar;
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "eyebrow";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_placeholder";
ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "input_type";`);

};
