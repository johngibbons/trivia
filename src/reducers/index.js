// import * as ActionTypes from '../actions/action-types'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import users from '../reducers/users-reducer'
import entries from '../reducers/entries-reducer';
import games from '../reducers/games-reducer';
import ui from '../reducers/ui-reducer';
import pendingGame from '../reducers/pending-game-reducer';
import pendingCategory from '../reducers/pending-category-reducer';
import pendingNominee from '../reducers/pending-nominee-reducer';
import categories from '../reducers/categories-reducer';
import nominees from '../reducers/nominees-reducer';
import admin from '../reducers/admin-reducer';
import currentUser from '../reducers/current-user-reducer';
import groups from '../reducers/groups-reducer';

const rootReducer = combineReducers({
  admin,
  nominees,
  currentUser,
  entries,
  games,
  groups,
  pendingGame,
  pendingCategory,
  pendingNominee,
  categories,
  routing,
  ui,
  users
});

export default rootReducer;
