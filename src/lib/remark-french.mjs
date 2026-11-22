// Typographie française dans les billets Markdown : espace fine insécable
// avant ? ! ; : % € et à l'intérieur des guillemets « ». Le code n'est pas touché.
const NNBSP = ' ';

export function frenchText(value) {
  return value
    .replace(/ ([?!;:»%€])/g, `${NNBSP}$1`)
    .replace(/« /g, `«${NNBSP}`);
}

function walk(node) {
  if (node.type === 'text' && typeof node.value === 'string') {
    node.value = frenchText(node.value);
    return;
  }
  if (Array.isArray(node.children)) node.children.forEach(walk);
}

export function remarkFrenchTypography() {
  return (tree) => walk(tree);
}
