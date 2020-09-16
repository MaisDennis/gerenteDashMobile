import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRawValue } from 'react-native-masked-text'
// -----------------------------------------------------------------------------
import { signInRequest } from '~/store/modules/worker/actions';

import Background from '~/components/Background';
import logo from '~/assets/detective/detectiveBlack.png';
import godtaskerFont from '~/assets/detective/godtaskerFontPlainGreySmall.png';
import {
  Container, ImageLogo, ImageGodtaskerFont, Title, Div1, Div2, FormUser,
  FormWorker, FormInputUserEmail, FormInputWorkerId,
  SubmitButton, ButtonText, FormInputUserPassword, FormInputWorkerPassword, PhoneMask
} from './styles';
// -----------------------------------------------------------------------------
export default function SignIn({ navigation }) {
  // const idRef = useRef();
  const dispatch = useDispatch();
  // const [userEmail, setUserEmail] = useState('');
  const [workerPhoneNumber, setWorkerPhoneNumber] = useState('');
  const [workerPassword, setWorkerPassword] = useState('');
  const loading = useSelector(state => state.worker.loading);
  const signed = useSelector(state => state.worker.signed);

  function handleSubmit() {

    const unmaskedWorkerPhoneNumber = (maskedPhoneNumber => maskedPhoneNumber.replace(/[()\s-]/g, ''))
    // const unmaskedWorkerPhoneNumber = unMaskPhoneNumber(workerPhoneNumber)
    // function unMaskPhoneNumber(maskedPhoneNumber) {
    //   return (maskedPhoneNumber.replace(/[()\s-]/g, ''))
    // }

    dispatch(signInRequest(unmaskedWorkerPhoneNumber(workerPhoneNumber), workerPassword));
  }

  if (signed) {
    navigation.navigate('TabRoutes')
  }
  // -----------------------------------------------------------------------------
  return (
    <Background>
      <Container>
        <ImageLogo source={logo} />
        <ImageGodtaskerFont source={godtaskerFont} />
        <Div1>
          {/* <Div2>
            <Title>Tasker</Title>
            <FormUser>
              <FormInputUserEmail
                icon="mail"
                placeholder="E-mail"
                ref={userRef}
                returnKeyType="send"
                value={userEmail}
                onChangeText={setUserEmail}
              />
              <FormInputUserPassword
                icon="unlock"
                placeholder="Senha"
              />
              <SubmitButton loading={loading} onPress={handleSubmit}><Icon name='play' size={14} color='#fff'/></SubmitButton>
            </FormUser>
          </Div2> */}

          <Div2>
            <Title>Funcionários</Title>
            <FormWorker>
              {/* <FormInputWorkerId
                icon="log-in"
                placeholder="(xx)x-xxxx-xxxx"
                // ref={idRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={workerPhoneNumber}
                onChangeText={setWorkerPhoneNumber}
              /> */}
               <PhoneMask
                type={'cel-phone'}
                options={
                  {
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }
                }
                icon="log-in"
                placeholder="Número de Whatsapp"
                // ref={idRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={workerPhoneNumber}
                onChangeText={
                  setWorkerPhoneNumber
                }
                placeholderTextColor={'#999'}

              />
              <FormInputWorkerPassword
                icon="unlock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={workerPassword}
                onChangeText={setWorkerPassword}
                placeholderTextColor={'#999'}
              />

              <SubmitButton loading={loading} onPress={handleSubmit}>
                <ButtonText>Entrar</ButtonText>
              </SubmitButton>
            </FormWorker>
          </Div2>
        </Div1>
      </Container>
    </Background>
  );
}
