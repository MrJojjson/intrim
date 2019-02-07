import React, { Component } from 'react';

import App from './app';

import { getInitData, newUser } from './apiservices';

class Initiater extends Component {
  componentDidMount() {
    newUser();
    // getInitData();
  }

  render() {
    return <App />;
  }
}

export default Initiater;
