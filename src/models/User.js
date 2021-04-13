import { Map, Record } from "immutable";

const User = Record({
  id: undefined,
  photoURL: "",
  email: "",
  entries: Map(),
  groups: Map(),
  name: "",
});

export default User;
