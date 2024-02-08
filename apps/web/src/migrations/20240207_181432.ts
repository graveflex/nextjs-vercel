import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
// Migration code
};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
// Migration code
};
