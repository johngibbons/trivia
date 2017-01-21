import { Record, List, Map } from 'immutable'

const User = Record({
  id: undefined,
  avatar_url: '',
  email: '',
  entries: List(),
  games: List(),
  last_logged_in: undefined,
  name: '',
  provider: undefined,
  updated_at: undefined,
  username: ''
})

const users = (state = Map(), action) => {
  switch (action.type) {
  default:
    return state;
  }
}

export default users;
