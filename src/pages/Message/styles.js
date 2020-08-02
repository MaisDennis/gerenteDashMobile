import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  top: 50px;
  margin: 0 auto;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  /* background: #ff5f; */
`;

export const Form = styled.View`
  top: 0;
  margin: 0 auto;
  width: 100%;
  /* background: #ff5f; */
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  margin: 14px;
`;

export const TaskName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin: auto 4px;
`;

export const TaskDescriptionView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 2px;
  border-color: #222;
  align-items: center;
  width: 90%;
  padding: 4px;
  background: #F5F5F5;
  border-radius: 4px;
  align-self: center;
  margin-bottom: 14px;
`;

export const TaskDescriptionText = styled.Text`
  color: #222;
  font-weight: normal;
  font-size: 14px;
  margin: 2px;
  text-align: justify;
  line-height: 20px;
  margin: 4px;
`;

export const FormInput = styled(TextInput)`
  top: 0;
  margin: 0 auto;
  height: 100px;
  width: 90%;
  text-align: justify;
  padding: 8px;
  background: #fff;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  color: #222;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background: #58595B;
  width: 150px;
`;

