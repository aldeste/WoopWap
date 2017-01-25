const API_KEY = 'AIzaSyAomE92YJuMz4wnWdZxVEZ7Oy5U8tHRYIw';
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/';
const MAP_URL = 'https://maps.googleapis.com/maps/api/';
const GEOLOCATION_URL = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU`;

export function fetchLocation(address) {
  const a = address.split(' ').join('+');
  const url = `${GEO_URL}json?address=${a}&key=${API_KEY}`;

  return fetch(url)
    .then(response => response.json())
    .then(resp => resp.results[0].geometry.location);
}

/**
 * Get location if html5 api navigation.geolocation fails.
 * @return {Promise}
 */
export function geolocationFallback() {
  return fetch(GEOLOCATION_URL, { method: 'POST' })
    .then(response => response.json());
}
