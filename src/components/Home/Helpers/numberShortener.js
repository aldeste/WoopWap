function numberShortener(n) {
  const number = parseInt(n);
  const fix = (number, category, fixed = 2) => {
    return (number / category).toFixed(fixed);
  }

  if (number >= 1e15) {
    return `${fix(number, 1e15)}Q`;
  }

  if (number >= 1e12) {
    return `${fix(number, 1e12)}T`;
  }

  if (number >= 1e9) {
    return `${fix(number, 1e9)}B`;
  }

  if (number >= 1e6) {
    return `${fix(number, 1e6)}M`;
  }

  if (number >= 1e3) {
    return `${fix(number, 1e3)}K`;
  }

  return number;
}

export default numberShortener;
