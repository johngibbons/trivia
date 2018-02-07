import { Record, Map } from 'immutable'

export const UI = Record({
  modal: undefined,
  isAlertBarOpen: false,
  alertBarMessage: '',
  searchValue: '',
  newGameName: '',
  newGroupName: '',
  newEntryName: '',
  values: new Map(),
  nextLocation: ''
})
