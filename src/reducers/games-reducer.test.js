import { createGameSuccess, setGame } from "../actions/game-actions";
import { Map } from "immutable";
import Game from "../models/Game";
import reducer from "./games-reducer";

describe("games reducer", () => {
  it("should add game on create success", () => {
    const newGameId = 2;
    const game = { name: "New Game" };
    const action = createGameSuccess(newGameId, game);
    const currentState = new Map().set(
      1,
      new Game({ id: 1, name: "Some game" })
    );
    const expectedResult = currentState.set(
      2,
      new Game({ id: 2, name: "New Game" })
    );
    expect(reducer(currentState, action)).toEqual(expectedResult);
  });

  it("should add set game success", () => {
    const game = new Game({ id: 2, name: "New Game" });
    const action = setGame(game);
    const currentState = new Map().set(
      1,
      new Game({ id: 1, name: "Some game" })
    );
    const expectedResult = currentState.set(2, game);
    expect(reducer(currentState, action)).toEqual(expectedResult);
  });
});
