import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Game from './components/Game';
import Dashboard from './components/Dashboard';
import Entry from './components/Entry';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Router, Route, Link, IndexRoute} from 'react-router';

const store = configureStore();

const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path='/' component={App}>
          <IndexRoute component={Dashboard} />
          <Route path='games/:id' component={Game}>
            <Route path='/entries/:id' component={Entry}></Route>
          </Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
