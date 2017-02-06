import {
  watchSearchSubmit,
  watchSaveTitle,
  watchSavePerson
} from './adminSaga';
import { watchCheckAuthStatus } from './authSaga';
import { watchCreateGame } from './gameSaga';
import {
  watchCreateGroup,
  watchFetchGroup
} from './groupSaga';
import {
  watchCreateEntry,
  watchFetchEntry
} from './entrySaga';

function* rootSaga() {
  yield [
    watchSearchSubmit(),
    watchCheckAuthStatus(),
    watchSaveTitle(),
    watchSavePerson(),
    watchCreateGame(),
    watchCreateGroup(),
    watchFetchGroup(),
    watchCreateEntry(),
    watchFetchEntry()
  ];
}

export default rootSaga
