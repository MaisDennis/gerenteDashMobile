import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: column;
  margin: 30px 30px 0px 30px;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-size: 18px;
`;

export const Container = styled.SafeAreaView`
  top: 50px;
  margin: 0 auto;
`;

export const Form = styled.View`
  top: 0;
  margin: 0 auto;
`;
export const FormInput = styled(Input)`
  top: 0;
  margin: 0 auto;
  height: 160px;
  width: 90%;
  text-align: justify;
  padding: 8px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background: #222;
`;

