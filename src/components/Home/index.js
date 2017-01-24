import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import Loader from '../../HOC/Loader';
import Maps from '../Map';
import Listitem from '../Listitem';

class Home extends Component {
  calculateDistance(pos1, pos2) {
    const {lat, lng} = pos1;
    const lat2 = pos2.lat;
    const lng2 = pos2.lng;
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat) * Math.PI / 180;
    const dLng = (lng2 - lng) * Math.PI / 180;
    const a =
       0.5 - Math.cos(dLat)/2 +
       Math.cos(lat * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
       (1 - Math.cos(dLng))/2;

    return R * 2 * Math.asin(Math.sqrt(a));
  }

  render() {
    return (
      <div>
        <Maps
          width={'100vw'}
          height={'6rem'}
          center={this.props.position}
          markers={[ this.props.position ]}
        />
        {this.props.data
          .map(
            entry =>
            Object.assign(
              {
                distance: this.calculateDistance(
                    this.props.position,
                    entry.location,
                ),
              },
                entry,
            ),
          )
          .sort((a, b) => a.distance - b.distance)
          .map((list, i) => (
            <Tappable key={i}>
              <Listitem
                distance={`${list.distance.toFixed(2)}km`}
                address={list.address}
                price={`${list.price} kr`}
              />
            </Tappable>
          ))}
      </div>
    );
  }
}

export default Loader(['position', 'data'])(Home);
