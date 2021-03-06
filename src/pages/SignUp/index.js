import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
// -----------------------------------------------------------------------------
import Background from '~/components/Background';
import logo from '~/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
} from './styles';
import { signUpRequest } from '~/store/modules/worker/actions';
// -----------------------------------------------------------------------------
export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.worker.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }
  // -----------------------------------------------------------------------------
  return (
    <Background>
      <Container>

        <Form>
          <FormInput
            icon="mail-outline"

            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>Criar</SubmitButton>
        </Form>

      </Container>
    </Background>
  );
}
