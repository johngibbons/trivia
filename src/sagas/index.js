import {
  watchSearchSubmit,
  watchSaveTitle,
  watchSavePerson
} from './adminSaga';
import { watchCheckAuthStatus } from './authSaga';
import {
  watchCreateGroup,
  watchFetchGroup
} from './groupSaga';

function* rootSaga() {
  yield [
    watchSearchSubmit(),
    watchCheckAuthStatus(),
    watchSaveTitle(),
    watchSavePerson(),
    watchCreateGroup(),
    watchFetchGroup()
  ];
}

export default rootSaga
