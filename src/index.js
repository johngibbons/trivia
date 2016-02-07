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
import {startFirebaseListeners, setFlash} from './actions/index';

import {ROOT_REF} from './constants';

const history = createBrowserHistory();
store.dispatch(startFirebaseListeners());

function requireGameOwner(nextState, replace, callback) {
  ROOT_REF.once('value', (remote) => {
    const remoteState = remote.val().remoteState;
    const authData = ROOT_REF.getAuth();
    if (authData && remoteState.gamesById[nextState.params.game].user === authData.uid) {
      callback();
    } else {
      store.dispatch(
        setFlash('danger', 'Sorry, you are not authorized')
      );
      replace('/', '', '');
      callback();
    }
  });
}

function setContext(context, nextState, replace, callback) {
  window.TrviaContext = context;

  if (context === 'gameEdit' || context === 'gameRun') {
    return requireGameOwner(nextState, replace, callback);
  }
  callback();
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='games/:game' component={GameContainer}>
          <IndexRoute component={GameShow} onEnter={setContext.bind(null, 'gameLeaderboard')} />
          <Route path='edit' component={GameEdit} onEnter={setContext.bind(null, 'gameEdit')} />
          <Route path='run' component={GameRun} onEnter={setContext.bind(null, 'gameRun')} />
          <Route path='/entries/:entry'
            component={EntryContainer}
            onEnter={setContext.bind(null, 'entry')}
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
