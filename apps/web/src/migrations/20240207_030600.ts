import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_pages_page_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum_pages_page_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum_pages_page_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum_pages_blocks_hero_reveal_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum_pages_blocks_hero_reveal_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum_pages_blocks_hero_reveal_block_block_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum_pages_blocks_faq_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum_pages_blocks_faq_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum_pages_blocks_faq_block_block_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum_pages_blocks_text_image_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum_pages_blocks_text_image_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum_pages_blocks_text_image_block_block_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum_pages_blocks_hero_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum_pages_blocks_hero_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum_pages_blocks_hero_block_block_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum__pages_v_version_page_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum__pages_v_version_page_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum__pages_v_version_page_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum__pages_v_blocks_hero_reveal_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum__pages_v_blocks_hero_reveal_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum__pages_v_blocks_hero_reveal_block_block_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum__pages_v_blocks_faq_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum__pages_v_blocks_faq_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum__pages_v_blocks_faq_block_block_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum__pages_v_blocks_text_image_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum__pages_v_blocks_text_image_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum__pages_v_blocks_text_image_block_block_config_theme" ADD VALUE 'supreme';
ALTER TYPE "enum__pages_v_blocks_hero_block_block_config_theme" ADD VALUE 'unicorn';
ALTER TYPE "enum__pages_v_blocks_hero_block_block_config_theme" ADD VALUE 'machete';
ALTER TYPE "enum__pages_v_blocks_hero_block_block_config_theme" ADD VALUE 'supreme';`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
// Migration code
};
