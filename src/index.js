import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { startFirebase } from './firebase';
injectTapEventPlugin();
startFirebase();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
