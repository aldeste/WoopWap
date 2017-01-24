import React, { Component } from 'react';

const API_KEY = 'AIzaSyAgTDmKOjvYu4i_-aFOh4bTM7lQFCamEZs';
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/';
const MAP_URL = 'https://maps.googleapis.com/maps/api/';

export function fetchLocation(address) {
    const a = address.split(' ').join('+');
    const url = `${GEO_URL}json?address=${a}&key=${API_KEY}`;

    fetch(url).then(response => response.json()).then(e => console.log(e));
}
