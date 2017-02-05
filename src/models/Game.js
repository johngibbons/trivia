import { Record, List } from 'immutable'

const Game = Record({
  id: undefined,
  name: '',
  answered_order: List(),
  questions: List(),
  created_at: undefined,
  updated_at: undefined,
  user: undefined
});

export default Game;
