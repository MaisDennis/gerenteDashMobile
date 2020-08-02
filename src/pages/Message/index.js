import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import api from '~/services/api';
import {
  Container, Form, TitleView, TaskName, TaskDescriptionView,
  TaskDescriptionText, FormInput, SubmitButton
} from './styles';
// -----------------------------------------------------------------------------
export default function Message({ navigation, route }) {
  const idRef = useRef();
  const [content, setContent] = useState('');
  const id = useSelector(state => state.worker.workerId);
  const worker_name = useSelector( state => state.worker.workerData.name)
  const { task_id, user_id, taskName, taskDescription } = route.params;

  async function handleMessage() {
    await api.post(`messages/mobile/${task_id}`, {
      worker_id: id,
      worker_name,
      user_id,
      message_worker: content,
    });
    navigation.navigate('Dashboard');
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <Container>
        <TitleView>
          <Icon name="clipboard" size={20} style={{ color: '#222'}}/>
          <TaskName>{taskName}</TaskName>
        </TitleView>
        <Form>
          <TaskDescriptionView>
            <TaskDescriptionText>
              {taskDescription}
            </TaskDescriptionText>
          </TaskDescriptionView>
          <FormInput
            icon="edit-3"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Mensagem aqui."
            placeholderTextColor="#c8c2c0"
            multiline
            ref={idRef}
            returnKeyType="send"
            value={content}
            onChangeText={setContent}
          />
          <SubmitButton onPress={handleMessage}><Icon name='mail' size={20} color='#fff'></Icon></SubmitButton>
        </Form>
      </Container>
    </>
  );
}
