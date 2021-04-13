import { Record, Map } from "immutable";

const Category = Record({
  id: undefined,
  name: "",
  game: undefined,
  nominees: new Map(),
  correctAnswer: null,
  order: 0,
  presentationOrder: 0,
  value: 0,
});

export default Category;
