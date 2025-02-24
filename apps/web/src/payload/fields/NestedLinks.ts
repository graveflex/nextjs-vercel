import type { GroupField } from 'payload';
import { LinkFeature, defaultEditorConfig, defaultEditorLexicalConfig } from '@payloadcms/richtext-lexical';

export default function NestedLinkArray({
  name = 'nestedLinks',
  interfaceName = 'nestedLinks',
  localized = true
}: Partial<GroupField> = {}): GroupField {
  console.log('@-->defaultEditorConfig', defaultEditorConfig);
  console.log('@-->defaultEditorLexicalConfig', defaultEditorLexicalConfig);

  const feature = LinkFeature();

  debugger;

  return {
    type: 'group',
    name,
    interfaceName,
    fields: []
  };
}
