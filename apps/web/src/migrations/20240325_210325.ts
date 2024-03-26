import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_images_additional_props_object_fit" AS ENUM('cover', 'contain', 'fill', 'scale-down');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "images" ADD COLUMN "additionalProps_objectFit" "enum_images_additional_props_object_fit";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "images" DROP COLUMN IF EXISTS "additionalProps_objectFit";`);

};
