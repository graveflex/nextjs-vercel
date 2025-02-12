import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."pageherSecB" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "public"."_pageherSecB_v" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "public"."homepageherSecB" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "public"."_homepageherSecB_v" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "public"."blogIdxherSecB" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "public"."_blogIdxherSecB_v" ALTER COLUMN "variant" SET DATA TYPE text;
  DROP TYPE "public"."vrnt";
  CREATE TYPE "public"."vrnt" AS ENUM('1', '2', '3', '4', '5', '6', '8', '9');
  ALTER TABLE "public"."pageherSecB" ALTER COLUMN "variant" SET DATA TYPE "public"."vrnt" USING "variant"::"public"."vrnt";
  ALTER TABLE "public"."_pageherSecB_v" ALTER COLUMN "variant" SET DATA TYPE "public"."vrnt" USING "variant"::"public"."vrnt";
  ALTER TABLE "public"."homepageherSecB" ALTER COLUMN "variant" SET DATA TYPE "public"."vrnt" USING "variant"::"public"."vrnt";
  ALTER TABLE "public"."_homepageherSecB_v" ALTER COLUMN "variant" SET DATA TYPE "public"."vrnt" USING "variant"::"public"."vrnt";
  ALTER TABLE "public"."blogIdxherSecB" ALTER COLUMN "variant" SET DATA TYPE "public"."vrnt" USING "variant"::"public"."vrnt";
  ALTER TABLE "public"."_blogIdxherSecB_v" ALTER COLUMN "variant" SET DATA TYPE "public"."vrnt" USING "variant"::"public"."vrnt";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."vrnt" ADD VALUE '7' BEFORE '8';`)
}
