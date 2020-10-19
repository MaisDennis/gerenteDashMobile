import 'react-native-gesture-handler';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { Text, Image } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Whatsapp from '~/assets/whatsapp.png'
// -----------------------------------------------------------------------------
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import Message from './pages/Message';
import Confirm from './pages/Confirm';
import TabRoutes from '~/components/TabRoutes';
import HeaderView from './components/HeaderView'
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

  function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={Whatsapp}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={signed === true ? 'TabRoutes' : 'SignIn'}
        screenOptions={{
          headerStyle: { backgroundColor: '#222' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: "center",
          ...TransitionPresets.ModalTransition,
        }}
      >
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={{
            // headerTitle: (
            //   <>
            //     <Text>
            //     {todayDate}
            //     </Text>
            //   </>
            // ),
            headerTitle: (props => (
            <HeaderView/>
            )),
            headerStyleInterpolator: HeaderStyleInterpolators.forFade,
            headerTintColor: '#fff',
            // headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#222',
              height: 90,
            },
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            title: 'Entrar',
            headerShown: false,
          }}
        />
        <Stack.Screen name="Message" component={Message}
          options={{
            title: 'Enviar mensagem',
            headerShown: true,
            headerBackTitleVisible: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: '#222',
              height: 90,
            },
          }}
        />
        <Stack.Screen name="Confirm" component={Confirm}
          options={{
            title: 'Finalizar a tarefa',
            headerShown: true,
            headerBackTitleVisible: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: '#222',
              height: 90,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
