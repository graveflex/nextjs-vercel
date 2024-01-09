function expandedDoc<T>(doc: unknown): T | null {
  if (typeof doc === 'object') {
    return doc as T;
  }
  return null;
}

export default expandedDoc;
