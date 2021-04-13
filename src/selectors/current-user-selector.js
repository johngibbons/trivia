export const currentUserSelector = (state) =>
  state.users.get(state.currentUser.id);
