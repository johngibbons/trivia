import {combineReducers} from 'redux';
import gamesById from './game';
import entriesById from './entry';
import questionsById from './question';
import answersById from './answer';

const rootReducer = combineReducers({
  gamesById,
  entriesById,
  questionsById,
  answersById
});

export default rootReducer;
