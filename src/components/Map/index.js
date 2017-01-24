import React, { PropTypes, Component } from 'react';
import style from './style.css';
import GoogleMap from 'google-map-react';

const MyGreatPlace = '<div></div>';

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  render() {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
}
