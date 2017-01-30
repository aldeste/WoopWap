import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import Loader from '../../HOC/Loader';
import Maps from '../Map';
import Listitem from '../Listitem';
import calculateDistance from './Helpers/distances';
import numberShortener from './Helpers/numberShortener';
import ViewItem from '../ViewItem';
import style from './style.css';
import { Link } from 'react-router';

class Home extends Component {
  onDelete(id) {
    this.props.onDelete(id);
    this.setState({ mission: '' });
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
          .map(entry => {
            const location = { lat: entry.lat, lng: entry.lng };
            return Object.assign(
              { distance: calculateDistance(this.props.position, location) },
              entry,
            );
          })
          .sort((a, b) => a.distance - b.distance)
          .map((list, i) => (
            <Link
              key={i}
              to={{ pathname: '/mission/', query: { item: { ...list } } }}
              className={style.listItem}
            >
              <Listitem
                distance={`${list.distance.toFixed(2)}km`}
                address={list.address}
                price={`${numberShortener(list.amount)} kr`}
              />
            </Link>
          ))}
      </div>
    );
  }
}

export default Loader([ 'position' ])(Home);
