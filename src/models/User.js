import { List, Record } from 'immutable'

const User = Record({
  id: undefined,
  photoURL: '',
  email: '',
  entries: List(),
  games: List(),
  name: '',
  provider: '',
  username: ''
})

export default User;
