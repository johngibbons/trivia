import { Record, Map } from 'immutable'

const Entry = Record({
  id: undefined,
  name: '',
  group: undefined,
  selections: Map(),
  created_at: undefined,
  updated_at: undefined,
  user: undefined
})

export default Entry;
