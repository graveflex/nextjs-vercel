import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum_homepage_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum_blog_index_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  ALTER TABLE "pages_blocks_cta_sections_block" ADD COLUMN "variant" "enum_pages_blocks_cta_sections_block_variant" DEFAULT '1';
  ALTER TABLE "_pages_v_blocks_cta_sections_block" ADD COLUMN "variant" "enum__pages_v_blocks_cta_sections_block_variant" DEFAULT '1';
  ALTER TABLE "homepage_blocks_cta_sections_block" ADD COLUMN "variant" "enum_homepage_blocks_cta_sections_block_variant" DEFAULT '1';
  ALTER TABLE "_homepage_v_blocks_cta_sections_block" ADD COLUMN "variant" "enum__homepage_v_blocks_cta_sections_block_variant" DEFAULT '1';
  ALTER TABLE "blog_index_blocks_cta_sections_block" ADD COLUMN "variant" "enum_blog_index_blocks_cta_sections_block_variant" DEFAULT '1';
  ALTER TABLE "_blog_index_v_blocks_cta_sections_block" ADD COLUMN "variant" "enum__blog_index_v_blocks_cta_sections_block_variant" DEFAULT '1';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cta_sections_block" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_pages_v_blocks_cta_sections_block" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "homepage_blocks_cta_sections_block" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_homepage_v_blocks_cta_sections_block" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "blog_index_blocks_cta_sections_block" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_blog_index_v_blocks_cta_sections_block" DROP COLUMN IF EXISTS "variant";
  DROP TYPE "public"."enum_pages_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_homepage_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_blog_index_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_variant";`)
}
