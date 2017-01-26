function numberShortener(number) {
  if (number >= 1e9) {
    return `${number / 1e9}B`;
  }

  if (number >= 1e6) {
    return `${number / 1e6}M`;
  }

  if (number >= 1e3) {
    return `${number / 1e3}K`;
  }
}

export default numberShortener;
