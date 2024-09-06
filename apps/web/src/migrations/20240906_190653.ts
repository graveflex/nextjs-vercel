import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."_locales" AS ENUM('en-US', 'es-US');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."bgColor" AS ENUM('fg', 'neutral', 'blue', 'indigo', 'purple');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."cw" AS ENUM('full', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."t" AS ENUM('9.375rem', '7.5rem', '3.75rem', '2.25rem', '1.125rem', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."b" AS ENUM('9.375rem', '7.5rem', '3.75rem', '2.25rem', '1.125rem', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."undefined_cta_t" AS ENUM('internal', 'external', 'email', 'phone', 'file');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."undefined_link_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."undefined_link_iw" AS ENUM('35', '30', '25', '20');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."undefined_cta_v" AS ENUM('outline', 'solid', 'link');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."undefined_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_PagefbImageB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_PageSHeaderB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_PageSHeaderB_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."card_cta_v" AS ENUM('outline', 'solid', 'link');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."card_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."textimage_cta_v" AS ENUM('outline', 'solid', 'link');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."textimage_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__PagefbImageB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__PageSHeaderB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__PageSHeaderB_v_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_images_additional_props_object_fit" AS ENUM('cover', 'contain', 'fill', 'scale-down');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_images_additional_props_aspect_ratio" AS ENUM('1/1', '3/2', '4/3', '6/7', '16/9', 'initial');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_nav_header_banner_background" AS ENUM('white', 'black', 'gray');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."iconnavitem_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."iconnavitem_iw" AS ENUM('35', '30', '25', '20');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_HomefbImageB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_HomeSHeaderB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_HomeSHeaderB_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_homepage_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__HomefbImageB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__HomeSHeaderB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__HomeSHeaderB_v_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_version_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__homepage_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_BlogfbImageB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_BlogSHeaderB_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_BlogSHeaderB_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_blog_index_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_iframe_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_icon_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_icon_grid_block_layout" AS ENUM('horizontal', 'vertical');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__BlogfbImageB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__BlogSHeaderB_v_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__BlogSHeaderB_v_alignment" AS ENUM('center', 'left', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_gallery_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_video_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_form_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_card_grid_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_markdown_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_markdown_block_max_width" AS ENUM('1440px', '1280px', '992px', '768px', '576px', '320px', 'unset');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_faq_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_faq_block_text_alignment" AS ENUM('left', 'center', 'right');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_text_image_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_text_image_block_layout" AS ENUM('imgRight', 'imgLeft');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_hero_block_block_config_theme" AS ENUM('_', 'light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_hero_block_layout" AS ENUM('contentRight', 'contentLeft', 'contentCenter');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_blocks_hero_block_content_align" AS ENUM('right', 'left', 'center');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_version_theme" AS ENUM('light', 'dark');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum__blog_index_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "pages_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_pages_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "PagefbImageB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_PagefbImageB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "PageSHeaderB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_PageSHeaderB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum_PageSHeaderB_alignment" DEFAULT 'center',
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "pages_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum_pages_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "pages_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum_pages_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "pages_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_pages_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "pages_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_pages_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum_pages_blocks_hero_block_layout",
  	"contentAlign" "enum_pages_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "pages_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "pages_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_pages_v_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__pages_v_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_PagefbImageB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__PagefbImageB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_PageSHeaderB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__PageSHeaderB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum__PageSHeaderB_v_alignment" DEFAULT 'center',
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_pages_v_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum__pages_v_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_pages_v_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum__pages_v_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_pages_v_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__pages_v_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_pages_v_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__pages_v_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum__pages_v_blocks_hero_block_layout",
  	"contentAlign" "enum__pages_v_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_pages_v_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_pages_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "posts_content_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "posts_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_posts_v_version_content_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_posts_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "authors_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "tags_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"image_props_fill" boolean DEFAULT false,
  	"image_props_priority" boolean DEFAULT false,
  	"image_props_quality" numeric DEFAULT 75,
  	"additionalProps_objectFit" "enum_images_additional_props_object_fit" DEFAULT 'cover',
  	"additional_props_is_rounded" boolean DEFAULT false,
  	"additionalProps_aspectRatio" "enum_images_additional_props_aspect_ratio" DEFAULT 'initial',
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "images_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "forms_blocks_select_options_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "forms_blocks_select_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "forms_blocks_text_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "forms_blocks_textarea_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "forms_emails_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"confirmationType" "enum_forms_confirmation_type" DEFAULT 'message',
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "forms_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"header_ctaButton_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"header_cta_button_cta_link_label" varchar,
  	"header_cta_button_cta_link_internal_href_id" integer,
  	"header_cta_button_cta_link_external_href" varchar,
  	"header_cta_button_cta_link_email_href" varchar,
  	"header_cta_button_cta_link_phone_href" varchar,
  	"header_cta_button_cta_link_file_href_id" integer,
  	"header_cta_button_cta_link_new_tab" boolean,
  	"header_ctaButton_cta_link_icon_name" "undefined_link_ic",
  	"header_ctaButton_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"header_cta_button_cta_link_icon_color" varchar,
  	"header_ctaButton_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"header_ctaButton_cta_color" "undefined_cta_tv",
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "four_oh_four_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_homepage_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "HomefbImageB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_HomefbImageB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "HomeSHeaderB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_HomeSHeaderB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum_HomeSHeaderB_alignment" DEFAULT 'center',
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum_homepage_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum_homepage_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_homepage_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_homepage_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum_homepage_blocks_hero_block_layout",
  	"contentAlign" "enum_homepage_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "homepage_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "homepage_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__homepage_v_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_HomefbImageB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__HomefbImageB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_HomeSHeaderB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__HomeSHeaderB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum__HomeSHeaderB_v_alignment" DEFAULT 'center',
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum__homepage_v_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum__homepage_v_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__homepage_v_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__homepage_v_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum__homepage_v_blocks_hero_block_layout",
  	"contentAlign" "enum__homepage_v_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_locales" (
  	"version_page_title" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_homepage_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_blog_index_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "BlogfbImageB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_BlogfbImageB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "BlogSHeaderB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_BlogSHeaderB_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum_BlogSHeaderB_alignment" DEFAULT 'center',
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum_blog_index_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum_blog_index_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum_blog_index_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum_blog_index_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum_blog_index_blocks_hero_block_layout",
  	"contentAlign" "enum_blog_index_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "blog_index_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "blog_index_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_iframe_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_iframe_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"iframe" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_iframe_block_locales" (
  	"title" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_iframe_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_icon_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__blog_index_v_blocks_icon_grid_block_layout" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_BlogfbImageB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__BlogfbImageB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"mobile_image_id" integer,
  	"is_background" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_BlogSHeaderB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__BlogSHeaderB_v_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"eyebrow" varchar,
  	"content" jsonb,
  	"alignment" "enum__BlogSHeaderB_v_alignment" DEFAULT 'center',
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_gallery_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_video_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"video_id" integer,
  	"video_u_r_l" varchar,
  	"embed_u_r_l" varchar,
  	"caption" varchar,
  	"full_bleed_mobile" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_form_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"form_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_form_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_form_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_image_id" integer,
  	"card_eyebrow" varchar,
  	"card_headline" varchar,
  	"card_sub_head" varchar,
  	"card_date" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_card_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_card_grid_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_markdown_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_markdown_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_markdown_block_locales" (
  	"content" jsonb,
  	"maxWidth" "enum__blog_index_v_blocks_markdown_block_max_width",
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_markdown_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_faq_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_faq_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"textAlignment" "enum__blog_index_v_blocks_faq_block_text_alignment" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_faq_block_locales" (
  	"header" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_faq_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
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
  	"cta_variant" "textimage_cta_v" DEFAULT 'solid',
  	"cta_color" "textimage_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_text_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_text_image_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"layout" "enum__blog_index_v_blocks_text_image_block_layout",
  	"image_id" integer,
  	"video_id" integer,
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_text_image_block_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_text_image_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"blockConfig_theme" "enum__blog_index_v_blocks_hero_block_block_config_theme",
  	"blockConfig_backgroundColor" "bgColor",
  	"block_config_background_image_id" integer,
  	"block_config_hidden" boolean DEFAULT false,
  	"blockConfig_contentWidth" "cw" DEFAULT 'xl',
  	"blockConfig_p_xs_paddingTop" "t",
  	"blockConfig_p_xs_paddingBottom" "b",
  	"blockConfig_p_md_paddingTop" "t",
  	"blockConfig_p_md_paddingBottom" "b",
  	"blockConfig_p_lg_paddingTop" "t",
  	"blockConfig_p_lg_paddingBottom" "b",
  	"blockConfig_p_xl_paddingTop" "t",
  	"blockConfig_p_xl_paddingBottom" "b",
  	"image_id" integer,
  	"layout" "enum__blog_index_v_blocks_hero_block_layout",
  	"contentAlign" "enum__blog_index_v_blocks_hero_block_content_align",
  	"form_textinput_name" varchar,
  	"form_textinput_placeholder" varchar,
  	"form_textinput_help_text" varchar,
  	"form_textinput_label" varchar,
  	"form_textinput_required" boolean DEFAULT false,
  	"form_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"form_cta_link_label" varchar,
  	"form_cta_link_internal_href_id" integer,
  	"form_cta_link_external_href" varchar,
  	"form_cta_link_email_href" varchar,
  	"form_cta_link_phone_href" varchar,
  	"form_cta_link_file_href_id" integer,
  	"form_cta_link_new_tab" boolean,
  	"form_cta_link_icon_name" "undefined_link_ic",
  	"form_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"form_cta_link_icon_color" varchar,
  	"form_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"form_cta_color" "undefined_cta_tv",
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
  	"cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"cta_color" "undefined_cta_tv",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_hero_block_locales" (
  	"eyebrow" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_blocks_hero_block_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
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
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_locales" (
  	"version_page_title" varchar DEFAULT 'Blog Index',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "_blog_index_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_iframe_block" ADD CONSTRAINT "pages_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_iframe_block" ADD CONSTRAINT "pages_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_iframe_block_locales" ADD CONSTRAINT "pages_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_grid_block_items" ADD CONSTRAINT "pages_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_grid_block" ADD CONSTRAINT "pages_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_grid_block" ADD CONSTRAINT "pages_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PagefbImageB" ADD CONSTRAINT "PagefbImageB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PagefbImageB" ADD CONSTRAINT "PagefbImageB_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PagefbImageB" ADD CONSTRAINT "PagefbImageB_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PagefbImageB" ADD CONSTRAINT "PagefbImageB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PageSHeaderB" ADD CONSTRAINT "PageSHeaderB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PageSHeaderB" ADD CONSTRAINT "PageSHeaderB_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PageSHeaderB" ADD CONSTRAINT "PageSHeaderB_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "PageSHeaderB" ADD CONSTRAINT "PageSHeaderB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_grid_block" ADD CONSTRAINT "pages_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_video_block" ADD CONSTRAINT "pages_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_video_block" ADD CONSTRAINT "pages_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_video_block" ADD CONSTRAINT "pages_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_block_locales" ADD CONSTRAINT "pages_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_grid_block_cards" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_grid_block_cards" ADD CONSTRAINT "pages_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_grid_block" ADD CONSTRAINT "pages_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_card_grid_block" ADD CONSTRAINT "pages_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_markdown_block" ADD CONSTRAINT "pages_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_markdown_block" ADD CONSTRAINT "pages_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_markdown_block_locales" ADD CONSTRAINT "pages_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block_items" ADD CONSTRAINT "pages_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block_locales" ADD CONSTRAINT "pages_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block_items" ADD CONSTRAINT "pages_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block_items" ADD CONSTRAINT "pages_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block_items" ADD CONSTRAINT "pages_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block" ADD CONSTRAINT "pages_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image_block_locales" ADD CONSTRAINT "pages_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block" ADD CONSTRAINT "pages_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_block_locales" ADD CONSTRAINT "pages_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "_pages_v_blocks_iframe_block" ADD CONSTRAINT "_pages_v_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_iframe_block" ADD CONSTRAINT "_pages_v_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_iframe_block_locales" ADD CONSTRAINT "_pages_v_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_icon_grid_block" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_icon_grid_block" ADD CONSTRAINT "_pages_v_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PagefbImageB_v" ADD CONSTRAINT "_PagefbImageB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PagefbImageB_v" ADD CONSTRAINT "_PagefbImageB_v_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PagefbImageB_v" ADD CONSTRAINT "_PagefbImageB_v_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PagefbImageB_v" ADD CONSTRAINT "_PagefbImageB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PageSHeaderB_v" ADD CONSTRAINT "_PageSHeaderB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PageSHeaderB_v" ADD CONSTRAINT "_PageSHeaderB_v_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PageSHeaderB_v" ADD CONSTRAINT "_PageSHeaderB_v_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_PageSHeaderB_v" ADD CONSTRAINT "_PageSHeaderB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_grid_block" ADD CONSTRAINT "_pages_v_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_video_block" ADD CONSTRAINT "_pages_v_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_video_block" ADD CONSTRAINT "_pages_v_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_video_block" ADD CONSTRAINT "_pages_v_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_block_locales" ADD CONSTRAINT "_pages_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_grid_block" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_card_grid_block" ADD CONSTRAINT "_pages_v_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_markdown_block" ADD CONSTRAINT "_pages_v_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_markdown_block" ADD CONSTRAINT "_pages_v_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_markdown_block_locales" ADD CONSTRAINT "_pages_v_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block_items" ADD CONSTRAINT "_pages_v_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block_locales" ADD CONSTRAINT "_pages_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block_items" ADD CONSTRAINT "_pages_v_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block" ADD CONSTRAINT "_pages_v_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image_block_locales" ADD CONSTRAINT "_pages_v_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block" ADD CONSTRAINT "_pages_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_block_locales" ADD CONSTRAINT "_pages_v_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "homepage_blocks_iframe_block" ADD CONSTRAINT "homepage_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_iframe_block" ADD CONSTRAINT "homepage_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_iframe_block_locales" ADD CONSTRAINT "homepage_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block_items" ADD CONSTRAINT "homepage_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block" ADD CONSTRAINT "homepage_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_grid_block" ADD CONSTRAINT "homepage_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomefbImageB" ADD CONSTRAINT "HomefbImageB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomefbImageB" ADD CONSTRAINT "HomefbImageB_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomefbImageB" ADD CONSTRAINT "HomefbImageB_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomefbImageB" ADD CONSTRAINT "HomefbImageB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomeSHeaderB" ADD CONSTRAINT "HomeSHeaderB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomeSHeaderB" ADD CONSTRAINT "HomeSHeaderB_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomeSHeaderB" ADD CONSTRAINT "HomeSHeaderB_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "HomeSHeaderB" ADD CONSTRAINT "HomeSHeaderB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_gallery_grid_block" ADD CONSTRAINT "homepage_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_video_block" ADD CONSTRAINT "homepage_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_video_block" ADD CONSTRAINT "homepage_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_video_block" ADD CONSTRAINT "homepage_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block" ADD CONSTRAINT "homepage_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block" ADD CONSTRAINT "homepage_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block" ADD CONSTRAINT "homepage_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_form_block_locales" ADD CONSTRAINT "homepage_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block_cards" ADD CONSTRAINT "homepage_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block" ADD CONSTRAINT "homepage_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_card_grid_block" ADD CONSTRAINT "homepage_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_markdown_block" ADD CONSTRAINT "homepage_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_markdown_block" ADD CONSTRAINT "homepage_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_markdown_block_locales" ADD CONSTRAINT "homepage_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block_items" ADD CONSTRAINT "homepage_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block" ADD CONSTRAINT "homepage_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block" ADD CONSTRAINT "homepage_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_faq_block_locales" ADD CONSTRAINT "homepage_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_items" ADD CONSTRAINT "homepage_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_items" ADD CONSTRAINT "homepage_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_items" ADD CONSTRAINT "homepage_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block" ADD CONSTRAINT "homepage_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_text_image_block_locales" ADD CONSTRAINT "homepage_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block" ADD CONSTRAINT "homepage_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_hero_block_locales" ADD CONSTRAINT "homepage_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_locales" ADD CONSTRAINT "homepage_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_iframe_block" ADD CONSTRAINT "_homepage_v_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_iframe_block" ADD CONSTRAINT "_homepage_v_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_iframe_block_locales" ADD CONSTRAINT "_homepage_v_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_icon_grid_block" ADD CONSTRAINT "_homepage_v_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomefbImageB_v" ADD CONSTRAINT "_HomefbImageB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomefbImageB_v" ADD CONSTRAINT "_HomefbImageB_v_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomefbImageB_v" ADD CONSTRAINT "_HomefbImageB_v_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomefbImageB_v" ADD CONSTRAINT "_HomefbImageB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomeSHeaderB_v" ADD CONSTRAINT "_HomeSHeaderB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomeSHeaderB_v" ADD CONSTRAINT "_HomeSHeaderB_v_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomeSHeaderB_v" ADD CONSTRAINT "_HomeSHeaderB_v_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_HomeSHeaderB_v" ADD CONSTRAINT "_HomeSHeaderB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_gallery_grid_block" ADD CONSTRAINT "_homepage_v_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_video_block" ADD CONSTRAINT "_homepage_v_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_video_block" ADD CONSTRAINT "_homepage_v_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_video_block" ADD CONSTRAINT "_homepage_v_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block" ADD CONSTRAINT "_homepage_v_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block" ADD CONSTRAINT "_homepage_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block" ADD CONSTRAINT "_homepage_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_form_block_locales" ADD CONSTRAINT "_homepage_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_card_grid_block" ADD CONSTRAINT "_homepage_v_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_markdown_block" ADD CONSTRAINT "_homepage_v_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_markdown_block" ADD CONSTRAINT "_homepage_v_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_markdown_block_locales" ADD CONSTRAINT "_homepage_v_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block_items" ADD CONSTRAINT "_homepage_v_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block" ADD CONSTRAINT "_homepage_v_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block" ADD CONSTRAINT "_homepage_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_faq_block_locales" ADD CONSTRAINT "_homepage_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_items" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_items" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_items" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_text_image_block_locales" ADD CONSTRAINT "_homepage_v_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block" ADD CONSTRAINT "_homepage_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_hero_block_locales" ADD CONSTRAINT "_homepage_v_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_locales" ADD CONSTRAINT "_homepage_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_iframe_block" ADD CONSTRAINT "blog_index_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_iframe_block" ADD CONSTRAINT "blog_index_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_iframe_block_locales" ADD CONSTRAINT "blog_index_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block_items" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_icon_grid_block" ADD CONSTRAINT "blog_index_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogfbImageB" ADD CONSTRAINT "BlogfbImageB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogfbImageB" ADD CONSTRAINT "BlogfbImageB_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogfbImageB" ADD CONSTRAINT "BlogfbImageB_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogfbImageB" ADD CONSTRAINT "BlogfbImageB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogSHeaderB" ADD CONSTRAINT "BlogSHeaderB_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogSHeaderB" ADD CONSTRAINT "BlogSHeaderB_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogSHeaderB" ADD CONSTRAINT "BlogSHeaderB_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "BlogSHeaderB" ADD CONSTRAINT "BlogSHeaderB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_gallery_grid_block" ADD CONSTRAINT "blog_index_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_video_block" ADD CONSTRAINT "blog_index_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_video_block" ADD CONSTRAINT "blog_index_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_video_block" ADD CONSTRAINT "blog_index_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block" ADD CONSTRAINT "blog_index_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block" ADD CONSTRAINT "blog_index_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block" ADD CONSTRAINT "blog_index_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_form_block_locales" ADD CONSTRAINT "blog_index_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block_cards" ADD CONSTRAINT "blog_index_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block" ADD CONSTRAINT "blog_index_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_card_grid_block" ADD CONSTRAINT "blog_index_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_markdown_block" ADD CONSTRAINT "blog_index_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_markdown_block" ADD CONSTRAINT "blog_index_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_markdown_block_locales" ADD CONSTRAINT "blog_index_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block_items" ADD CONSTRAINT "blog_index_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block" ADD CONSTRAINT "blog_index_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block" ADD CONSTRAINT "blog_index_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_faq_block_locales" ADD CONSTRAINT "blog_index_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_items" ADD CONSTRAINT "blog_index_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_items" ADD CONSTRAINT "blog_index_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_items" ADD CONSTRAINT "blog_index_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block" ADD CONSTRAINT "blog_index_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_text_image_block_locales" ADD CONSTRAINT "blog_index_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block" ADD CONSTRAINT "blog_index_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_hero_block_locales" ADD CONSTRAINT "blog_index_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_locales" ADD CONSTRAINT "blog_index_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_iframe_block" ADD CONSTRAINT "_blog_index_v_blocks_iframe_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_iframe_block" ADD CONSTRAINT "_blog_index_v_blocks_iframe_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_iframe_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_iframe_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_iframe_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block_items" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_icon_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_icon_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_icon_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogfbImageB_v" ADD CONSTRAINT "_BlogfbImageB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogfbImageB_v" ADD CONSTRAINT "_BlogfbImageB_v_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogfbImageB_v" ADD CONSTRAINT "_BlogfbImageB_v_mobile_image_id_images_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogfbImageB_v" ADD CONSTRAINT "_BlogfbImageB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogSHeaderB_v" ADD CONSTRAINT "_BlogSHeaderB_v_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogSHeaderB_v" ADD CONSTRAINT "_BlogSHeaderB_v_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogSHeaderB_v" ADD CONSTRAINT "_BlogSHeaderB_v_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_BlogSHeaderB_v" ADD CONSTRAINT "_BlogSHeaderB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_gallery_images_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block_gallery_images" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_gallery_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_gallery_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_gallery_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_video_block" ADD CONSTRAINT "_blog_index_v_blocks_video_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_video_block" ADD CONSTRAINT "_blog_index_v_blocks_video_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_video_block" ADD CONSTRAINT "_blog_index_v_blocks_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block" ADD CONSTRAINT "_blog_index_v_blocks_form_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block" ADD CONSTRAINT "_blog_index_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block" ADD CONSTRAINT "_blog_index_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_form_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_form_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_form_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_card_grid_block_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_card_image_id_images_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block_cards" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_card_grid_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_card_grid_block" ADD CONSTRAINT "_blog_index_v_blocks_card_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_markdown_block" ADD CONSTRAINT "_blog_index_v_blocks_markdown_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_markdown_block" ADD CONSTRAINT "_blog_index_v_blocks_markdown_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_markdown_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_markdown_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_markdown_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block_items" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_faq_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_items" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_items_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_items" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_items_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_items" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_video_id_videos_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_text_image_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_text_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_text_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_block_config_background_image_id_images_id_fk" FOREIGN KEY ("block_config_background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_form_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("form_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_form_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("form_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_hero_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_hero_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_hero_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_locales" ADD CONSTRAINT "_blog_index_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_iframe_block_order_idx" ON "pages_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_iframe_block_parent_id_idx" ON "pages_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_iframe_block_path_idx" ON "pages_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_items_order_idx" ON "pages_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_items_parent_id_idx" ON "pages_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_items_locale_idx" ON "pages_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_order_idx" ON "pages_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_parent_id_idx" ON "pages_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_grid_block_path_idx" ON "pages_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "PagefbImageB_order_idx" ON "PagefbImageB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "PagefbImageB_parent_id_idx" ON "PagefbImageB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "PagefbImageB_path_idx" ON "PagefbImageB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "PageSHeaderB_order_idx" ON "PageSHeaderB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "PageSHeaderB_parent_id_idx" ON "PageSHeaderB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "PageSHeaderB_path_idx" ON "PageSHeaderB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images_order_idx" ON "pages_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "pages_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_order_idx" ON "pages_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_parent_id_idx" ON "pages_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_grid_block_path_idx" ON "pages_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_video_block_order_idx" ON "pages_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_video_block_parent_id_idx" ON "pages_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_video_block_path_idx" ON "pages_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_order_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "pages_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_order_idx" ON "pages_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_cards_parent_id_idx" ON "pages_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_order_idx" ON "pages_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_parent_id_idx" ON "pages_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_card_grid_block_path_idx" ON "pages_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_order_idx" ON "pages_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_parent_id_idx" ON "pages_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_markdown_block_path_idx" ON "pages_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_order_idx" ON "pages_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_parent_id_idx" ON "pages_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_items_locale_idx" ON "pages_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_order_idx" ON "pages_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_parent_id_idx" ON "pages_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_path_idx" ON "pages_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_order_idx" ON "pages_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_parent_id_idx" ON "pages_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_items_locale_idx" ON "pages_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_order_idx" ON "pages_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_parent_id_idx" ON "pages_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_block_path_idx" ON "pages_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_order_idx" ON "pages_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_parent_id_idx" ON "pages_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_block_path_idx" ON "pages_blocks_hero_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_iframe_block_order_idx" ON "_pages_v_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_iframe_block_parent_id_idx" ON "_pages_v_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_iframe_block_path_idx" ON "_pages_v_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items_order_idx" ON "_pages_v_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items_parent_id_idx" ON "_pages_v_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_items_locale_idx" ON "_pages_v_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_order_idx" ON "_pages_v_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_parent_id_idx" ON "_pages_v_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_icon_grid_block_path_idx" ON "_pages_v_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_PagefbImageB_v_order_idx" ON "_PagefbImageB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_PagefbImageB_v_parent_id_idx" ON "_PagefbImageB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_PagefbImageB_v_path_idx" ON "_PagefbImageB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_PageSHeaderB_v_order_idx" ON "_PageSHeaderB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_PageSHeaderB_v_parent_id_idx" ON "_PageSHeaderB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_PageSHeaderB_v_path_idx" ON "_PageSHeaderB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images_order_idx" ON "_pages_v_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_order_idx" ON "_pages_v_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_parent_id_idx" ON "_pages_v_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_grid_block_path_idx" ON "_pages_v_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_block_order_idx" ON "_pages_v_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_block_parent_id_idx" ON "_pages_v_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_video_block_path_idx" ON "_pages_v_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_order_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "_pages_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_order_idx" ON "_pages_v_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_cards_parent_id_idx" ON "_pages_v_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_order_idx" ON "_pages_v_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_parent_id_idx" ON "_pages_v_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_card_grid_block_path_idx" ON "_pages_v_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_order_idx" ON "_pages_v_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_parent_id_idx" ON "_pages_v_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_markdown_block_path_idx" ON "_pages_v_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_order_idx" ON "_pages_v_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_parent_id_idx" ON "_pages_v_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_items_locale_idx" ON "_pages_v_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_order_idx" ON "_pages_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_parent_id_idx" ON "_pages_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_path_idx" ON "_pages_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_order_idx" ON "_pages_v_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_parent_id_idx" ON "_pages_v_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_items_locale_idx" ON "_pages_v_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_order_idx" ON "_pages_v_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_parent_id_idx" ON "_pages_v_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_block_path_idx" ON "_pages_v_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_order_idx" ON "_pages_v_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_parent_id_idx" ON "_pages_v_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_block_path_idx" ON "_pages_v_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "posts_ctas_order_idx" ON "posts_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_ctas_parent_id_idx" ON "posts_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_content_order_idx" ON "posts_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_content_parent_id_idx" ON "posts_content" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_order_idx" ON "_posts_v_version_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_parent_id_idx" ON "_posts_v_version_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_content_order_idx" ON "_posts_v_version_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_content_parent_id_idx" ON "_posts_v_version_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "authors_created_at_idx" ON "authors" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "tags_created_at_idx" ON "tags" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "files_created_at_idx" ON "files" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "files_filename_idx" ON "files" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_mobile_sizes_mobile_filename_idx" ON "images" USING btree ("sizes_mobile_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_tablet_sizes_tablet_filename_idx" ON "images" USING btree ("sizes_tablet_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_desktop_sizes_desktop_filename_idx" ON "images" USING btree ("sizes_desktop_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_ultrawide_sizes_ultrawide_filename_idx" ON "images" USING btree ("sizes_ultrawide_filename");
  CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_filename_idx" ON "videos" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_order_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_parent_id_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_locale_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_order_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_parent_id_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_locale_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_order_idx" ON "nav_header_flat_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_parent_id_idx" ON "nav_header_flat_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_icon_items_order_idx" ON "nav_header_icon_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_icon_items_parent_id_idx" ON "nav_header_icon_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_order_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_parent_id_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_iframe_block_order_idx" ON "homepage_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_iframe_block_parent_id_idx" ON "homepage_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_iframe_block_path_idx" ON "homepage_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_items_order_idx" ON "homepage_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_items_parent_id_idx" ON "homepage_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_items_locale_idx" ON "homepage_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_order_idx" ON "homepage_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_parent_id_idx" ON "homepage_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_grid_block_path_idx" ON "homepage_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "HomefbImageB_order_idx" ON "HomefbImageB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "HomefbImageB_parent_id_idx" ON "HomefbImageB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "HomefbImageB_path_idx" ON "HomefbImageB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "HomeSHeaderB_order_idx" ON "HomeSHeaderB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "HomeSHeaderB_parent_id_idx" ON "HomeSHeaderB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "HomeSHeaderB_path_idx" ON "HomeSHeaderB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_gallery_images_order_idx" ON "homepage_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "homepage_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_order_idx" ON "homepage_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_parent_id_idx" ON "homepage_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_gallery_grid_block_path_idx" ON "homepage_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_video_block_order_idx" ON "homepage_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_video_block_parent_id_idx" ON "homepage_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_video_block_path_idx" ON "homepage_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_form_block_order_idx" ON "homepage_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_form_block_parent_id_idx" ON "homepage_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_form_block_path_idx" ON "homepage_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas_order_idx" ON "homepage_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "homepage_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "homepage_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_order_idx" ON "homepage_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_cards_parent_id_idx" ON "homepage_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_order_idx" ON "homepage_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_parent_id_idx" ON "homepage_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_card_grid_block_path_idx" ON "homepage_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_markdown_block_order_idx" ON "homepage_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_markdown_block_parent_id_idx" ON "homepage_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_markdown_block_path_idx" ON "homepage_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_items_order_idx" ON "homepage_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_items_parent_id_idx" ON "homepage_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_items_locale_idx" ON "homepage_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_order_idx" ON "homepage_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_parent_id_idx" ON "homepage_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_faq_block_path_idx" ON "homepage_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_items_order_idx" ON "homepage_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_items_parent_id_idx" ON "homepage_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_items_locale_idx" ON "homepage_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_order_idx" ON "homepage_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_parent_id_idx" ON "homepage_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_text_image_block_path_idx" ON "homepage_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_hero_block_order_idx" ON "homepage_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_hero_block_parent_id_idx" ON "homepage_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_hero_block_path_idx" ON "homepage_blocks_hero_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_slug_idx" ON "homepage" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "homepage__status_idx" ON "homepage" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_iframe_block_order_idx" ON "_homepage_v_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_iframe_block_parent_id_idx" ON "_homepage_v_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_iframe_block_path_idx" ON "_homepage_v_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items_order_idx" ON "_homepage_v_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items_parent_id_idx" ON "_homepage_v_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_items_locale_idx" ON "_homepage_v_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_order_idx" ON "_homepage_v_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_parent_id_idx" ON "_homepage_v_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_icon_grid_block_path_idx" ON "_homepage_v_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_HomefbImageB_v_order_idx" ON "_HomefbImageB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_HomefbImageB_v_parent_id_idx" ON "_HomefbImageB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_HomefbImageB_v_path_idx" ON "_HomefbImageB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_HomeSHeaderB_v_order_idx" ON "_HomeSHeaderB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_HomeSHeaderB_v_parent_id_idx" ON "_HomeSHeaderB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_HomeSHeaderB_v_path_idx" ON "_HomeSHeaderB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_gallery_images_order_idx" ON "_homepage_v_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "_homepage_v_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_order_idx" ON "_homepage_v_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_parent_id_idx" ON "_homepage_v_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_gallery_grid_block_path_idx" ON "_homepage_v_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_video_block_order_idx" ON "_homepage_v_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_video_block_parent_id_idx" ON "_homepage_v_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_video_block_path_idx" ON "_homepage_v_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_form_block_order_idx" ON "_homepage_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_form_block_parent_id_idx" ON "_homepage_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_form_block_path_idx" ON "_homepage_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas_order_idx" ON "_homepage_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "_homepage_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "_homepage_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_order_idx" ON "_homepage_v_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_cards_parent_id_idx" ON "_homepage_v_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_order_idx" ON "_homepage_v_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_parent_id_idx" ON "_homepage_v_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_card_grid_block_path_idx" ON "_homepage_v_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_markdown_block_order_idx" ON "_homepage_v_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_markdown_block_parent_id_idx" ON "_homepage_v_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_markdown_block_path_idx" ON "_homepage_v_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_items_order_idx" ON "_homepage_v_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_items_parent_id_idx" ON "_homepage_v_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_items_locale_idx" ON "_homepage_v_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_order_idx" ON "_homepage_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_parent_id_idx" ON "_homepage_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_faq_block_path_idx" ON "_homepage_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_items_order_idx" ON "_homepage_v_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_items_parent_id_idx" ON "_homepage_v_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_items_locale_idx" ON "_homepage_v_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_order_idx" ON "_homepage_v_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_parent_id_idx" ON "_homepage_v_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_text_image_block_path_idx" ON "_homepage_v_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_hero_block_order_idx" ON "_homepage_v_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_hero_block_parent_id_idx" ON "_homepage_v_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_hero_block_path_idx" ON "_homepage_v_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version_slug_idx" ON "_homepage_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version__status_idx" ON "_homepage_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_homepage_v_latest_idx" ON "_homepage_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_homepage_v_autosave_idx" ON "_homepage_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_iframe_block_order_idx" ON "blog_index_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_iframe_block_parent_id_idx" ON "blog_index_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_iframe_block_path_idx" ON "blog_index_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_items_order_idx" ON "blog_index_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_items_parent_id_idx" ON "blog_index_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_items_locale_idx" ON "blog_index_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_order_idx" ON "blog_index_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_parent_id_idx" ON "blog_index_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_icon_grid_block_path_idx" ON "blog_index_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "BlogfbImageB_order_idx" ON "BlogfbImageB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "BlogfbImageB_parent_id_idx" ON "BlogfbImageB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "BlogfbImageB_path_idx" ON "BlogfbImageB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "BlogSHeaderB_order_idx" ON "BlogSHeaderB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "BlogSHeaderB_parent_id_idx" ON "BlogSHeaderB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "BlogSHeaderB_path_idx" ON "BlogSHeaderB" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_gallery_images_order_idx" ON "blog_index_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "blog_index_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_order_idx" ON "blog_index_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_parent_id_idx" ON "blog_index_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_gallery_grid_block_path_idx" ON "blog_index_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_video_block_order_idx" ON "blog_index_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_video_block_parent_id_idx" ON "blog_index_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_video_block_path_idx" ON "blog_index_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_form_block_order_idx" ON "blog_index_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_form_block_parent_id_idx" ON "blog_index_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_form_block_path_idx" ON "blog_index_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas_order_idx" ON "blog_index_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "blog_index_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "blog_index_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_order_idx" ON "blog_index_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_cards_parent_id_idx" ON "blog_index_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_order_idx" ON "blog_index_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_parent_id_idx" ON "blog_index_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_card_grid_block_path_idx" ON "blog_index_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_markdown_block_order_idx" ON "blog_index_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_markdown_block_parent_id_idx" ON "blog_index_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_markdown_block_path_idx" ON "blog_index_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_items_order_idx" ON "blog_index_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_items_parent_id_idx" ON "blog_index_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_items_locale_idx" ON "blog_index_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_order_idx" ON "blog_index_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_parent_id_idx" ON "blog_index_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_faq_block_path_idx" ON "blog_index_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_items_order_idx" ON "blog_index_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_items_parent_id_idx" ON "blog_index_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_items_locale_idx" ON "blog_index_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_order_idx" ON "blog_index_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_parent_id_idx" ON "blog_index_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_text_image_block_path_idx" ON "blog_index_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_hero_block_order_idx" ON "blog_index_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_hero_block_parent_id_idx" ON "blog_index_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_hero_block_path_idx" ON "blog_index_blocks_hero_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_slug_idx" ON "blog_index" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_index__status_idx" ON "blog_index" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_iframe_block_order_idx" ON "_blog_index_v_blocks_iframe_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_iframe_block_parent_id_idx" ON "_blog_index_v_blocks_iframe_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_iframe_block_path_idx" ON "_blog_index_v_blocks_iframe_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items_order_idx" ON "_blog_index_v_blocks_icon_grid_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items_parent_id_idx" ON "_blog_index_v_blocks_icon_grid_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_items_locale_idx" ON "_blog_index_v_blocks_icon_grid_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_order_idx" ON "_blog_index_v_blocks_icon_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_parent_id_idx" ON "_blog_index_v_blocks_icon_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_icon_grid_block_path_idx" ON "_blog_index_v_blocks_icon_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_BlogfbImageB_v_order_idx" ON "_BlogfbImageB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_BlogfbImageB_v_parent_id_idx" ON "_BlogfbImageB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_BlogfbImageB_v_path_idx" ON "_BlogfbImageB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_BlogSHeaderB_v_order_idx" ON "_BlogSHeaderB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_BlogSHeaderB_v_parent_id_idx" ON "_BlogSHeaderB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_BlogSHeaderB_v_path_idx" ON "_BlogSHeaderB_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_gallery_images_order_idx" ON "_blog_index_v_blocks_gallery_grid_block_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_gallery_images_parent_id_idx" ON "_blog_index_v_blocks_gallery_grid_block_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_order_idx" ON "_blog_index_v_blocks_gallery_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_parent_id_idx" ON "_blog_index_v_blocks_gallery_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_gallery_grid_block_path_idx" ON "_blog_index_v_blocks_gallery_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_video_block_order_idx" ON "_blog_index_v_blocks_video_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_video_block_parent_id_idx" ON "_blog_index_v_blocks_video_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_video_block_path_idx" ON "_blog_index_v_blocks_video_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_form_block_order_idx" ON "_blog_index_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_form_block_parent_id_idx" ON "_blog_index_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_form_block_path_idx" ON "_blog_index_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas_order_idx" ON "_blog_index_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas_parent_id_idx" ON "_blog_index_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_card_ctas_locale_idx" ON "_blog_index_v_blocks_card_grid_block_cards_card_ctas" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_order_idx" ON "_blog_index_v_blocks_card_grid_block_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_cards_parent_id_idx" ON "_blog_index_v_blocks_card_grid_block_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_order_idx" ON "_blog_index_v_blocks_card_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_parent_id_idx" ON "_blog_index_v_blocks_card_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_card_grid_block_path_idx" ON "_blog_index_v_blocks_card_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_markdown_block_order_idx" ON "_blog_index_v_blocks_markdown_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_markdown_block_parent_id_idx" ON "_blog_index_v_blocks_markdown_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_markdown_block_path_idx" ON "_blog_index_v_blocks_markdown_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_items_order_idx" ON "_blog_index_v_blocks_faq_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_items_parent_id_idx" ON "_blog_index_v_blocks_faq_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_items_locale_idx" ON "_blog_index_v_blocks_faq_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_order_idx" ON "_blog_index_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_parent_id_idx" ON "_blog_index_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_faq_block_path_idx" ON "_blog_index_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items_order_idx" ON "_blog_index_v_blocks_text_image_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items_parent_id_idx" ON "_blog_index_v_blocks_text_image_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_items_locale_idx" ON "_blog_index_v_blocks_text_image_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_order_idx" ON "_blog_index_v_blocks_text_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_parent_id_idx" ON "_blog_index_v_blocks_text_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_text_image_block_path_idx" ON "_blog_index_v_blocks_text_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_hero_block_order_idx" ON "_blog_index_v_blocks_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_hero_block_parent_id_idx" ON "_blog_index_v_blocks_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_hero_block_path_idx" ON "_blog_index_v_blocks_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version_slug_idx" ON "_blog_index_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version__status_idx" ON "_blog_index_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_latest_idx" ON "_blog_index_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_autosave_idx" ON "_blog_index_v" USING btree ("autosave");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "pages_blocks_iframe_block";
  DROP TABLE "pages_blocks_iframe_block_locales";
  DROP TABLE "pages_blocks_icon_grid_block_items";
  DROP TABLE "pages_blocks_icon_grid_block";
  DROP TABLE "PagefbImageB";
  DROP TABLE "PageSHeaderB";
  DROP TABLE "pages_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "pages_blocks_gallery_grid_block";
  DROP TABLE "pages_blocks_video_block";
  DROP TABLE "pages_blocks_form_block";
  DROP TABLE "pages_blocks_form_block_locales";
  DROP TABLE "pages_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "pages_blocks_card_grid_block_cards";
  DROP TABLE "pages_blocks_card_grid_block";
  DROP TABLE "pages_blocks_markdown_block";
  DROP TABLE "pages_blocks_markdown_block_locales";
  DROP TABLE "pages_blocks_faq_block_items";
  DROP TABLE "pages_blocks_faq_block";
  DROP TABLE "pages_blocks_faq_block_locales";
  DROP TABLE "pages_blocks_text_image_block_items";
  DROP TABLE "pages_blocks_text_image_block";
  DROP TABLE "pages_blocks_text_image_block_locales";
  DROP TABLE "pages_blocks_hero_block";
  DROP TABLE "pages_blocks_hero_block_locales";
  DROP TABLE "pages";
  DROP TABLE "pages_locales";
  DROP TABLE "_pages_v_blocks_iframe_block";
  DROP TABLE "_pages_v_blocks_iframe_block_locales";
  DROP TABLE "_pages_v_blocks_icon_grid_block_items";
  DROP TABLE "_pages_v_blocks_icon_grid_block";
  DROP TABLE "_PagefbImageB_v";
  DROP TABLE "_PageSHeaderB_v";
  DROP TABLE "_pages_v_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "_pages_v_blocks_gallery_grid_block";
  DROP TABLE "_pages_v_blocks_video_block";
  DROP TABLE "_pages_v_blocks_form_block";
  DROP TABLE "_pages_v_blocks_form_block_locales";
  DROP TABLE "_pages_v_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "_pages_v_blocks_card_grid_block_cards";
  DROP TABLE "_pages_v_blocks_card_grid_block";
  DROP TABLE "_pages_v_blocks_markdown_block";
  DROP TABLE "_pages_v_blocks_markdown_block_locales";
  DROP TABLE "_pages_v_blocks_faq_block_items";
  DROP TABLE "_pages_v_blocks_faq_block";
  DROP TABLE "_pages_v_blocks_faq_block_locales";
  DROP TABLE "_pages_v_blocks_text_image_block_items";
  DROP TABLE "_pages_v_blocks_text_image_block";
  DROP TABLE "_pages_v_blocks_text_image_block_locales";
  DROP TABLE "_pages_v_blocks_hero_block";
  DROP TABLE "_pages_v_blocks_hero_block_locales";
  DROP TABLE "_pages_v";
  DROP TABLE "_pages_v_locales";
  DROP TABLE "posts_ctas";
  DROP TABLE "posts_content";
  DROP TABLE "posts_content_locales";
  DROP TABLE "posts";
  DROP TABLE "posts_locales";
  DROP TABLE "posts_rels";
  DROP TABLE "_posts_v_version_ctas";
  DROP TABLE "_posts_v_version_content";
  DROP TABLE "_posts_v_version_content_locales";
  DROP TABLE "_posts_v";
  DROP TABLE "_posts_v_locales";
  DROP TABLE "_posts_v_rels";
  DROP TABLE "authors";
  DROP TABLE "authors_locales";
  DROP TABLE "tags";
  DROP TABLE "tags_locales";
  DROP TABLE "files";
  DROP TABLE "images";
  DROP TABLE "images_locales";
  DROP TABLE "videos";
  DROP TABLE "users";
  DROP TABLE "redirects";
  DROP TABLE "redirects_rels";
  DROP TABLE "forms_blocks_select_options";
  DROP TABLE "forms_blocks_select_options_locales";
  DROP TABLE "forms_blocks_select";
  DROP TABLE "forms_blocks_select_locales";
  DROP TABLE "forms_blocks_text";
  DROP TABLE "forms_blocks_text_locales";
  DROP TABLE "forms_blocks_textarea";
  DROP TABLE "forms_blocks_textarea_locales";
  DROP TABLE "forms_emails";
  DROP TABLE "forms_emails_locales";
  DROP TABLE "forms";
  DROP TABLE "forms_locales";
  DROP TABLE "form_submissions_submission_data";
  DROP TABLE "form_submissions";
  DROP TABLE "payload_preferences";
  DROP TABLE "payload_preferences_rels";
  DROP TABLE "payload_migrations";
  DROP TABLE "nav_header_collapsible_menu_sections_links";
  DROP TABLE "nav_header_collapsible_menu_sections";
  DROP TABLE "nav_header_flat_menu";
  DROP TABLE "nav_header_icon_items";
  DROP TABLE "nav_footer_footer_items_footer_menu";
  DROP TABLE "nav";
  DROP TABLE "four_oh_four";
  DROP TABLE "four_oh_four_locales";
  DROP TABLE "homepage_blocks_iframe_block";
  DROP TABLE "homepage_blocks_iframe_block_locales";
  DROP TABLE "homepage_blocks_icon_grid_block_items";
  DROP TABLE "homepage_blocks_icon_grid_block";
  DROP TABLE "HomefbImageB";
  DROP TABLE "HomeSHeaderB";
  DROP TABLE "homepage_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "homepage_blocks_gallery_grid_block";
  DROP TABLE "homepage_blocks_video_block";
  DROP TABLE "homepage_blocks_form_block";
  DROP TABLE "homepage_blocks_form_block_locales";
  DROP TABLE "homepage_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "homepage_blocks_card_grid_block_cards";
  DROP TABLE "homepage_blocks_card_grid_block";
  DROP TABLE "homepage_blocks_markdown_block";
  DROP TABLE "homepage_blocks_markdown_block_locales";
  DROP TABLE "homepage_blocks_faq_block_items";
  DROP TABLE "homepage_blocks_faq_block";
  DROP TABLE "homepage_blocks_faq_block_locales";
  DROP TABLE "homepage_blocks_text_image_block_items";
  DROP TABLE "homepage_blocks_text_image_block";
  DROP TABLE "homepage_blocks_text_image_block_locales";
  DROP TABLE "homepage_blocks_hero_block";
  DROP TABLE "homepage_blocks_hero_block_locales";
  DROP TABLE "homepage";
  DROP TABLE "homepage_locales";
  DROP TABLE "_homepage_v_blocks_iframe_block";
  DROP TABLE "_homepage_v_blocks_iframe_block_locales";
  DROP TABLE "_homepage_v_blocks_icon_grid_block_items";
  DROP TABLE "_homepage_v_blocks_icon_grid_block";
  DROP TABLE "_HomefbImageB_v";
  DROP TABLE "_HomeSHeaderB_v";
  DROP TABLE "_homepage_v_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "_homepage_v_blocks_gallery_grid_block";
  DROP TABLE "_homepage_v_blocks_video_block";
  DROP TABLE "_homepage_v_blocks_form_block";
  DROP TABLE "_homepage_v_blocks_form_block_locales";
  DROP TABLE "_homepage_v_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "_homepage_v_blocks_card_grid_block_cards";
  DROP TABLE "_homepage_v_blocks_card_grid_block";
  DROP TABLE "_homepage_v_blocks_markdown_block";
  DROP TABLE "_homepage_v_blocks_markdown_block_locales";
  DROP TABLE "_homepage_v_blocks_faq_block_items";
  DROP TABLE "_homepage_v_blocks_faq_block";
  DROP TABLE "_homepage_v_blocks_faq_block_locales";
  DROP TABLE "_homepage_v_blocks_text_image_block_items";
  DROP TABLE "_homepage_v_blocks_text_image_block";
  DROP TABLE "_homepage_v_blocks_text_image_block_locales";
  DROP TABLE "_homepage_v_blocks_hero_block";
  DROP TABLE "_homepage_v_blocks_hero_block_locales";
  DROP TABLE "_homepage_v";
  DROP TABLE "_homepage_v_locales";
  DROP TABLE "blog_index_blocks_iframe_block";
  DROP TABLE "blog_index_blocks_iframe_block_locales";
  DROP TABLE "blog_index_blocks_icon_grid_block_items";
  DROP TABLE "blog_index_blocks_icon_grid_block";
  DROP TABLE "BlogfbImageB";
  DROP TABLE "BlogSHeaderB";
  DROP TABLE "blog_index_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "blog_index_blocks_gallery_grid_block";
  DROP TABLE "blog_index_blocks_video_block";
  DROP TABLE "blog_index_blocks_form_block";
  DROP TABLE "blog_index_blocks_form_block_locales";
  DROP TABLE "blog_index_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "blog_index_blocks_card_grid_block_cards";
  DROP TABLE "blog_index_blocks_card_grid_block";
  DROP TABLE "blog_index_blocks_markdown_block";
  DROP TABLE "blog_index_blocks_markdown_block_locales";
  DROP TABLE "blog_index_blocks_faq_block_items";
  DROP TABLE "blog_index_blocks_faq_block";
  DROP TABLE "blog_index_blocks_faq_block_locales";
  DROP TABLE "blog_index_blocks_text_image_block_items";
  DROP TABLE "blog_index_blocks_text_image_block";
  DROP TABLE "blog_index_blocks_text_image_block_locales";
  DROP TABLE "blog_index_blocks_hero_block";
  DROP TABLE "blog_index_blocks_hero_block_locales";
  DROP TABLE "blog_index";
  DROP TABLE "blog_index_locales";
  DROP TABLE "_blog_index_v_blocks_iframe_block";
  DROP TABLE "_blog_index_v_blocks_iframe_block_locales";
  DROP TABLE "_blog_index_v_blocks_icon_grid_block_items";
  DROP TABLE "_blog_index_v_blocks_icon_grid_block";
  DROP TABLE "_BlogfbImageB_v";
  DROP TABLE "_BlogSHeaderB_v";
  DROP TABLE "_blog_index_v_blocks_gallery_grid_block_gallery_images";
  DROP TABLE "_blog_index_v_blocks_gallery_grid_block";
  DROP TABLE "_blog_index_v_blocks_video_block";
  DROP TABLE "_blog_index_v_blocks_form_block";
  DROP TABLE "_blog_index_v_blocks_form_block_locales";
  DROP TABLE "_blog_index_v_blocks_card_grid_block_cards_card_ctas";
  DROP TABLE "_blog_index_v_blocks_card_grid_block_cards";
  DROP TABLE "_blog_index_v_blocks_card_grid_block";
  DROP TABLE "_blog_index_v_blocks_markdown_block";
  DROP TABLE "_blog_index_v_blocks_markdown_block_locales";
  DROP TABLE "_blog_index_v_blocks_faq_block_items";
  DROP TABLE "_blog_index_v_blocks_faq_block";
  DROP TABLE "_blog_index_v_blocks_faq_block_locales";
  DROP TABLE "_blog_index_v_blocks_text_image_block_items";
  DROP TABLE "_blog_index_v_blocks_text_image_block";
  DROP TABLE "_blog_index_v_blocks_text_image_block_locales";
  DROP TABLE "_blog_index_v_blocks_hero_block";
  DROP TABLE "_blog_index_v_blocks_hero_block_locales";
  DROP TABLE "_blog_index_v";
  DROP TABLE "_blog_index_v_locales";`)
}
