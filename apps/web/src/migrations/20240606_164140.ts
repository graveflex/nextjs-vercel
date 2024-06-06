import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "files" ADD COLUMN "focal_x" numeric;
ALTER TABLE "files" ADD COLUMN "focal_y" numeric;
ALTER TABLE "images" ADD COLUMN "focal_x" numeric;
ALTER TABLE "images" ADD COLUMN "focal_y" numeric;
ALTER TABLE "videos" ADD COLUMN "focal_x" numeric;
ALTER TABLE "videos" ADD COLUMN "focal_y" numeric;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "files" DROP COLUMN IF EXISTS "focal_x";
ALTER TABLE "files" DROP COLUMN IF EXISTS "focal_y";
ALTER TABLE "images" DROP COLUMN IF EXISTS "focal_x";
ALTER TABLE "images" DROP COLUMN IF EXISTS "focal_y";
ALTER TABLE "videos" DROP COLUMN IF EXISTS "focal_x";
ALTER TABLE "videos" DROP COLUMN IF EXISTS "focal_y";`);

};
