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

class Mission extends Component {
  viewMission(mission) {
    this.setState({ mission });
  }

  onDelete(id) {
    this.props.onDelete(id);
    this.setState({ mission: '' });
  }

  render() {
    console.log(this.props.location.query)
    const {item} = this.props.location.query;
    return (
      <div>
        <div key={item.id}>
          <Maps
            width={'100vw'}
            height={'6rem'}
            center={{
              lat: parseFloat(item.lat),
              lng: parseFloat(item.lng),
            }}
            markers={[
              { lat: parseFloat(item.lat), lng: parseFloat(item.lng) },
            ]}
          />
          <ViewItem
            onDelete={() => this.onDelete(item.id)}
            onCancel={() => this.viewMission('')}
            {...item}
          />
        </div>
      </div>
    );
  }
}

export default Mission;
