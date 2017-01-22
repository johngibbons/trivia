export const User = Record({
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

