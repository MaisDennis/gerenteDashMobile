import 'react-native-gesture-handler';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { Text, Image } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
// -----------------------------------------------------------------------------
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import Message from './pages/Message';
import Confirm from './pages/Confirm';
import TabRoutes from '~/components/TabRoutes';
// -----------------------------------------------------------------------------
const Stack = createStackNavigator();
// -----------------------------------------------------------------------------
export default function App() {
  const signed = useSelector(state => state.worker.signed);

  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
const todayDate = formattedDate(new Date())
  // -----------------------------------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={signed === true ? 'TabRoutes' : 'SignIn'}
        screenOptions={{
          headerStyle: { backgroundColor: '#222' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: "center",
          ...TransitionPresets.ModalTransition,
        }}
      >
        <Stack.Screen
          name="TabRoutes"
          component={TabRoutes}
          options={{
            headerTitle: (
              <>
                <Text>
                {todayDate}
                </Text>
              </>
            ),
            headerStyleInterpolator: HeaderStyleInterpolators.forFade,
            headerShown: true,
            headerBackTitleVisible: true,
            headerStyle: {
              backgroundColor: '#222',
            },
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            title: 'Entrar',
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="SignUp" component={SignUp}
          options={{
            title: 'Cadastrar',
          }}
        /> */}
         <Stack.Screen name="Message" component={Message}
          options={{
            title: 'Reportar',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#222',
            },
          }}
        />
        <Stack.Screen name="Confirm" component={Confirm}
          options={{
            title: 'Confirmar',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#222',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
