export const currentGameSelector = (state, props) => state.games.get(props.routeParams.id)
