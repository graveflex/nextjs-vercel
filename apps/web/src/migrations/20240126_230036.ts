import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_hero_block_block_config_layout" AS ENUM('bg', 'imgRight', 'imgLeft', 'imgRightFull', 'imgLeftFull');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_hero_block" ADD COLUMN "blockConfig_layout" "enum_pages_blocks_hero_block_block_config_layout";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages_blocks_hero_block" DROP COLUMN IF EXISTS "blockConfig_layout";`);

};
