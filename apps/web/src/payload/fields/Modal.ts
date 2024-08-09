import type { GroupField } from 'payload';

function Modal({
  name,
  interfaceName,
  localized,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'modal',
    type: 'group',
    interfaceName: interfaceName || 'payLoadModal',
    fields: [
      {
        name: 'label',
        label: 'Label',
        type: 'text',
        localized
      },
      {
        name: 'content',
        label: 'Content',
        type: 'richText',
        localized
      },
      {
        name: 'footer',
        label: 'Footer',
        type: 'richText',
        localized
      },
      ...fields
    ]
  };
}

export default Modal;
