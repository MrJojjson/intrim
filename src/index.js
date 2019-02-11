import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faKey,
  faTimes,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import Initiater from './initiater';
import store from './store';

library.add(faEnvelope, faKey, faTimes, faSearch);

ReactDOM.render(
  <Provider store={store()}>
    <Initiater />
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
