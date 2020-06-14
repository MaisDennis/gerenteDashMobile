import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import Input from '~/components/Input';
import Button from '~/components/Button';
// -----------------------------------------------------------------------------
export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const ImageLogo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 25px;
  margin: 20px;
`;

export const Title = styled.Text`
font-size: 18px;
margin: 8px auto;
/* background: #999; */
color: #fff;
`;

export const StyledIcon = styled(Icon)`
margin: 0 auto;
`;

export const Div1 = styled.View`
flex-direction: row;
justify-content: space-between;
/* background: #5edc1f; */
width: 100%;
height: 40%;
padding: 4px;
`;

export const Div2 = styled.View`
/* background: #0000ff; */
width: 49%;
height: 100%;
border: 2px #fff;
border-radius: 4px;
margin: auto;
`;

export const Div3 = styled.View`
flex-direction: row;
margin: auto;
/* background: #5edc1f; */
border-radius: 4px;
`;

export const Div4 = styled.View`

`;

export const FormUser = styled.View`
width: 100%;
height: 54%;
margin: 0 auto;
/* background: #c4ce3b; */
`;

export const FormWorker = styled.View`
width: 100%;
height: 54%;
margin: 0;
/* background: #c4ce3b; */
`;

export const FormInputUserEmail = styled(Input)`
  margin: auto;
  width: 80%;
  padding-left: 10px;
`;

export const FormInputWorkerId = styled(Input)`
  margin: auto;
  width: 80%;
  padding-left: 10px;
`;

export const FormInputUserPassword = styled(Input)`
  margin: auto;
  width: 80%;
  padding-left: 10px;
`;

export const FormInputWorkerPassword = styled(Input)`
  margin: auto;
  width: 80%;
  padding-left: 10px;
`;

export const SubmitButton = styled(Button)`
  margin: auto;
`;
