import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import GameEditDashboardContainer from './containers/GameEditDashboardContainer';
import Home from './components/Home';

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import {store} from './store/configureStore';

const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='games/:id/edit' component={GameEditDashboardContainer}>
          </Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
