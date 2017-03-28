import React, { Component } from 'react';

const isEmpty = prop => (
  prop === null || prop === undefined ||
  (Object.prototype.hasOwnProperty.call(prop, 'length') && prop.length === 0)
);

const LoaderHOC = propName => WrappedComponent => (
  class Loader extends Component {
    render() {
      return (isEmpty(this.props[propName]) ?
        <div className="loader" /> :
        <WrappedComponent {...this.props} />);
    }
  }
);


export default LoaderHOC;
