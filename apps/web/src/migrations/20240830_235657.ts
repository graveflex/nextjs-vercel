import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "_blog_index_v" ADD COLUMN "autosave" boolean;
  CREATE INDEX IF NOT EXISTS "_blog_index_v_autosave_idx" ON "_blog_index_v" USING btree ("autosave");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP INDEX IF EXISTS "_blog_index_v_autosave_idx";
  ALTER TABLE "_blog_index_v" DROP COLUMN IF EXISTS "autosave";`)
}
