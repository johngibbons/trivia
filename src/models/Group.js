import { Record, Map } from 'immutable';

const Group = Record({
  id: undefined,
  name: '',
  admin: undefined,
  entries: Map(),
  created_at: undefined,
  updated_at: undefined
});

export default Group;
