function genClassName(classNames: unknown[]) {
  return classNames.filter((x) => !!x).join(' ');
}

export default genClassName;
