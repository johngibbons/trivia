import Game from '../models/Game';

export const currentGameSelector = (state, props) =>
  state.games.get(props.routeParams.id) || new Game();
