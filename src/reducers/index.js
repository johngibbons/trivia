// import * as ActionTypes from '../actions/action-types'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import users from '../reducers/users-reducer'
import entries from '../reducers/entries-reducer';
import games from '../reducers/games-reducer';
import ui from '../reducers/ui-reducer';
import pendingGame from '../reducers/pending-game-reducer';

const rootReducer = combineReducers({
  routing,
  ui,
  users,
  games,
  entries,
  pendingGame
});

export default rootReducer;
