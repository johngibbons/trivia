import { SET_NOMINEES } from "./action-types";

export function setNominees(nominees) {
  return {
    type: SET_NOMINEES,
    payload: { nominees },
  };
}
