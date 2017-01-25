const calculateDistance = (pos1, pos2) => {
  const { lat, lng } = pos1;
  const lat2 = pos2.lat;
  const lng2 = pos2.lng;
  const R = 6371;
  // Radius of the earth in km
  const dLat = (lat2 - lat) * Math.PI / 180;
  const dLng = (lng2 - lng) * Math.PI / 180;
  const a = 0.5 -
    Math.cos(dLat) / 2 +
    Math.cos(lat * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      (1 - Math.cos(dLng)) /
      2;

  return R * 2 * Math.asin(Math.sqrt(a));
};

export default calculateDistance;
