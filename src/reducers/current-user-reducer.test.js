import { signInSuccess, signOutSuccess } from "../actions/user-actions";
import reducer from "../reducers/current-user-reducer";

import User from "../models/User";

describe("current user reducer", () => {
  it("should return inital state", () => {
    const expectedResult = new User();

    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it("should set the current user to returned user", () => {
    const response = {
      displayName: "John Gibbons",
      email: "johngibbons10@gmail.com",
      photoURL: "http://john.jpeg",
    };

    const expectedResult = new User({
      name: response.displayName,
      email: response.email,
      photoURL: response.photoURL,
    });

    const action = signInSuccess(response);

    expect(reducer(undefined, action)).toEqual(expectedResult);
  });

  it("should reset the current user on sign out", () => {
    const currentState = new User({
      id: 1,
      name: "John Gibbons",
    });
    const expectedResult = new User();
    const action = signOutSuccess();

    expect(reducer(currentState, action)).toEqual(expectedResult);
  });
});
