import { Record, Map } from 'immutable';

export const UI = Record({
  modal: undefined,
  searchValue: '',
  newGameName: '',
  newGroupName: '',
  newEntryName: '',
  values: new Map(),
  nextLocation: ''
});

