import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <Initiater />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
