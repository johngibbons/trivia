import Group from '../models/Group';

export const currentGroupSelector = (state, props) =>
  state.groups.get(props.params.id) || new Group()
