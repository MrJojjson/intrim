import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import posed, { PoseGroup } from 'react-pose';

import App from './app';
import Registration from './container/registration';

import { getUser, newUser, loginUser } from './apiservices';

class Initiater extends Component {
  componentDidMount() {
    // newUser();
    // getUser();
    // loginUser();
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/registration' component={Registration}/>
        </Switch>
      </main>
    );
  }
}

export default Initiater;
