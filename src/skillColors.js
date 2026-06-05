const DISTINCT_SKILL_PALETTE = [
  { background: '#ffd400', text: '#111111', border: '#9a7d00' },
  { background: '#20b75a', text: '#071b0f', border: '#0b6b30' },
  { background: '#2878f0', text: '#ffffff', border: '#124aa0' },
  { background: '#7c3aed', text: '#ffffff', border: '#4c1d95' },
  { background: '#dc2626', text: '#ffffff', border: '#8f1616' },
  { background: '#6b7280', text: '#ffffff', border: '#343943' },
  { background: '#ff7a00', text: '#111111', border: '#a84b00' },
  { background: '#00a7b5', text: '#ffffff', border: '#00636b' },
  { background: '#d6007f', text: '#ffffff', border: '#85004f' },
  { background: '#9bd400', text: '#111111', border: '#587900' },
  { background: '#173f8a', text: '#ffffff', border: '#0b234f' },
  { background: '#8b4513', text: '#ffffff', border: '#4e260b' },
  { background: '#00866e', text: '#ffffff', border: '#004f41' },
  { background: '#ff5c8a', text: '#111111', border: '#a62b4f' },
  { background: '#767a00', text: '#ffffff', border: '#434600' },
  { background: '#4f46c8', text: '#ffffff', border: '#2c277c' },
  { background: '#111111', text: '#ffffff', border: '#000000' },
  { background: '#ff6f61', text: '#111111', border: '#a53d35' },
  { background: '#00c2ff', text: '#111111', border: '#007a9f' },
  { background: '#b45f06', text: '#ffffff', border: '#673600' },
  { background: '#5f9ea0', text: '#111111', border: '#34595a' },
  { background: '#a000c8', text: '#ffffff', border: '#590070' },
  { background: '#e6a700', text: '#111111', border: '#8a6400' },
  { background: '#2f6b3c', text: '#ffffff', border: '#193b21' },
];

function getPaletteIndex(label, index) {
  if (Number.isInteger(index)) {
    return index % DISTINCT_SKILL_PALETTE.length;
  }

  let hash = 0;

  for (let position = 0; position < label.length; position += 1) {
    hash = (hash * 31 + label.charCodeAt(position)) % DISTINCT_SKILL_PALETTE.length;
  }

  return hash;
}

export function getSkillStyle(label, index) {
  return DISTINCT_SKILL_PALETTE[getPaletteIndex(label, index)];
}

export function getSkillColor(label, index) {
  return getSkillStyle(label, index).background;
}

export function getSkillCssVariables(label, index) {
  const color = getSkillStyle(label, index);

  return {
    '--skill-color': color.background,
    '--skill-text-color': color.text,
    '--skill-border-color': color.border,
  };
}
