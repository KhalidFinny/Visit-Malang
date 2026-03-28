/**
 * Helper to generate the triple window cutout path.
 */
export const getWindowPath = (inner = false, single = false) => {
  const vTop = inner ? 90 : 60;
  const vBottom = inner ? 990 : 1020;
  const width = inner ? 370 : 400;

  // W2: Center (Center: 960)
  const w2 = `M960,${vTop} C${960 - width},${vTop} ${960 - width + 30},280 ${960 - width + 30},440 V610 C${960 - width + 30},770 ${960 - width},${vBottom} 960,${vBottom} C${960 + width},${vBottom} ${960 + width - 30},770 ${960 + width - 30},610 V440 C${960 + width - 30},280 ${960 + width},${vTop} 960,${vTop} Z`;

  if (single) return w2;

  // W1 & W3: Wings
  const w1 = `M-200,${vTop} C${-200 - width},${vTop} ${-200 - width + 30},280 ${-200 - width + 30},440 V610 C${-200 - width + 30},770 ${-200 - width},${vBottom} -200,${vBottom} C${-200 + width},${vBottom} ${-200 + width - 30},770 ${-200 + width - 30},610 V440 C${-200 + width - 30},280 ${-200 + width},${vTop} -200,${vTop} Z`;
  const w3 = `M2120,${vTop} C${2120 - width},${vTop} ${2120 - width + 30},280 ${2120 - width + 30},440 V610 C${2120 - width + 30},770 ${2120 - width},${vBottom} 2120,${vBottom} C${2120 + width},${vBottom} ${2120 + width - 30},770 ${2120 + width - 30},610 V440 C${2120 + width - 30},280 ${2120 + width},${vTop} 2120,${vTop} Z`;

  return `${w1} ${w2} ${w3}`;
};

export const getRimPath = (single = false) => {
  const vTop = 120;
  const vBottom = 960;
  const width = 340;

  // R2: Center (Center: 960)
  const r2 = `M960,${vTop} C${960 - width},${vTop} ${960 - width + 20},320 ${960 - width + 20},440 V610 C${960 - width + 20},730 ${960 - width},${vBottom} 960,${vBottom} C${960 + width},${vBottom} ${960 + width - 20},730 ${960 + width - 20},610 V440 C${960 + width - 20},320 ${960 + width},${vTop} 960,${vTop} Z`;

  if (single) return r2;

  const r1 = `M-200,${vTop} C${-200 - width},${vTop} ${-200 - width + 20},320 ${-200 - width + 20},440 V610 C${-200 - width + 20},730 ${-200 - width},${vBottom} -200,${vBottom} C${-200 + width},${vBottom} ${-200 + width - 20},730 ${-200 + width - 20},610 V440 C${-200 + width - 20},320 ${-200 + width},${vTop} -200,${vTop} Z`;
  const r3 = `M2120,${vTop} C${2120 - width},${vTop} ${2120 - width + 20},320 ${2120 - width + 20},440 V610 C${2120 - width + 20},730 ${2120 - width},${vBottom} 2120,${vBottom} C${2120 + width},${vBottom} ${2120 + width - 20},730 ${2120 + width - 20},610 V440 C${2120 + width - 20},320 ${2120 + width},${vTop} 2120,${vTop} Z`;

  return `${r1} ${r2} ${r3}`;
};
