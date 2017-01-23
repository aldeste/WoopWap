import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    );
  }
}

export default Hello;
