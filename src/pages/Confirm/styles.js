import styled from 'styled-components/native';
import Button from '~/components/Button';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  top: 50px;
  margin: 0 auto;
  /* background: #f5f5; */
  height: auto;
  width: 90%;
  /* margin-bottom: 14px; */
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  /* background: #ff5f; */
`;

export const TaskName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  /* background: #ff5f; */
  margin: auto 4px;
`;

export const CameraButton = styled(Button)`
  margin: 0px auto 10px;
  background: #58595B;
  width: 90%;
`;
