function isExpandedDoc<T extends object>(doc: unknown): doc is T {
  return typeof doc === 'object' && doc !== null;
}

export default isExpandedDoc;
