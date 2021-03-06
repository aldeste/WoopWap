import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import Loader from '../../HOC/Loader';
import Maps from '../Map';
import Listitem from '../Listitem';
import calculateDistance from './Helpers/distances';
import numberShortener from './Helpers/numberShortener';
import ViewItem from '../ViewItem';
import style from './style.css';

class Home extends Component {
  state = { mission: '' };

  viewMission(mission) {
    this.setState({ mission });
  }

  onDelete(id) {
    this.props.onDelete(id);
    this.setState({ mission: '' });
  }

  render() {
    if (!this.state.mission) {
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
              <Tappable
                key={i}
                onTap={() => this.viewMission(list.id)}
                className={style.listItem}
              >
                <Listitem
                  distance={`${list.distance.toFixed(2)}km`}
                  address={list.address}
                  price={`${numberShortener(list.amount)} kr`}
                />
              </Tappable>
            ))}
        </div>
      );
    }

    if (this.state.mission) {
      return (
        <div>
          {this.props.data
            .filter(item => item.id === this.state.mission)
            .map(item => (
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
            ))}
        </div>
      );
    }
  }
}

export default Loader([ 'position' ])(Home);
