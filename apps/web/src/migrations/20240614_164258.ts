import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "card_cta_v" ADD VALUE 'outline';
ALTER TYPE "card_cta_v" ADD VALUE 'solid';
ALTER TYPE "undefined_cta_v" ADD VALUE 'outline';
ALTER TYPE "undefined_cta_v" ADD VALUE 'solid';`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "undefined_link_ic" ADD VALUE 'Login';
ALTER TYPE "undefined_link_ic" ADD VALUE 'Menu';
ALTER TYPE "undefined_link_ic" ADD VALUE 'Location';
ALTER TYPE "undefined_link_ic" ADD VALUE 'Calendar';
ALTER TYPE "undefined_link_ic" ADD VALUE 'PersonBust';
ALTER TYPE "card_cta_v" ADD VALUE 'rounded-outline';
ALTER TYPE "undefined_cta_v" ADD VALUE 'rounded-outline';
ALTER TYPE "iconnavitem_ic" ADD VALUE 'Login';
ALTER TYPE "iconnavitem_ic" ADD VALUE 'Menu';
ALTER TYPE "iconnavitem_ic" ADD VALUE 'Location';
ALTER TYPE "iconnavitem_ic" ADD VALUE 'Calendar';
ALTER TYPE "iconnavitem_ic" ADD VALUE 'PersonBust';`);

};
