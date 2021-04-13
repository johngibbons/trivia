import Category from "../../models/Category";
import { Map, List } from "immutable";

export default Map({
  a: new Category({
    id: "a",
    text: "Best Picture",
    value: 16,
    nominees: List(["k", "l", "m", "n", "o"]),
  }),
  b: new Category({
    id: "b",
    text: "Best Actor",
    value: 8,
    nominees: List(["a", "b", "c", "d", "e"]),
  }),
  c: new Category({
    id: "c",
    text: "Best Actress",
    value: 8,
    nominees: List(["f", "g", "h", "i", "j"]),
  }),
});
