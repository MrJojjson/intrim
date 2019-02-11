import React, { Component } from 'react';

import App from './app';

import { getUser, newUser, loginUser } from './apiservices';

class Initiater extends Component {
  componentDidMount() {
    // newUser();
    // getUser();
    loginUser();
  }

  render() {
    return <App />;
  }
}

export default Initiater;
