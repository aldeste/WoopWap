import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import Loader from '../../HOC/Loader';
import Maps from '../Map';
import Listitem from '../Listitem';
import calculateDistance from './Helpers/distances';

class Home extends Component {
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
                distance: calculateDistance(
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
