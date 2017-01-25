// import * as ActionTypes from '../actions/action-types'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import users from '../reducers/users-reducer'
import entries from '../reducers/entries-reducer';
import games from '../reducers/games-reducer';
import ui from '../reducers/ui-reducer';
import pendingGame from '../reducers/pending-game-reducer';
import pendingQuestion from '../reducers/pending-question-reducer';
import pendingPossibleAnswer from '../reducers/pending-possible-answer-reducer';
import questions from '../reducers/questions-reducer';
import answers from '../reducers/possible-answers-reducer';
import admin from '../reducers/admin-reducer';
import currentUser from '../reducers/current-user-reducer';

const rootReducer = combineReducers({
  admin,
  answers,
  currentUser,
  entries,
  games,
  pendingGame,
  pendingQuestion,
  pendingPossibleAnswer,
  questions,
  routing,
  ui,
  users
});

export default rootReducer;
