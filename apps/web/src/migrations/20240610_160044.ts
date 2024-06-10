import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "nav_footer_footer_menu" RENAME TO "nav_footer_footer_items_footer_menu";
ALTER TABLE "nav" RENAME COLUMN "footer_copyright" TO "footer_footer_items_copyright";
ALTER TABLE "nav" RENAME COLUMN "footer_legal_disclaimer" TO "footer_footer_items_legal_disclaimer";
ALTER TABLE "nav_footer_footer_items_footer_menu" DROP CONSTRAINT "nav_footer_footer_menu_parent_id_fk";

DROP INDEX IF EXISTS "nav_footer_footer_menu_order_idx";
DROP INDEX IF EXISTS "nav_footer_footer_menu_parent_id_idx";
CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_order_idx" ON "nav_footer_footer_items_footer_menu" ("_order");
CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_parent_id_idx" ON "nav_footer_footer_items_footer_menu" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "nav_footer_footer_items_footer_menu" RENAME TO "nav_footer_footer_menu";
ALTER TABLE "nav" RENAME COLUMN "footer_footer_items_copyright" TO "footer_copyright";
ALTER TABLE "nav" RENAME COLUMN "footer_footer_items_legal_disclaimer" TO "footer_legal_disclaimer";
ALTER TABLE "nav_footer_footer_menu" DROP CONSTRAINT "nav_footer_footer_items_footer_menu_parent_id_fk";

DROP INDEX IF EXISTS "nav_footer_footer_items_footer_menu_order_idx";
DROP INDEX IF EXISTS "nav_footer_footer_items_footer_menu_parent_id_idx";
CREATE INDEX IF NOT EXISTS "nav_footer_footer_menu_order_idx" ON "nav_footer_footer_menu" ("_order");
CREATE INDEX IF NOT EXISTS "nav_footer_footer_menu_parent_id_idx" ON "nav_footer_footer_menu" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "nav_footer_footer_menu" ADD CONSTRAINT "nav_footer_footer_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "nav"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
