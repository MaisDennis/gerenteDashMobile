import 'react-native-gesture-handler';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useEffect } from 'react'
// -----------------------------------------------------------------------------
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Feed from './pages/Feed';
import Confirm from './pages/Confirm';
import TabRoutes from '~/components/TabRoutes';
import * as NavigationService from '~/services/NavigationService.js'
// import ip from '~/services/ip';

// import Main from './pages/Main';
// import User from './pages/User';
// -----------------------------------------------------------------------------

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itenId: 86,
          otherParam: 'anything you want here',
          theName: 'Testing 123',
        })}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {
          theName: 'Testing 123',
        })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  const { theName } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>theName: {JSON.stringify(theName)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          }
        )}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function ProfileScreen({route, navigation}) {
  const { theName } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>theName: {JSON.stringify(theName)}</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  )
}

function LogoTitle() {
  return (
    <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
      <Text>Home</Text>
      <Image
        style={{ width: 40, height: 40, borderRadius: 50 }}
        source={require('~/assets/1.jpeg')}
      />
    </View>

  );
}

const Stack = createStackNavigator();
// -----------------------------------------------------------------------------
export default function App() {
  const signed = useSelector(state => state.worker.signed);

  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
const toDate = formattedDate(new Date())

// useEffect(() => {
//   NavigationService.setNavigator(this.Navigator);
// }, [])
  // -----------------------------------------------------------------------------
  return (
    <NavigationContainer

    >
      <Stack.Navigator
        // initialRouteName={signed === true ? 'TabRoutes' : 'SignIn'}
        // ref={nav => {
        //   this.Navigator = nav;
        // }}
        initalRouteName={'TabRoutes'}
        screenOptions={{
          headerStyle: { backgroundColor: '#111' },
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
                {toDate}
                </Text>
                {/* <Image style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={{
                    uri:
                    `${ip}/files/${avatarPath}`,
                    // 'http://10.0.3.2:3333/files/eb600e7275d64eedcf5c0afa367e3222.jpeg',
                  }}
                /> */}
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
        <Stack.Screen name="SignUp" component={SignUp}
          options={{
            title: 'Cadastrar',
          }}
        />
         <Stack.Screen name="Feed" component={Feed}
          options={{
            title: 'Reportar',
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#111',
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
            backgroundColor: '#111',
          },
          }}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} options={
          {
            headerTitle: props => <LogoTitle {...props} />
          }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
        name="Profile"
        test="test"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.theName })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
