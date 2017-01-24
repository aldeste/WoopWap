import React, { PropTypes, Component } from 'react';
import style from './style.css';
import GoogleMap from 'google-map-react';

class Maps extends Component {
  static defaultProps = {
    center: { lat: 59.938043, lng: 30.337157 },
    zoom: 14,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };

  render() {
    return (
      <div style={{ width: this.props.width, height: this.props.height }}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyAgTDmKOjvYu4i_-aFOh4bTM7lQFCamEZs' }}
          options={
            {
              styles: [
              {
                  elementType: 'labels.text.fill',
                stylers: [ { color: '#ffffff' } ],
              },
              {
                  elementType: 'labels.text.stroke',
                stylers: [ { color: '#74001b' }, { lightness: -8 } ],
              },
              {
                  featureType: 'administrative',
                  elementType: 'geometry',
                stylers: [ { color: '#ffdfa6' }, { weight: 0.4 } ],
              },
              {
                  featureType: 'landscape',
                  elementType: 'geometry',
                stylers: [ { color: '#b52127' } ],
              },
              {
                  featureType: 'poi',
                  elementType: 'geometry',
                stylers: [ { color: '#c5531b' } ],
              },
              {
                  featureType: 'road.arterial',
                  elementType: 'geometry.fill',
                stylers: [ { color: '#74001b' } ],
              },
              {
                  featureType: 'road.arterial',
                  elementType: 'geometry.stroke',
                stylers: [ { color: '#da3c3c' } ],
              },
              {
                  featureType: 'road.highway',
                  elementType: 'geometry.fill',
                stylers: [ { color: '#74001b' }, { lightness: -10 } ],
              },
              {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                stylers: [ { color: '#da3c3c' } ],
              },
              {
                  featureType: 'road.local',
                  elementType: 'geometry.fill',
                stylers: [ { color: '#990c19' } ],
              },
              {
                  featureType: 'road.local',
                  elementType: 'geometry.stroke',
                stylers: [ { visibility: 'off' } ],
              },
              {
                  featureType: 'transit',
                  elementType: 'geometry',
                stylers: [ { color: '#6a0d10' }, { visibility: 'on' } ],
              },
              {
                  featureType: 'water',
                  elementType: 'geometry',
                stylers: [ { color: '#ffdfa6' } ],
              },
              ],
            }
          }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.children}
        </GoogleMap>
      </div>
    );
  }
}

export default Maps;
