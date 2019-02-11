import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { simpleAction } from './actions';

import LeftPanel from './container/panelLeft';
import TopPanel from './container/panelTop';
import MiddlePanel from './container/panelMiddle';

import style from './css/app.less';

import {
  widthLeftPanel,
} from './css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: ${widthLeftPanel};
  height: 100%;
  overflow: hidden;
`;

const ContainerTopMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - ${widthLeftPanel});
  height: 100%;
  background: red;
  overflow: hidden;
`;

const App = () => (
    <Container className={style.container}>
      <ContainerLeft className={style.containerLeft}>
        <LeftPanel />
      </ContainerLeft>
      <ContainerTopMiddle className={style.containerTopMiddle}>
        <TopPanel />
        <MiddlePanel />
      </ContainerTopMiddle>
    </Container>
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
