import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import Dashboard from '~/pages/Dashboard';
import DashboardFinishedTasks from '~/pages/DashboardFinishedTasks';
import {
  Header, DivTopHeader, Div1, Avatar, Div2,
  Span1, Title, DivBottomheader, Title2,
} from './styles';
import ip from '~/services/ip';
import { signOut } from '~/store/modules/worker/actions';
import logo from '~/assets/logo.png';
// import Profile from '~/pages/Profile';
// -----------------------------------------------------------------------------
const Tab = createBottomTabNavigator();

export default function TabRoutes({ navigation }) {

  const worker = useSelector(state => state.worker.workerData);
  const avatarObject = useSelector(state => state.worker.workerData.avatar)
  let avatarPath = null
  // const avatarPath = useSelector(
  //   state => state.worker.workerData.avatar.path
  // );
  if (avatarObject) {
    avatarPath = useSelector(
      state => state.worker.workerData.avatar.path
    );
  }

  const dispatch = useDispatch();

  async function handleLogout() {
    await navigation.navigate('SignIn');
    dispatch(signOut());
    // await navigation.navigate('SignIn');
    // console.tron.log('Outta here')
  }
  // -----------------------------------------------------------------------------
  return (
    <>
    <Header>
          <DivTopHeader>
            <Div1>
              {
                avatarObject === null
                  ? <Avatar
                      // source={avatar.url}
                      source={logo}
                    />
                  : <Avatar
                      // source={avatar.url}
                      source={logo}
                    />
                  // : <Avatar
                  //     // source={avatar.url}
                  //     source={{
                  //       uri:
                  //       `${ip}/files/${avatarPath}`,
                  //       // 'http://10.0.3.2:3333/files/eb600e7275d64eedcf5c0afa367e3222.jpeg',
                  //     }}
                  //   />

              }
              {/* <AvatarInput/> */}
              <Div2>
                <Span1>Bem vindo de volta,</Span1>
                <Title>{worker.name}</Title>
              </Div2>
            </Div1>
            <Div2>
              <Icon name='stop-circle' size={34} color='#f64C75' onPress={handleLogout}/>
            </Div2>
          </DivTopHeader>
          <DivBottomheader>
            <Title2>Tarefas</Title2>
          </DivBottomheader>
        </Header>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'activity' : 'activity';
          } else if (route.name === 'Finished') {
            iconName = focused ? 'archive' : 'archive';
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#111',
        inactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ tabBarLabel: 'Em aberto' }}
      />
       <Tab.Screen
        name="Finished"
        component={DashboardFinishedTasks}
        options={{ tabBarLabel: 'Concluídas' }}
      />
    </Tab.Navigator>
    </>
  );
}
