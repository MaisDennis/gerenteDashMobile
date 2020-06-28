import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import { signInRequest, signFailure } from '~/store/modules/worker/actions';

import Background from '~/components/Background';
import logo from '~/assets/logo.png';
import {
  Container, ImageLogo, Title, Div1, Div2,
  Div3, Div4, FormUser, FormWorker, FormInputUserEmail, FormInputWorkerId,
  SubmitButton, FormInputUserPassword, FormInputWorkerPassword,
} from './styles';
// -----------------------------------------------------------------------------
export default function SignIn({ navigation }) {
  const idRef = useRef();
  const userRef = useRef();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [workerId, setWorkerId] = useState('');
  const loading = useSelector(state => state.worker.loading);
  const workerData = useSelector(state => state.worker.workerData);
  const signed = useSelector(state => state.worker.signed);

  function handleSubmit() {
    dispatch(signInRequest(workerId));


    if (signed) {
      // console.tron.log('signed')
      // // dispatch(signFailure());
      navigation.navigate('TabRoutes')
    }

  }
  // -----------------------------------------------------------------------------
  return (
    <Background>
      <Container>
        <ImageLogo source={logo} />
        <Div1>
          <Div2>
            <Title>Coordenador</Title>
            <Div3>
            <Icon name='user' size={30} color='#009966'/>
            </Div3>

            <FormUser>
              <FormInputUserEmail
                icon="log-in"
                placeholder="email"
                ref={userRef}
                returnKeyType="send"

                value={userEmail}
                onChangeText={setUserEmail}
              />
              <FormInputUserPassword
                icon="log-in"
                placeholder="senha"
              />
              <SubmitButton loading={loading} onPress={handleSubmit}><Icon name='play-circle' size={24} color='#fff'/></SubmitButton>
            </FormUser>
          </Div2>

          <Div2>
            <Title>Encarregados</Title>
            <Div3>
              <Div4>
                <Icon name='user' size={30} color='#ffdd33'/>
                <Icon name='user' size={30} color='#009966'/>
              </Div4>
              <Div4>
                <Icon name='user' size={30} color='#009966'/>
                <Icon name='user' size={30} color='#ffdd33'/>
              </Div4>

            </Div3>

            <FormWorker>
              <FormInputWorkerId
                icon="log-in"
                placeholder="ID"
                ref={idRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={workerId}
                onChangeText={setWorkerId}
              />
              <FormInputWorkerPassword
                icon="log-in"
                placeholder="senha"
              />
              <SubmitButton loading={loading} onPress={handleSubmit}><Icon name='play-circle' size={24} color='#fff'/></SubmitButton>
            </FormWorker>
          </Div2>
        </Div1>

        {/* <SignLink onPress={() => navigation.navigate('SignUp')}>
        </SignLink> */}
      </Container>
    </Background>
  );
}
