import { watchSearchSubmit } from './adminSaga';
import { watchCheckAuthStatus } from './authSaga';

function* rootSaga() {
  yield [
    watchSearchSubmit(),
    watchCheckAuthStatus()
  ];
}

export default rootSaga
