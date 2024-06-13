import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "nav_header_collapsible_menu_sections_links" ALTER COLUMN "link_label" DROP NOT NULL;
ALTER TABLE "nav_header_flat_menu" ALTER COLUMN "link_label" DROP NOT NULL;
ALTER TABLE "nav_footer_footer_items_footer_menu" ALTER COLUMN "link_label" DROP NOT NULL;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "nav_header_collapsible_menu_sections_links" ALTER COLUMN "link_label" SET NOT NULL;
ALTER TABLE "nav_header_flat_menu" ALTER COLUMN "link_label" SET NOT NULL;
ALTER TABLE "nav_footer_footer_items_footer_menu" ALTER COLUMN "link_label" SET NOT NULL;`);

};
