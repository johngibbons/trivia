import { Record } from "immutable";

const Nominee = Record({
  id: undefined,
  text: "",
  secondaryText: "",
  category: undefined,
  game: undefined,
  imageUrl: "",
});

export default Nominee;
