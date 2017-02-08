import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { startFirebase } from './firebase';
import { saveImages } from './awardsShows/2017Oscars';
injectTapEventPlugin();
startFirebase();
saveImages();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
