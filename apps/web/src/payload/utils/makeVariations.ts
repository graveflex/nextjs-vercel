export default function makeVariations(
  count: number,
  prefix: string,
  name: string = 'variant'
) {
  const options = [];
  for (let i = 1; i <= count; i++) {
    options.push({
      label: i.toString(),
      value: i.toString()
    });
  }

  return {
    type: 'select',
    name: 'variant',
    label: 'Variant',
    defaultValue: '1',
    db: `${prefix}${name}`,
    required: true,
    options,
    admin: {
      description: 'The layout variant for the block.'
    }
  } as const;
}
