import { savePendingCategory } from "../actions/pending-game-actions";

import Category from "../models/Category";
import Game from "../models/Game";

import reducer from "../reducers/pending-game-reducer";

describe("pending game reducer", () => {
  it("should save pending category", () => {
    const pendingCategory = { id: 1, name: "Some Category" };
    const action = savePendingCategory(pendingCategory);
    const expectedResult = new Game().setIn(
      ["categories", pendingCategory.id],
      new Category(pendingCategory)
    );
    expect(reducer(new Game(), action)).toEqual(expectedResult);
  });
});
