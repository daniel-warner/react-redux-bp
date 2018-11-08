import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';

import Root from './Root';
import App from './components/app';


ReactDOM.render(
  <Root>
    <App/>
  </Root>
  , document.getElementById("app")
);
