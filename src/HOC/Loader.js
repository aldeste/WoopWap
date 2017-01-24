import React, { Component } from 'react';
import style from './style.css';

const LoaderContainer = propNames =>
  LoadingComponent => class Loader extends Component {
    isEmpty(prop) {
      return prop === null ||
        !prop ||
        prop.hasOwnProperty('length') && prop.length === 0 ||
        prop.constructor === Object && Object.keys(prop).length === 0;
    }

    render() {
      return propNames.find(propName => this.isEmpty(this.props[propName]))
        ? <div className={style.loader} />
        : <LoadingComponent {...this.props} />;
    }
  };

export default LoaderContainer;
