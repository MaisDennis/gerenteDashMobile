import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import api from '~/services/api';
import { Header, Container, Form, FormInput, SubmitButton } from './styles';
// -----------------------------------------------------------------------------
export default function Feed({ route }) {
  const idRef = useRef();
  const [content, setContent] = useState('');
  const id = useSelector(state => state.worker.workerId);

  const { task_id } = route.params;
  console.tron.log(task_id);

  async function handleFeed() {
    // console.tron.log(id);


    await api.post(`tasks/${task_id}/tfeed`, {
      worker_id: id,
      user_id: null,
      feed: content,
    });
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <Header />
      <Container>
        <Form>
          <FormInput
            icon="edit-3"
            keboardType="text"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Mensagem aqui."
            ref={idRef}
            returnKeyType="send"
            value={content}
            onChangeText={setContent}
          />
          <SubmitButton onPress={handleFeed}><Icon name='check' size={20} color='#fff'></Icon></SubmitButton>
        </Form>
      </Container>
    </>
  );
}
