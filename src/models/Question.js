import { Record, List } from 'immutable'

export const Question = Record({
  id: undefined,
  text: '',
  game: undefined,
  possible_answers: List(),
  created_at: undefined,
  updated_at: undefined
})
