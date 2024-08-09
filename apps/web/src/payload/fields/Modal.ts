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
        name: 'content',
        label: 'Content',
        type: 'richText',
        localized
      },
      ...fields
    ]
  };
}

export default Modal;
