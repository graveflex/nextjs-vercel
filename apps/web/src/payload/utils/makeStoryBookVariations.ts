export default function makeVariations(count: number) {
  const options = [];
  for (let i = 1; i <= count; i++) {
    options.push(i.toString());
  }

  return {
    name: 'Variation',
    defaultValue: '1',
    options,
    control: { type: 'select' }
  } as const;
}
