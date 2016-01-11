import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import Home from './containers/Home';
import GameContainer from './containers/GameContainer';
import GameShow from './components/GameShow';
import GameEdit from './components/GameEdit';
import GameRun from './components/GameRun';
import EntryEditContainer from './containers/EntryEditContainer';

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {store} from './store/configureStore';
import {startFirebaseListeners} from './actions/index';

const history = createBrowserHistory();
store.dispatch(startFirebaseListeners());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='games/:game' component={GameContainer}>
          <IndexRoute component={GameShow} />
          <Route path='edit' component={GameEdit} />
          <Route path='run' component={GameRun} />
          <Route path='/entries/:entry/edit'
            component={EntryEditContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
