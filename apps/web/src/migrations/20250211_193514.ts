import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageherSecB_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pageherSecB_v_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "homepageherSecB_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_homepageherSecB_v_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "blogIdxherSecB_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_blogIdxherSecB_v_locales" DROP COLUMN IF EXISTS "title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageherSecB_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "_pageherSecB_v_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "homepageherSecB_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "_homepageherSecB_v_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "blogIdxherSecB_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "_blogIdxherSecB_v_locales" ADD COLUMN "title" varchar;`)
}
