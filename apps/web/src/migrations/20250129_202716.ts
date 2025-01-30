import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."enum_pages_blocks_cta_sections_block_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."cw" AS ENUM('full', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs');
  CREATE TYPE "public"."t" AS ENUM('pt-0', 'pt-2', 'pt-4', 'pt-6', 'pt-8', 'pt-10');
  CREATE TYPE "public"."b" AS ENUM('pb-0', 'pb-2', 'pb-4', 'pb-6', 'pb-8', 'pb-10');
  CREATE TYPE "public"."enum_pages_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum_pages_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_sections_block_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum__pages_v_version_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."undefined_cta_t" AS ENUM('internal', 'external', 'email', 'phone', 'file');
  CREATE TYPE "public"."undefined_link_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
  CREATE TYPE "public"."undefined_link_iw" AS ENUM('35', '30', '25', '20');
  CREATE TYPE "public"."card_cta_v" AS ENUM('outline', 'solid', 'link');
  CREATE TYPE "public"."card_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."iconnavitem_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
  CREATE TYPE "public"."iconnavitem_iw" AS ENUM('35', '30', '25', '20');
  CREATE TYPE "public"."enum_nav_header_banner_background" AS ENUM('white', 'black', 'gray');
  CREATE TYPE "public"."undefined_cta_v" AS ENUM('outline', 'solid', 'link');
  CREATE TYPE "public"."undefined_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
  CREATE TYPE "public"."enum_homepage_blocks_cta_sections_block_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum_homepage_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_homepage_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_sections_block_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum__homepage_v_version_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepage_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."enum_blog_index_blocks_cta_sections_block_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blog_index_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum_blog_index_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_blog_index_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7');
  CREATE TYPE "public"."enum__blog_index_v_version_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_index_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"theme" "enum_pages_blocks_cta_sections_block_theme",
  	"content_width" "cw" DEFAULT 'xl',
  	"padding_xs_padding_top" "t",
  	"padding_xs_padding_bottom" "b",
  	"padding_md_padding_top" "t",
  	"padding_md_padding_bottom" "b",
  	"padding_lg_padding_top" "t",
  	"padding_lg_padding_bottom" "b",
  	"padding_xl_padding_top" "t",
  	"padding_xl_padding_bottom" "b",
  	"variant" "enum_pages_blocks_cta_sections_block_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_keywords" varchar,
  	"slug" varchar,
  	"theme" "enum_pages_theme",
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_locales" (
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"page_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"theme" "enum__pages_v_blocks_cta_sections_block_theme",
  	"content_width" "cw" DEFAULT 'xl',
  	"padding_xs_padding_top" "t",
  	"padding_xs_padding_bottom" "b",
  	"padding_md_padding_top" "t",
  	"padding_md_padding_bottom" "b",
  	"padding_lg_padding_top" "t",
  	"padding_lg_padding_bottom" "b",
  	"padding_xl_padding_top" "t",
  	"padding_xl_padding_bottom" "b",
  	"variant" "enum__pages_v_blocks_cta_sections_block_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_meta_keywords" varchar,
  	"version_slug" varchar,
  	"version_theme" "enum__pages_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_page_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "posts_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_content_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"thumbnail_id" integer,
  	"cover_image_id" integer,
  	"slug" varchar,
  	"published_at" timestamp(3) with time zone,
  	"meta_keywords" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_locales" (
  	"title" varchar,
  	"sub_title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"authors_id" integer,
  	"tags_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_content_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_thumbnail_id" integer,
  	"version_cover_image_id" integer,
  	"version_slug" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_meta_keywords" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_locales" (
  	"version_title" varchar,
  	"version_sub_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"authors_id" integer,
  	"tags_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "authors" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"full_name" varchar NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "authors_locales" (
  	"job_title" varchar NOT NULL,
  	"bio" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tags" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tags_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "files" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_props_priority" boolean DEFAULT false,
  	"image_props_quality" numeric DEFAULT 75,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_blur_url" varchar,
  	"sizes_blur_width" numeric,
  	"sizes_blur_height" numeric,
  	"sizes_blur_mime_type" varchar,
  	"sizes_blur_filesize" numeric,
  	"sizes_blur_filename" varchar,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_mobile_url" varchar,
  	"sizes_mobile_width" numeric,
  	"sizes_mobile_height" numeric,
  	"sizes_mobile_mime_type" varchar,
  	"sizes_mobile_filesize" numeric,
  	"sizes_mobile_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar,
  	"sizes_desktop_url" varchar,
  	"sizes_desktop_width" numeric,
  	"sizes_desktop_height" numeric,
  	"sizes_desktop_mime_type" varchar,
  	"sizes_desktop_filesize" numeric,
  	"sizes_desktop_filename" varchar,
  	"sizes_ultrawide_url" varchar,
  	"sizes_ultrawide_width" numeric,
  	"sizes_ultrawide_height" numeric,
  	"sizes_ultrawide_mime_type" varchar,
  	"sizes_ultrawide_filesize" numeric,
  	"sizes_ultrawide_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "images_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "videos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"published_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"authors_id" integer,
  	"tags_id" integer,
  	"files_id" integer,
  	"images_id" integer,
  	"videos_id" integer,
  	"users_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "undefined_cta_t" DEFAULT 'internal',
  	"link_label" varchar,
  	"link_internal_href_id" integer,
  	"link_external_href" varchar,
  	"link_email_href" varchar,
  	"link_phone_href" varchar,
  	"link_file_href_id" integer,
  	"link_new_tab" boolean,
  	"link_icon_name" "undefined_link_ic",
  	"link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"link_icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_flat_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "undefined_cta_t" DEFAULT 'internal',
  	"link_label" varchar,
  	"link_internal_href_id" integer,
  	"link_external_href" varchar,
  	"link_email_href" varchar,
  	"link_phone_href" varchar,
  	"link_file_href_id" integer,
  	"link_new_tab" boolean,
  	"link_icon_name" "undefined_link_ic",
  	"link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"link_icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_icon_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"new_tab" boolean,
  	"icon_name" "iconnavitem_ic",
  	"icon_size" "iconnavitem_iw" DEFAULT '35',
  	"icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav_footer_footer_items_footer_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "undefined_cta_t" DEFAULT 'internal',
  	"link_label" varchar,
  	"link_internal_href_id" integer,
  	"link_external_href" varchar,
  	"link_email_href" varchar,
  	"link_phone_href" varchar,
  	"link_file_href_id" integer,
  	"link_new_tab" boolean,
  	"link_icon_name" "undefined_link_ic",
  	"link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"link_icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_logo_id" integer,
  	"header_banner_content" jsonb,
  	"header_banner_background" "enum_nav_header_banner_background",
  	"header_has_cta" boolean,
  	"header_cta_button_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"header_cta_button_cta_link_label" varchar,
  	"header_cta_button_cta_link_internal_href_id" integer,
  	"header_cta_button_cta_link_external_href" varchar,
  	"header_cta_button_cta_link_email_href" varchar,
  	"header_cta_button_cta_link_phone_href" varchar,
  	"header_cta_button_cta_link_file_href_id" integer,
  	"header_cta_button_cta_link_new_tab" boolean,
  	"header_cta_button_cta_link_icon_name" "undefined_link_ic",
  	"header_cta_button_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"header_cta_button_cta_link_icon_color" varchar,
  	"header_cta_button_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"header_cta_button_cta_color" "undefined_cta_tv",
  	"footer_footer_items_footer_logo_id" integer,
  	"footer_footer_items_copyright" jsonb,
  	"footer_footer_items_legal_disclaimer" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "four_oh_four" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "four_oh_four_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"theme" "enum_homepage_blocks_cta_sections_block_theme",
  	"content_width" "cw" DEFAULT 'xl',
  	"padding_xs_padding_top" "t",
  	"padding_xs_padding_bottom" "b",
  	"padding_md_padding_top" "t",
  	"padding_md_padding_bottom" "b",
  	"padding_lg_padding_top" "t",
  	"padding_lg_padding_bottom" "b",
  	"padding_xl_padding_top" "t",
  	"padding_xl_padding_bottom" "b",
  	"variant" "enum_homepage_blocks_cta_sections_block_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar DEFAULT '/',
  	"theme" "enum_homepage_theme",
  	"published_at" timestamp(3) with time zone,
  	"_status" "enum_homepage_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_locales" (
  	"page_title" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"theme" "enum__homepage_v_blocks_cta_sections_block_theme",
  	"content_width" "cw" DEFAULT 'xl',
  	"padding_xs_padding_top" "t",
  	"padding_xs_padding_bottom" "b",
  	"padding_md_padding_top" "t",
  	"padding_md_padding_bottom" "b",
  	"padding_lg_padding_top" "t",
  	"padding_lg_padding_bottom" "b",
  	"padding_xl_padding_top" "t",
  	"padding_xl_padding_bottom" "b",
  	"variant" "enum__homepage_v_blocks_cta_sections_block_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_slug" varchar DEFAULT '/',
  	"version_theme" "enum__homepage_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version__status" "enum__homepage_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__homepage_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_locales" (
  	"version_page_title" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"theme" "enum_blog_index_blocks_cta_sections_block_theme",
  	"content_width" "cw" DEFAULT 'xl',
  	"padding_xs_padding_top" "t",
  	"padding_xs_padding_bottom" "b",
  	"padding_md_padding_top" "t",
  	"padding_md_padding_bottom" "b",
  	"padding_lg_padding_top" "t",
  	"padding_lg_padding_bottom" "b",
  	"padding_xl_padding_top" "t",
  	"padding_xl_padding_bottom" "b",
  	"variant" "enum_blog_index_blocks_cta_sections_block_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar DEFAULT 'blog',
  	"theme" "enum_blog_index_theme",
  	"published_at" timestamp(3) with time zone,
  	"_status" "enum_blog_index_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_locales" (
  	"page_title" varchar DEFAULT 'Blog Index',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"theme" "enum__blog_index_v_blocks_cta_sections_block_theme",
  	"content_width" "cw" DEFAULT 'xl',
  	"padding_xs_padding_top" "t",
  	"padding_xs_padding_bottom" "b",
  	"padding_md_padding_top" "t",
  	"padding_md_padding_bottom" "b",
  	"padding_lg_padding_top" "t",
  	"padding_lg_padding_bottom" "b",
  	"padding_xl_padding_top" "t",
  	"padding_xl_padding_bottom" "b",
  	"variant" "enum__blog_index_v_blocks_cta_sections_block_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_slug" varchar DEFAULT 'blog',
  	"version_theme" "enum__blog_index_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_index_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__blog_index_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_locales" (
  	"version_page_title" varchar DEFAULT 'Blog Index',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_sections_block" ADD CONSTRAINT "pages_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_sections_block_locales" ADD CONSTRAINT "pages_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_sections_block" ADD CONSTRAINT "_pages_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_pages_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_images_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_content" ADD CONSTRAINT "posts_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_content_locales" ADD CONSTRAINT "posts_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_thumbnail_id_images_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_image_id_images_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_ctas" ADD CONSTRAINT "_posts_v_version_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_ctas" ADD CONSTRAINT "_posts_v_version_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_ctas" ADD CONSTRAINT "_posts_v_version_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_content" ADD CONSTRAINT "_posts_v_version_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_content_locales" ADD CONSTRAINT "_posts_v_version_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_version_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_thumbnail_id_images_id_fk" FOREIGN KEY ("version_thumbnail_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_cover_image_id_images_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_images_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "authors" ADD CONSTRAINT "authors_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "authors_locales" ADD CONSTRAINT "authors_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tags_locales" ADD CONSTRAINT "tags_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "images_locales" ADD CONSTRAINT "images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_files_fk" FOREIGN KEY ("files_id") REFERENCES "public"."files"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_header_collapsible_menu_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections" ADD CONSTRAINT "nav_header_collapsible_menu_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_icon_items" ADD CONSTRAINT "nav_header_icon_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_header_logo_id_images_id_fk" FOREIGN KEY ("header_logo_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_header_cta_button_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("header_cta_button_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_header_cta_button_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("header_cta_button_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_footer_footer_items_footer_logo_id_images_id_fk" FOREIGN KEY ("footer_footer_items_footer_logo_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "four_oh_four_locales" ADD CONSTRAINT "four_oh_four_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."four_oh_four"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_cta_sections_block" ADD CONSTRAINT "homepage_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_cta_sections_block_locales" ADD CONSTRAINT "homepage_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_locales" ADD CONSTRAINT "homepage_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_cta_sections_block" ADD CONSTRAINT "_homepage_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_homepage_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_locales" ADD CONSTRAINT "_homepage_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_cta_sections_block" ADD CONSTRAINT "blog_index_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_cta_sections_block_locales" ADD CONSTRAINT "blog_index_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_locales" ADD CONSTRAINT "blog_index_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_cta_sections_block" ADD CONSTRAINT "_blog_index_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_locales" ADD CONSTRAINT "_blog_index_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_order_idx" ON "pages_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_parent_id_idx" ON "pages_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_path_idx" ON "pages_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "pages_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_order_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_parent_id_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_path_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_ctas_order_idx" ON "posts_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_ctas_parent_id_idx" ON "posts_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_ctas_cta_link_cta_link_internal_href_idx" ON "posts_ctas" USING btree ("cta_link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "posts_ctas_cta_link_cta_link_file_href_idx" ON "posts_ctas" USING btree ("cta_link_file_href_id");
  CREATE INDEX IF NOT EXISTS "posts_content_order_idx" ON "posts_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_content_parent_id_idx" ON "posts_content" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_content_locales_locale_parent_id_unique" ON "posts_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_thumbnail_idx" ON "posts" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "posts_cover_image_idx" ON "posts" USING btree ("cover_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_authors_id_idx" ON "posts_rels" USING btree ("authors_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_tags_id_idx" ON "posts_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_order_idx" ON "_posts_v_version_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_parent_id_idx" ON "_posts_v_version_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_cta_link_cta_link_internal_href_idx" ON "_posts_v_version_ctas" USING btree ("cta_link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_cta_link_cta_link_file_href_idx" ON "_posts_v_version_ctas" USING btree ("cta_link_file_href_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_content_order_idx" ON "_posts_v_version_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_content_parent_id_idx" ON "_posts_v_version_content" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_posts_v_version_content_locales_locale_parent_id_unique" ON "_posts_v_version_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_thumbnail_idx" ON "_posts_v" USING btree ("version_thumbnail_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_cover_image_idx" ON "_posts_v" USING btree ("version_cover_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_authors_id_idx" ON "_posts_v_rels" USING btree ("authors_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_tags_id_idx" ON "_posts_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "authors_image_idx" ON "authors" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "authors_updated_at_idx" ON "authors" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "authors_created_at_idx" ON "authors" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "authors_locales_locale_parent_id_unique" ON "authors_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "tags_updated_at_idx" ON "tags" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tags_created_at_idx" ON "tags" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "tags_locales_locale_parent_id_unique" ON "tags_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "files_updated_at_idx" ON "files" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "files_created_at_idx" ON "files" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "files_filename_idx" ON "files" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_updated_at_idx" ON "images" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_blur_sizes_blur_filename_idx" ON "images" USING btree ("sizes_blur_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_mobile_sizes_mobile_filename_idx" ON "images" USING btree ("sizes_mobile_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_tablet_sizes_tablet_filename_idx" ON "images" USING btree ("sizes_tablet_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_desktop_sizes_desktop_filename_idx" ON "images" USING btree ("sizes_desktop_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_ultrawide_sizes_ultrawide_filename_idx" ON "images" USING btree ("sizes_ultrawide_filename");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_locales_locale_parent_id_unique" ON "images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "videos_updated_at_idx" ON "videos" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_filename_idx" ON "videos" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_options_locales_locale_parent_id_unique" ON "forms_blocks_select_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_locales_locale_parent_id_unique" ON "forms_blocks_select_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_text_locales_locale_parent_id_unique" ON "forms_blocks_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_textarea_locales_locale_parent_id_unique" ON "forms_blocks_textarea_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_authors_id_idx" ON "payload_locked_documents_rels" USING btree ("authors_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_files_id_idx" ON "payload_locked_documents_rels" USING btree ("files_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_images_id_idx" ON "payload_locked_documents_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_order_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_parent_id_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_locale_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_link_link_internal_href_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_link_link_file_href_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_order_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_parent_id_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_locale_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_order_idx" ON "nav_header_flat_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_parent_id_idx" ON "nav_header_flat_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_link_link_internal_href_idx" ON "nav_header_flat_menu" USING btree ("link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_link_link_file_href_idx" ON "nav_header_flat_menu" USING btree ("link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_icon_items_order_idx" ON "nav_header_icon_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_icon_items_parent_id_idx" ON "nav_header_icon_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_order_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_parent_id_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_link_link_internal_href_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_link_link_file_href_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_header_logo_idx" ON "nav" USING btree ("header_logo_id");
  CREATE INDEX IF NOT EXISTS "nav_header_cta_button_cta_link_header_cta_button_cta_link_internal_href_idx" ON "nav" USING btree ("header_cta_button_cta_link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_cta_button_cta_link_header_cta_button_cta_link_file_href_idx" ON "nav" USING btree ("header_cta_button_cta_link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_footer_items_footer_logo_idx" ON "nav" USING btree ("footer_footer_items_footer_logo_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "four_oh_four_locales_locale_parent_id_unique" ON "four_oh_four_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_order_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_parent_id_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_path_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "homepage_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_slug_idx" ON "homepage" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "homepage__status_idx" ON "homepage" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_locales_locale_parent_id_unique" ON "homepage_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_order_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_parent_id_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_path_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_homepage_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version_slug_idx" ON "_homepage_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version__status_idx" ON "_homepage_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_homepage_v_created_at_idx" ON "_homepage_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_homepage_v_updated_at_idx" ON "_homepage_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_homepage_v_snapshot_idx" ON "_homepage_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_homepage_v_published_locale_idx" ON "_homepage_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_latest_idx" ON "_homepage_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_homepage_v_autosave_idx" ON "_homepage_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepage_v_locales_locale_parent_id_unique" ON "_homepage_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_order_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_parent_id_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_path_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "blog_index_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_slug_idx" ON "blog_index" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_index__status_idx" ON "blog_index" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_locales_locale_parent_id_unique" ON "blog_index_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_order_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_parent_id_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_path_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_blog_index_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version_slug_idx" ON "_blog_index_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version__status_idx" ON "_blog_index_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_created_at_idx" ON "_blog_index_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_updated_at_idx" ON "_blog_index_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_snapshot_idx" ON "_blog_index_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_published_locale_idx" ON "_blog_index_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_latest_idx" ON "_blog_index_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_autosave_idx" ON "_blog_index_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blog_index_v_locales_locale_parent_id_unique" ON "_blog_index_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_cta_sections_block" CASCADE;
  DROP TABLE "pages_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "posts_ctas" CASCADE;
  DROP TABLE "posts_content" CASCADE;
  DROP TABLE "posts_content_locales" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_ctas" CASCADE;
  DROP TABLE "_posts_v_version_content" CASCADE;
  DROP TABLE "_posts_v_version_content_locales" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "authors" CASCADE;
  DROP TABLE "authors_locales" CASCADE;
  DROP TABLE "tags" CASCADE;
  DROP TABLE "tags_locales" CASCADE;
  DROP TABLE "files" CASCADE;
  DROP TABLE "images" CASCADE;
  DROP TABLE "images_locales" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "nav_header_collapsible_menu_sections_links" CASCADE;
  DROP TABLE "nav_header_collapsible_menu_sections" CASCADE;
  DROP TABLE "nav_header_flat_menu" CASCADE;
  DROP TABLE "nav_header_icon_items" CASCADE;
  DROP TABLE "nav_footer_footer_items_footer_menu" CASCADE;
  DROP TABLE "nav" CASCADE;
  DROP TABLE "four_oh_four" CASCADE;
  DROP TABLE "four_oh_four_locales" CASCADE;
  DROP TABLE "homepage_blocks_cta_sections_block" CASCADE;
  DROP TABLE "homepage_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "homepage_locales" CASCADE;
  DROP TABLE "_homepage_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_homepage_v" CASCADE;
  DROP TABLE "_homepage_v_locales" CASCADE;
  DROP TABLE "blog_index_blocks_cta_sections_block" CASCADE;
  DROP TABLE "blog_index_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "blog_index" CASCADE;
  DROP TABLE "blog_index_locales" CASCADE;
  DROP TABLE "_blog_index_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_blog_index_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_blog_index_v" CASCADE;
  DROP TABLE "_blog_index_v_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_cta_sections_block_theme";
  DROP TYPE "public"."cw";
  DROP TYPE "public"."t";
  DROP TYPE "public"."b";
  DROP TYPE "public"."enum_pages_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_pages_theme";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_cta_sections_block_theme";
  DROP TYPE "public"."enum__pages_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__pages_v_version_theme";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."undefined_cta_t";
  DROP TYPE "public"."undefined_link_ic";
  DROP TYPE "public"."undefined_link_iw";
  DROP TYPE "public"."card_cta_v";
  DROP TYPE "public"."card_cta_tv";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."iconnavitem_ic";
  DROP TYPE "public"."iconnavitem_iw";
  DROP TYPE "public"."enum_nav_header_banner_background";
  DROP TYPE "public"."undefined_cta_v";
  DROP TYPE "public"."undefined_cta_tv";
  DROP TYPE "public"."enum_homepage_blocks_cta_sections_block_theme";
  DROP TYPE "public"."enum_homepage_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_homepage_theme";
  DROP TYPE "public"."enum_homepage_status";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_sections_block_theme";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__homepage_v_version_theme";
  DROP TYPE "public"."enum__homepage_v_version_status";
  DROP TYPE "public"."enum__homepage_v_published_locale";
  DROP TYPE "public"."enum_blog_index_blocks_cta_sections_block_theme";
  DROP TYPE "public"."enum_blog_index_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_blog_index_theme";
  DROP TYPE "public"."enum_blog_index_status";
  DROP TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_theme";
  DROP TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__blog_index_v_version_theme";
  DROP TYPE "public"."enum__blog_index_v_version_status";
  DROP TYPE "public"."enum__blog_index_v_published_locale";`)
}
