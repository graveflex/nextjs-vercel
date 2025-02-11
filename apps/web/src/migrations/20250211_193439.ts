import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageherSecB" ADD COLUMN "image_id" integer;
  ALTER TABLE "pageherSecB_locales" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pageherSecB_v" ADD COLUMN "image_id" integer;
  ALTER TABLE "_pageherSecB_v_locales" ADD COLUMN "content" jsonb;
  ALTER TABLE "homepageherSecB" ADD COLUMN "image_id" integer;
  ALTER TABLE "homepageherSecB_locales" ADD COLUMN "content" jsonb;
  ALTER TABLE "_homepageherSecB_v" ADD COLUMN "image_id" integer;
  ALTER TABLE "_homepageherSecB_v_locales" ADD COLUMN "content" jsonb;
  ALTER TABLE "blogIdxherSecB" ADD COLUMN "image_id" integer;
  ALTER TABLE "blogIdxherSecB_locales" ADD COLUMN "content" jsonb;
  ALTER TABLE "_blogIdxherSecB_v" ADD COLUMN "image_id" integer;
  ALTER TABLE "_blogIdxherSecB_v_locales" ADD COLUMN "content" jsonb;
  DO $$ BEGIN
   ALTER TABLE "pageherSecB" ADD CONSTRAINT "pageherSecB_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageherSecB_v" ADD CONSTRAINT "_pageherSecB_v_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageherSecB" ADD CONSTRAINT "homepageherSecB_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageherSecB_v" ADD CONSTRAINT "_homepageherSecB_v_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxherSecB" ADD CONSTRAINT "blogIdxherSecB_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxherSecB_v" ADD CONSTRAINT "_blogIdxherSecB_v_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pageherSecB_image_idx" ON "pageherSecB" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pageherSecB_v_image_idx" ON "_pageherSecB_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "homepageherSecB_image_idx" ON "homepageherSecB" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_homepageherSecB_v_image_idx" ON "_homepageherSecB_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogIdxherSecB_image_idx" ON "blogIdxherSecB" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxherSecB_v_image_idx" ON "_blogIdxherSecB_v" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageherSecB" DROP CONSTRAINT "pageherSecB_image_id_images_id_fk";
  
  ALTER TABLE "_pageherSecB_v" DROP CONSTRAINT "_pageherSecB_v_image_id_images_id_fk";
  
  ALTER TABLE "homepageherSecB" DROP CONSTRAINT "homepageherSecB_image_id_images_id_fk";
  
  ALTER TABLE "_homepageherSecB_v" DROP CONSTRAINT "_homepageherSecB_v_image_id_images_id_fk";
  
  ALTER TABLE "blogIdxherSecB" DROP CONSTRAINT "blogIdxherSecB_image_id_images_id_fk";
  
  ALTER TABLE "_blogIdxherSecB_v" DROP CONSTRAINT "_blogIdxherSecB_v_image_id_images_id_fk";
  
  DROP INDEX IF EXISTS "pageherSecB_image_idx";
  DROP INDEX IF EXISTS "_pageherSecB_v_image_idx";
  DROP INDEX IF EXISTS "homepageherSecB_image_idx";
  DROP INDEX IF EXISTS "_homepageherSecB_v_image_idx";
  DROP INDEX IF EXISTS "blogIdxherSecB_image_idx";
  DROP INDEX IF EXISTS "_blogIdxherSecB_v_image_idx";
  ALTER TABLE "pageherSecB" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "pageherSecB_locales" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "_pageherSecB_v" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "_pageherSecB_v_locales" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "homepageherSecB" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "homepageherSecB_locales" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "_homepageherSecB_v" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "_homepageherSecB_v_locales" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "blogIdxherSecB" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "blogIdxherSecB_locales" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "_blogIdxherSecB_v" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "_blogIdxherSecB_v_locales" DROP COLUMN IF EXISTS "content";`)
}
