import React, { Component } from 'react';

let apiKey = 'AIzaSyAgTDmKOjvYu4i_-aFOh4bTM7lQFCamEZs';
let geoURL = 'https://maps.googleapis.com/maps/api/geocode/';

export function fetchLocation(adress) {
        adress = JSON.stringify(adress);
        let theURL = geoURL+'json?adress='+adress+'&key='+apiKey;
        console.log(theURL);
    }
