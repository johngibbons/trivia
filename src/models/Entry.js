import { Record, Map } from 'immutable'

const Entry = Record({
  id: undefined,
  name: '',
  group: undefined,
  selections: Map(),
  user: undefined
})

export default Entry;
