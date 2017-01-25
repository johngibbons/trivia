import { createSelector } from 'reselect';

const gamesSelector = state => state.games;

export const currentGameSelector = (state, props) => state.games.get(props.routeParams.id)
