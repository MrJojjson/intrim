import React, { Component } from 'react';

import App from './app';

import { getInitData, putData } from './apiservices';

class Initiater extends Component {
  componentDidMount() {
    // putData();
    getInitData();
  }

  render() {
    return <App />;
  }
}

export default Initiater;
