import gamesById from './game';
import entriesById from './entry';
import questionsById from './question';
import answersById from './answer';
import {combineReducers} from 'redux';

const combined = combineReducers({
  gamesById,
  entriesById,
  questionsById,
  answersById
});

export default combined;
