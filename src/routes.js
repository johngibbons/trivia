import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './components/home/Home';
import Game from './components/game/Game';
import NoMatch from './components/noMatch/NoMatch';
import PageContainer from './components/pageContainer/PageContainer';
import EditGame from './components/editGame/EditGame';
import Admin from './components/admin/Admin';
import { checkAuthStatus } from './actions/user-actions';
import store from './store'

const requireAuth = (nextState, replace, next) =>
  store.getState().currentUser.get('id') ?
    next() : store.dispatch(checkAuthStatus(next, true))

const getCurrentUser = (nextState, replace, next) =>
  store.getState().currentUser.get('id') ?
    next() : store.dispatch(checkAuthStatus(next))

export default (
  <Route
    path="/"
    component={PageContainer}
    onEnter={getCurrentUser}
  >
    <IndexRoute component={Home} />
    <Route path='games/:id/edit' component={EditGame} />
    <Route path='games/:id' component={Game} />
    <Route
      path='admin'
      component={Admin}
      onEnter={requireAuth}
    />
    <Route path="*" component={NoMatch} />
  </Route>
)
