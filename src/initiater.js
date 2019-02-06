import React, { Component } from 'react';

import App from './app';

import { getInitData } from './apiservices';

class Initiater extends Component {
  componentDidMount() {
    getInitData();
  }

  render() {
    return <App />;
  }
}

export default Initiater;
