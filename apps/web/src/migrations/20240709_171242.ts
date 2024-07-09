import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TYPE "bgColor" ADD VALUE 'bg';
ALTER TYPE "bgColor" ADD VALUE 'bgLight';
ALTER TYPE "bgColor" ADD VALUE 'primary';
ALTER TYPE "bgColor" ADD VALUE 'secondary';`)
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TYPE "bgColor" ADD VALUE 'neutral';
ALTER TYPE "bgColor" ADD VALUE 'blue';
ALTER TYPE "bgColor" ADD VALUE 'indigo';
ALTER TYPE "bgColor" ADD VALUE 'purple';`)
};
