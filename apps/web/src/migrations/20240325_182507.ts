import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_images_additional_props_aspect_ratio" AS ENUM('6/7', '7/6', '1/1', '3/2', '16/9', 'initial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "images" ADD COLUMN "image_props_fill" boolean;
ALTER TABLE "images" ADD COLUMN "image_props_priority" boolean;
ALTER TABLE "images" ADD COLUMN "image_props_quality" numeric;
ALTER TABLE "images" ADD COLUMN "additional_props_style" varchar;
ALTER TABLE "images" ADD COLUMN "additional_props_is_rounded" boolean;
ALTER TABLE "images" ADD COLUMN "additionalProps_aspectRatio" "enum_images_additional_props_aspect_ratio";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "images" DROP COLUMN IF EXISTS "image_props_fill";
ALTER TABLE "images" DROP COLUMN IF EXISTS "image_props_priority";
ALTER TABLE "images" DROP COLUMN IF EXISTS "image_props_quality";
ALTER TABLE "images" DROP COLUMN IF EXISTS "additional_props_style";
ALTER TABLE "images" DROP COLUMN IF EXISTS "additional_props_is_rounded";
ALTER TABLE "images" DROP COLUMN IF EXISTS "additionalProps_aspectRatio";`);

};
