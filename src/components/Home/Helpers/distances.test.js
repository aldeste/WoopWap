import calculateDistance from './distances';

describe('calculateDistance', () => {
  const position1 = { lat: 55.7229434, lng: 13.2209822 };
  const position2 = { lat: 55.6133822, lng: 13.045723 };
  it('It should be 16 rounded', () => {
    expect(Math.round(calculateDistance(position1, position2))).toBe(16);
  });
});
