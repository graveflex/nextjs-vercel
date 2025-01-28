import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."vrnt" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9');
  ALTER TABLE "PageherSecB" ADD COLUMN "variant" "vrnt" DEFAULT '1';
  ALTER TABLE "_PageherSecB_v" ADD COLUMN "variant" "vrnt" DEFAULT '1';
  ALTER TABLE "HomeherSecB" ADD COLUMN "variant" "vrnt" DEFAULT '1';
  ALTER TABLE "_HomeherSecB_v" ADD COLUMN "variant" "vrnt" DEFAULT '1';
  ALTER TABLE "BlogherSecB" ADD COLUMN "variant" "vrnt" DEFAULT '1';
  ALTER TABLE "_BlogherSecB_v" ADD COLUMN "variant" "vrnt" DEFAULT '1';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "PageherSecB" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_PageherSecB_v" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "HomeherSecB" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_HomeherSecB_v" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "BlogherSecB" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_BlogherSecB_v" DROP COLUMN IF EXISTS "variant";
  DROP TYPE "public"."vrnt";`)
}
