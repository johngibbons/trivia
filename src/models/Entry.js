import { Record, List } from 'immutable'

export const Entry = Record({
  id: undefined,
  name: '',
  game: undefined,
  selections: List(),
  created_at: undefined,
  updated_at: undefined,
  user: undefined
})
