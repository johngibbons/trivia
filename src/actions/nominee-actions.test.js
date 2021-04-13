import { SET_NOMINEES } from "./action-types";

import { setNominees } from "./nominee-actions";

describe("nominee actions", () => {
  it("should set retrieved nominees", () => {
    const nominees = {
      nominee1: {
        text: "Category 1",
      },
      nominee2: {
        text: "Category 1",
      },
    };
    const expectedAction = {
      type: SET_NOMINEES,
      payload: { nominees },
    };
    expect(setNominees(nominees)).toEqual(expectedAction);
  });
});
