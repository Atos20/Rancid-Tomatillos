import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '../src/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
