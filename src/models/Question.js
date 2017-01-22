import { Record, List } from 'immutable'

export const Question = Record({
  id: undefined,
  text: '',
  game: undefined,
  possible_answers: List(),
  point_value: 1,
  correct_answer: undefined,
  created_at: undefined,
  updated_at: undefined
})
