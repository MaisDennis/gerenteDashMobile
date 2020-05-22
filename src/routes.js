import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
// -----------------------------------------------------------------------------
import Main from './pages/Main';
import User from './pages/User';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3b3f42',
          },
          headerTintColor: '#F5F5F5',
          headerTitleStyle: {
            fontWeight: 'Bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={
          {
            headerTitle: props => <LogoTitle {...props} />
          }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            title: 'Entrar',
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp}
          options={{
            title: 'Cadastrar',
          }}
        />
        <Stack.Screen
        name="Profile"
        test="test"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params.theName })}
      />
      </Stack.Navigator>

    </NavigationContainer>

  );
}
