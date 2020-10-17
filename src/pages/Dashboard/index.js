import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// -----------------------------------------------------------------------------
import Task from '~/components/Tasks';
import { workerCheckIn, signOut } from '~/store/modules/worker/actions';
import api from '~/services/api';
import { Container, List, Title3 } from './styles';
// -----------------------------------------------------------------------------
export default function Dashboard({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const name = useSelector(state => state.worker.workerData.name);

  useEffect(() => {
    loadTasks();
  }, [ name ]);

  async function loadTasks() {
    const response = await api.get(`tasks/unfinished`, {
      params: { test: name },
    });
    setTasks(response.data);

  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <Container>
        { tasks == ''
            ? <Title3>Não há tarefas em aberto.</Title3>
            : <List
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <>
                    <Task data={item} navigation={navigation} />
                  </>
                )}
              />
        }
      </Container>
    </>
  );
}
