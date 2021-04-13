import reducer from "./nominees-reducer";
import { setNominees } from "../actions/nominee-actions";
import { Map } from "immutable";
import Nominee from "../models/Nominee";

describe("nominees reducer", () => {
  it("sets retrieved nominees", () => {
    const newNominees = {
      1: {
        id: 1,
        name: "nominee 1",
      },
      2: {
        id: 2,
        name: "nominee 2",
      },
    };
    const existingNominees = {
      2: {
        id: 2,
        name: "an old name",
      },
      3: {
        id: 3,
        name: "different nominee",
      },
    };
    const initialState = new Map()
      .set(2, new Nominee(existingNominees[2]))
      .set(3, new Nominee(existingNominees[3]));
    const action = setNominees(newNominees);
    const expectedResult = new Map()
      .set(1, new Nominee(newNominees[1]))
      .set(2, new Nominee(newNominees[2]))
      .set(3, new Nominee(existingNominees[3]));

    expect(reducer(initialState, action).toJS()).toEqual(expectedResult.toJS());
  });
});
