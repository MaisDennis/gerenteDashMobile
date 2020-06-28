import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import { useEffect } from 'react'
// -----------------------------------------------------------------------------
// import Routes from './routes';
import App from './App';

// -----------------------------------------------------------------------------
export default function Index() {

  // -----------------------------------------------------------------------------
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#222" />
          <App

          />
        </PersistGate>
      </Provider>
    </>
  );
}
