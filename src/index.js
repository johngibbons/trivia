import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import Home from './containers/Home';
import GameContainer from './containers/GameContainer';
import GameShowContainer from './containers/GameShowContainer';
import GameAdminContainer from './containers/GameAdminContainer';
import GameEditContainer from './containers/GameEditContainer';
import GameRunContainer from './containers/GameRunContainer';
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
          <IndexRoute component={GameShowContainer} />
          <Route path='edit' component={GameEditContainer} />
          <Route path='run' component={GameRunContainer} />
          <Route path='/entries/:entry/edit'
            component={EntryEditContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
