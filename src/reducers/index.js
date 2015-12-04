import remoteState from './state';
import gamesById from './game';
import reduceReducers from 'reduce-reducers';

const combined = reduceReducers(
  remoteState,
  gamesById
);

export default combined;

