import type {
  PayloadRichTextProps,
  SerializedPayloadNode
} from '@mono/ui/components/primitives/RichText';

type RichTextContentProps = {
  type: string;
  text?: string;
  tag?: string;
  listType?: string;
  value?: object;
  format?: number;
  children?: SerializedPayloadNode[];
}[];

const listChildren = (children: SerializedPayloadNode[]) => {
  return children?.map(({ text }) => {
    return {
      type: 'listitem',
      value: 1,
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          mode: 'normal',
          text,
          type: 'text',
          style: '',
          detail: 0,
          format: 0,
          version: 1
        }
      ],
      direction: 'ltr'
    };
  });
};

/* Use this in storybook for generating content in the richtext component. */
const getContent = (content: RichTextContentProps) => {
  return content.map(
    ({ type, listType, tag, text, value, format, children }) => {
      return {
        type,
        format: format ?? 0,
        tag: tag ?? '',
        listType,
        indent: 0,
        version: 1,
        value: value ?? '',
        children: children
          ? listChildren(children)
          : [
              {
                mode: 'normal',
                text,
                type: 'text',
                style: '',
                detail: 0,
                format,
                version: 1
              }
            ],
        direction: 'ltr'
      };
    }
  );
};

const genRichText = (content: RichTextContentProps): PayloadRichTextProps => {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      /* Assertion needed because payload doesn't provide a specific type */
      children: getContent(content) as SerializedPayloadNode[],
      direction: 'ltr'
    }
  };
};

export default genRichText;
