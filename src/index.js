import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import Home from './containers/Home';
import GameEditContainer from './containers/GameEditContainer';
import GameContainer from './containers/GameContainer';
import EntryEditContainer from './containers/EntryEditContainer';

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import {store} from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='games/:id/edit' component={GameEditContainer} />
        <Route path='games/:id' component={GameContainer} />
        <Route path='games/:id/entries/:entry/edit' component={EntryEditContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
