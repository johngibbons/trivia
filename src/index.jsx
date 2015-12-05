import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Game from './components/Game';
import Home from './components/Home';
import EditGame from './components/EditGame'
import Entry from './components/Entry';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import configureStore from './store/configureStore';
import {Router, Route, Link, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import remoteActionMiddleware from './remote_action_middleware';
import {setState} from './actions/index';
import io from 'socket.io-client';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
    store.dispatch(setState(state));
  }
);

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
  )(createStore);
const store = createStoreWithMiddleware(rootReducer);


const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='games/:id/edit' component={EditGame}></Route>
          <Route path='games/:id' component={Game}></Route>
          <Route path='entries/:id' component={Entry}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
