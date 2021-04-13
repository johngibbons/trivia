import { SET_CATEGORIES } from "./action-types";

import { setCategories } from "./category-actions";

describe("category actions", () => {
  it("should set retrieved categories", () => {
    const categories = {
      category1: {
        name: "Category 1",
      },
      category2: {
        name: "Category 1",
      },
    };
    const expectedAction = {
      type: SET_CATEGORIES,
      payload: { categories },
    };
    expect(setCategories(categories)).toEqual(expectedAction);
  });
});
