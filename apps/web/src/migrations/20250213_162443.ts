import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageherSecB" ADD COLUMN "form_id" integer;
  ALTER TABLE "_pageherSecB_v" ADD COLUMN "form_id" integer;
  ALTER TABLE "homepageherSecB" ADD COLUMN "form_id" integer;
  ALTER TABLE "_homepageherSecB_v" ADD COLUMN "form_id" integer;
  ALTER TABLE "blogIdxherSecB" ADD COLUMN "form_id" integer;
  ALTER TABLE "_blogIdxherSecB_v" ADD COLUMN "form_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pageherSecB" ADD CONSTRAINT "pageherSecB_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageherSecB_v" ADD CONSTRAINT "_pageherSecB_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageherSecB" ADD CONSTRAINT "homepageherSecB_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageherSecB_v" ADD CONSTRAINT "_homepageherSecB_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxherSecB" ADD CONSTRAINT "blogIdxherSecB_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxherSecB_v" ADD CONSTRAINT "_blogIdxherSecB_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pageherSecB_form_idx" ON "pageherSecB" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_pageherSecB_v_form_idx" ON "_pageherSecB_v" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "homepageherSecB_form_idx" ON "homepageherSecB" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_homepageherSecB_v_form_idx" ON "_homepageherSecB_v" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "blogIdxherSecB_form_idx" ON "blogIdxherSecB" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxherSecB_v_form_idx" ON "_blogIdxherSecB_v" USING btree ("form_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageherSecB" DROP CONSTRAINT "pageherSecB_form_id_forms_id_fk";
  
  ALTER TABLE "_pageherSecB_v" DROP CONSTRAINT "_pageherSecB_v_form_id_forms_id_fk";
  
  ALTER TABLE "homepageherSecB" DROP CONSTRAINT "homepageherSecB_form_id_forms_id_fk";
  
  ALTER TABLE "_homepageherSecB_v" DROP CONSTRAINT "_homepageherSecB_v_form_id_forms_id_fk";
  
  ALTER TABLE "blogIdxherSecB" DROP CONSTRAINT "blogIdxherSecB_form_id_forms_id_fk";
  
  ALTER TABLE "_blogIdxherSecB_v" DROP CONSTRAINT "_blogIdxherSecB_v_form_id_forms_id_fk";
  
  DROP INDEX IF EXISTS "pageherSecB_form_idx";
  DROP INDEX IF EXISTS "_pageherSecB_v_form_idx";
  DROP INDEX IF EXISTS "homepageherSecB_form_idx";
  DROP INDEX IF EXISTS "_homepageherSecB_v_form_idx";
  DROP INDEX IF EXISTS "blogIdxherSecB_form_idx";
  DROP INDEX IF EXISTS "_blogIdxherSecB_v_form_idx";
  ALTER TABLE "pageherSecB" DROP COLUMN IF EXISTS "form_id";
  ALTER TABLE "_pageherSecB_v" DROP COLUMN IF EXISTS "form_id";
  ALTER TABLE "homepageherSecB" DROP COLUMN IF EXISTS "form_id";
  ALTER TABLE "_homepageherSecB_v" DROP COLUMN IF EXISTS "form_id";
  ALTER TABLE "blogIdxherSecB" DROP COLUMN IF EXISTS "form_id";
  ALTER TABLE "_blogIdxherSecB_v" DROP COLUMN IF EXISTS "form_id";`)
}
