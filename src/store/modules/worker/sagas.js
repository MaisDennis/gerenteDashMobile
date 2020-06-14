
import { takeLatest, call, put, all} from 'redux-saga/effects';
import { Alert } from 'react-native';
// -----------------------------------------------------------------------------
import api from '~/services/api';
import { signInSuccess, signFailure, signOut } from './actions';
// -----------------------------------------------------------------------------
export function* signIn({ payload }) {
    const { workerId } = payload;
    const { navigation } = payload;

    const responseWorkers = yield call(api.get, 'workers', {
      // params: { test: '' },
    });

  // try {
    const workerData = responseWorkers.data.find(
      w => w.id == workerId
    );

    if (workerData) {
      yield put(signInSuccess(workerId, workerData));

    } else {
      yield put(signFailure());
      Alert.alert(
        'test'
      );
    }


  // } catch (err) {

  //   yield put(signFailure());

  //   Alert.alert(
  //     'Falha na autenticação',
  //     'Houve um erro no login, verifique seus dados'
  //   );
  // }
}
// -----------------------------------------------------------------------------
export function signOnOut() {
}
// -----------------------------------------------------------------------------
export default all([
  takeLatest('@worker/SIGN_IN_REQUEST', signIn),
  takeLatest('@worker/SIGN_OUT', signOnOut),
]);
