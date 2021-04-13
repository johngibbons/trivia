import { Record, Map } from "immutable";

export const UI = Record({
  modal: undefined,
  isAlertBarOpen: false,
  isAlertBarError: false,
  alertBarMessage: "",
  searchValue: "",
  newGameName: "",
  newGroupName: "",
  newEntryName: "",
  values: new Map(),
  nextLocation: "",
});
