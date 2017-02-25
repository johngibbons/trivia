import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './components/home/Home';
import Game from './components/game/Game';
import Group from './components/group/Group';
import NoMatch from './components/noMatch/NoMatch';
import PageContainer from './components/pageContainer/PageContainer';
import EditGame from './components/editGame/EditGame';
import Admin from './components/admin/Admin';
import Entry from './components/entry/Entry';
import MasterEntry from './components/entry/MasterEntry';
import UserEntries from './components/users/userEntries/UserEntries';
import { checkAuthStatus } from './actions/user-actions';
import { fetchGame } from './actions/game-actions';
import {
  fetchGroup
} from './actions/group-actions';
import {
  fetchEntry,
  fetchUserEntries
} from './actions/entry-actions';
import store from './store'
import Auth from './components/auth/Auth';

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
    <IndexRoute
      component={Home}
      onEnter={() => {
        if (store.getState().nominees.size) return;
        store.dispatch(fetchGame('2017Oscars'))}
      }
    />
    <Route
      path='games/:id/edit'
      component={EditGame}
      onEnter={(nextState, replace) =>
        requireAuth(
          nextState,
          replace,
          () => store.dispatch(fetchGame(nextState.params.id))
        )
      }
    />
    <Route path='games/:id' component={Game} />
    <Route
      path='groups/:id'
      component={Group}
      onEnter={(nextState, replace) =>
        requireAuth(
          nextState,
          replace,
          () => store.dispatch(fetchGroup(nextState.params.id))
        )
      }
    />
    <Route
      path='entries/:id'
      component={Entry}
      onEnter={(nextState, replace) =>
        requireAuth(
          nextState,
          replace,
          () => store.dispatch(fetchEntry(nextState.params.id))
        )
      }
    />
    <Route
      path='users/:id/entries'
      component={UserEntries}
      onEnter={(nextState, replace) =>
        requireAuth(
          nextState,
          replace,
          () => store.dispatch(fetchUserEntries(nextState.params.id))
        )
      }
    />
    <Route
      path='admin'
      component={Admin}
      onEnter={requireAuth}
    >
      <Route
        path='games/:id/master'
        component={MasterEntry}
        onEnter={(nextState, replace) => {
          requireAuth(
            nextState,
            replace,
            () => store.dispatch(fetchGame(nextState.params.id))
          )
        }}
      />
    </Route>
    <Route
      path="/login"
      component={Auth}
    />
    <Route path="*" component={NoMatch} />
  </Route>
)
