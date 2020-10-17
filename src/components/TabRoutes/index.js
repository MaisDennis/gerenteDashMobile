import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import Dashboard from '~/pages/Dashboard';
import DashboardFinishedTasks from '~/pages/DashboardFinishedTasks';
import {
  Header, TopHeaderView, TagView,
  Span1, Span2, TitleWorkerName, TitleTask,
  BottomHeaderView, ExitButton, ExitButtonText
} from './styles';
import { signOut } from '~/store/modules/worker/actions';
// -----------------------------------------------------------------------------
const Tab = createBottomTabNavigator();

export default function TabRoutes({ navigation }) {
  const worker = useSelector(state => state.worker.workerData);
  const signed = useSelector(state => state.worker.signed);
  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(signOut());
  }

  if (!signed) {
    navigation.navigate('SignIn');
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <Header>
        <TopHeaderView>
          <TagView>
            <Span1>Atenção,</Span1>
            <TitleWorkerName>{worker.name}</TitleWorkerName>
          </TagView>
          <TagView>
            <ExitButton>
              <ExitButtonText onPress={handleLogout}>Sair</ExitButtonText>
              {/* <Icon name='disc' size={20} color='#f64C75' onPress={handleLogout}/> */}
            </ExitButton>

          </TagView>
        </TopHeaderView>
        <BottomHeaderView>
          <Span2>Suas tarefas:</Span2>
        </BottomHeaderView>
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
          activeBackgroundColor: '#222',
          inactiveBackgroundColor: '#222',
          activeTintColor: '#F5F5F5',
          inactiveTintColor: '#444',
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
