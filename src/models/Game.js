import { Record, Map, List } from "immutable";

const Game = Record({
  id: undefined,
  name: "",
  answered_order: List(),
  categories: new Map(),
});

export default Game;
