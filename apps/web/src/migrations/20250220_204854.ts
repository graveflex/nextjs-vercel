import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
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
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_rels" ADD CONSTRAINT "blog_index_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_rels" ADD CONSTRAINT "blog_index_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_rels" ADD CONSTRAINT "blog_index_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_rels" ADD CONSTRAINT "_blog_index_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_rels" ADD CONSTRAINT "_blog_index_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_rels" ADD CONSTRAINT "_blog_index_v_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_images_id_idx" ON "pages_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_videos_id_idx" ON "pages_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_images_id_idx" ON "_pages_v_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_videos_id_idx" ON "_pages_v_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "homepage_rels_images_id_idx" ON "homepage_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "homepage_rels_videos_id_idx" ON "homepage_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_order_idx" ON "_homepage_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_parent_idx" ON "_homepage_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_path_idx" ON "_homepage_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_images_id_idx" ON "_homepage_v_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_videos_id_idx" ON "_homepage_v_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_order_idx" ON "blog_index_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_parent_idx" ON "blog_index_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_path_idx" ON "blog_index_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_images_id_idx" ON "blog_index_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_videos_id_idx" ON "blog_index_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_order_idx" ON "_blog_index_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_parent_idx" ON "_blog_index_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_path_idx" ON "_blog_index_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_images_id_idx" ON "_blog_index_v_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_videos_id_idx" ON "_blog_index_v_rels" USING btree ("videos_id");
  ALTER TABLE "pageherSecB" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "_pageherSecB_v" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "homepageherSecB" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "_homepageherSecB_v" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "blogIdxherSecB" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "_blogIdxherSecB_v" DROP COLUMN IF EXISTS "image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_homepage_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog_index_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_index_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "_homepage_v_rels" CASCADE;
  DROP TABLE "blog_index_rels" CASCADE;
  DROP TABLE "_blog_index_v_rels" CASCADE;
  ALTER TABLE "pageherSecB" ADD COLUMN "image_id" integer;
  ALTER TABLE "_pageherSecB_v" ADD COLUMN "image_id" integer;
  ALTER TABLE "homepageherSecB" ADD COLUMN "image_id" integer;
  ALTER TABLE "_homepageherSecB_v" ADD COLUMN "image_id" integer;
  ALTER TABLE "blogIdxherSecB" ADD COLUMN "image_id" integer;
  ALTER TABLE "_blogIdxherSecB_v" ADD COLUMN "image_id" integer;
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
