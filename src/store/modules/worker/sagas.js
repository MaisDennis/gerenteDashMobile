
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack'
// -----------------------------------------------------------------------------
import api from '~/services/api';
import { signInSuccess, signFailure, signOut } from './actions';
// import * as NavigationService from '~/services/NavigationService.js'
// -----------------------------------------------------------------------------


export function* signIn({ payload }) {
    const { workerId } = payload;
    // const { navigation } = payload;

    const responseWorkers = yield call(api.get, 'workers/mobile', {
      params: { test: '' },
    });
    // const navigateAction = StackNavigationOptions.navigate({
    //   routeName: 'TabRoutes',
    //   params: {},

    //   action: StackNavigationOptions.navigate({ routeName: 'TabRoutes' }),
    // });
    yield delay(3000);
  // try {
    const workerData = responseWorkers.data.find(
      w => w.id == workerId
    );

    if (workerData) {
      yield put(signInSuccess(workerId, workerData));


      // this.props.navigation.dispatch(navigateAction);
    } else {
      yield put(signFailure());
      Alert.alert(
        'Erro no login, verifique os dados.'

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
// export function signOut() {
// }
// -----------------------------------------------------------------------------
export default all([
  takeLatest('@worker/SIGN_IN_REQUEST', signIn),
  // takeLatest('@worker/SIGN_OUT', signOut),
]);
