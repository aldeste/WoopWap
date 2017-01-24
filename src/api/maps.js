import React, { Component } from 'react';

const apiKey = 'AIzaSyAgTDmKOjvYu4i_-aFOh4bTM7lQFCamEZs';
const geoURL = 'https://maps.googleapis.com/maps/api/geocode/';

export function fetchLocation(address) {
    const a = address.split(' ').join('+');
    const url = `${geoURL}json?address=${a}&key=${apiKey}`;

    fetch(url).then(response => response.json()).then(e => console.log(e));
}
