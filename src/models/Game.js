import { Record, List } from 'immutable'

export const Game = Record({
  id: undefined,
  name: '',
  answered_order: List(),
  entries: List(),
  questions: List(),
  created_at: undefined,
  updated_at: undefined,
  user: undefined
})
