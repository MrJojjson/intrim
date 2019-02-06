import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Initiater from './initiater';
import store from './store';

ReactDOM.render(
  <Provider store={store()}>
    <Initiater />
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
