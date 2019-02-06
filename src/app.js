import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { simpleAction } from './actions';

import LeftPanel from './container/panelLeft';
import TopPanel from './container/panelTop';
import MiddlePanel from './container/panelMiddle';

import style from './css/app.less';

const App = () => (
    <div className={style.container}>
      <div className={style.containerLeft}>
        <LeftPanel />
      </div>
      <div className={style.containerTopMiddle}>
        <TopPanel />
        <MiddlePanel />
      </div>
    </div>
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
