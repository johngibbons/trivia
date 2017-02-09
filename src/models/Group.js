import { Record, Map } from 'immutable';

const Group = Record({
  id: undefined,
  name: '',
  admin: undefined,
  entries: Map(),
  game: undefined
});

export default Group;
