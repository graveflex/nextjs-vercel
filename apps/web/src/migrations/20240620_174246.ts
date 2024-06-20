import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_faq_block" ADD COLUMN "textAlignment" "enum_pages_blocks_faq_block_text_alignment";
ALTER TABLE "_pages_v_blocks_faq_block" ADD COLUMN "textAlignment" "enum__pages_v_blocks_faq_block_text_alignment";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages_blocks_faq_block" DROP COLUMN IF EXISTS "textAlignment";
ALTER TABLE "_pages_v_blocks_faq_block" DROP COLUMN IF EXISTS "textAlignment";`);

};
