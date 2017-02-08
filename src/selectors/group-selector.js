import Group from '../models/Group';

export const currentGroupSelector = (state, props) =>
  state.groups.get(props.routeParams.id) || new Group()
