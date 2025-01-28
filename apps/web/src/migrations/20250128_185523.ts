import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."PagehdrSec_v" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9');
  CREATE TYPE "public"."HomehdrSec_v" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9');
  CREATE TYPE "public"."BloghdrSec_v" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9');
  ALTER TABLE "PagehdrSec" ADD COLUMN "variant" "PagehdrSec_v" DEFAULT '1';
  ALTER TABLE "_PagehdrSec_v" ADD COLUMN "variant" "PagehdrSec_v" DEFAULT '1';
  ALTER TABLE "HomehdrSec" ADD COLUMN "variant" "HomehdrSec_v" DEFAULT '1';
  ALTER TABLE "_HomehdrSec_v" ADD COLUMN "variant" "HomehdrSec_v" DEFAULT '1';
  ALTER TABLE "BloghdrSec" ADD COLUMN "variant" "BloghdrSec_v" DEFAULT '1';
  ALTER TABLE "_BloghdrSec_v" ADD COLUMN "variant" "BloghdrSec_v" DEFAULT '1';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "PagehdrSec" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_PagehdrSec_v" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "HomehdrSec" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_HomehdrSec_v" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "BloghdrSec" DROP COLUMN IF EXISTS "variant";
  ALTER TABLE "_BloghdrSec_v" DROP COLUMN IF EXISTS "variant";
  DROP TYPE "public"."PagehdrSec_v";
  DROP TYPE "public"."HomehdrSec_v";
  DROP TYPE "public"."BloghdrSec_v";`)
}
