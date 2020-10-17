import styled from 'styled-components/native';
import Button from '~/components/Button';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const StyledScrollView = styled.ScrollView`

`;

export const Container = styled.SafeAreaView`
  top: 5px;
  margin: 0 auto;
  height: 600px;
  width: 90%;
  /* margin-bottom: 14px; */
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  padding: 4px;
   /* background: #444; */
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  /* background: #ff5f; */
`;

export const CameraView = styled.View`
  background: #F5F5;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const TaskName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  /* background: #ff5f; */
  margin: auto 4px;
`;

export const CameraButton = styled(Button)`
  top: 40px;
  margin: 0px auto 10px;
  background: #58595B;
  width: 90%;
`;
