import { List, Record } from 'immutable'

export const User = Record({
  id: undefined,
  photoURL: '',
  email: '',
  entries: List(),
  games: List(),
  last_logged_in: undefined,
  name: '',
  provider: undefined,
  updated_at: undefined,
  username: ''
})

