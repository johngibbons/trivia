import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import Home from './containers/Home';
import GameContainer from './containers/GameContainer';
import GameShow from './components/GameShow';
import GameEdit from './components/GameEdit';
import GameRun from './components/GameRun';
import EntryContainer from './containers/EntryContainer';
import UserContainer from './containers/UserContainer';
import UserProfile from './components/UserProfile';
import UserGames from './components/UserGames';

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {store} from './store/configureStore';
import {startFirebaseListeners, setFlash, setRouter} from './actions/index';

import {ROOT_REF} from './constants';

const history = createBrowserHistory();
store.dispatch(startFirebaseListeners());

function setContext(nextState, replace, callback) {
  store.dispatch(setRouter(nextState.params, nextState.location.pathname));

  callback();
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='games/:game' component={GameContainer}>
          <IndexRoute component={GameShow} onEnter={setContext} />
          <Route path='edit' component={GameEdit} onEnter={setContext} />
          <Route path='run' component={GameRun} onEnter={setContext} />
          <Route path='/entries/:entry'
            component={EntryContainer}
            onEnter={setContext}
          />
        </Route>
        <Route path='users/:user' component={UserContainer}>
          <IndexRoute component={UserProfile} />
          <Route path='games' component={UserGames}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
