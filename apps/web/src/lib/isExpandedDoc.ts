// assert T when exported payload type is string | T
function isExpandedDoc<T>(doc: unknown): doc is T {
  if (typeof doc === 'object') {
    return true;
  }
  return false;
}

export function expandedDoc<T>(doc: unknown): T | null {
  if (typeof doc === 'object') {
    return doc as T;
  }
  return null;
}

export default isExpandedDoc;
